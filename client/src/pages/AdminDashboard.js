import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Dialog from "../components/Dialog";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";

function AdminDashboard() {
  const date = new Date();
  const [dailyEggPrice, setDailyEggPrice] = useState(0);
  const [type, setType] = useState("daily");
  const [eggData, setEggData] = useState();
  const navigate = useNavigate();
  const [large, setLarge] = useState("");
  const [medium, setMedium] = useState("");
  const [small, setSmall] = useState("");
  const [bullet, setBullet] = useState("");
  const [loaderState, setLoaderState] = useState(false);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [editprice, setEditprice] = useState(null);
  const [updatedPrice, setUpdatedPrice] = useState(0);
  const [updatedDate, setUpdatedDate] = useState(date.getDate());

  const handleUpdate = async (e) => {
    setLoaderState(true);
    e.preventDefault();
    if (type === "daily") {
      const res = await axios.post(
        `/user/update-daily`,
        {
          date: `${date.getDate()}-${
            date.getMonth() + 1
          }-${date.getFullYear()}`,
          price: dailyEggPrice,
        },
        {
          withCredentials: true,
        }
      );
      setEggData(res.data.data);
      setMessage(res.data.message);
      openDialog();
      setLoaderState(false);
    } else {
      const res = await axios.post(
        `/user/update-all/${type}`,
        { large, medium, small, bullet },
        {
          withCredentials: true,
        }
      );
      setLoaderState(false);
      setMessage(res.data.message);
      openDialog();
    }
  };

  const handlePriceUpdate = async (id) => {
    setLoaderState(true);
    try {
      const res = await axios.patch(
        "/user/update-price",
        { id, newPrice: updatedPrice },
        {
          withCredentials: true,
        }
      );
      if (res) {
        setEggData(res.data.data);
        setLoaderState(false);
        setEditprice(null);
        setMessage(res.data.message);
        openDialog();
      }
    } catch (err) {
      setLoaderState(false);
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setLoaderState(true);
    try {
      console.log(id);
      const res = await axios.put(
        "/user/delete-price",
        { id },
        {
          withCredentials: true,
        }
      );
      if (res) {
        setEggData(res.data.data);
        setLoaderState(false);
        setMessage(res.data.message);
        openDialog();
      }
    } catch (err) {
      setLoaderState(false);
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };

  const closeDialog = () => {
    setLoader(false);
  };

  const openDialog = () => {
    setLoader(true);
  };

  useEffect(() => {
    setLoaderState(true);
    const authCheck = async () => {
      const res = await axios.get("/auth/authcheck", {
        withCredentials: true,
      });
      if (res.data.authenticated) {
        navigate("/admin/dashboard");
      } else {
        navigate("/admin/login");
      }
    };

    const getEggdata = async () => {
      const res = await axios.get("/user/egg-data", {
        withCredentials: true,
      });
      if (res.data) setEggData(res.data);
    };
    try {
      authCheck();
      getEggdata();
      setLoaderState(false);
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);

  useEffect(() => {
    setUpdatedDate(date.setDate(date.getDate() + 1));
  }, [date]);

  return (
    <>
      <Navbar setLoader={setLoaderState} />
      <Loader loaderState={loaderState} />
      <div className="pt-28 px-20 h-screen">
        <div className="flex flex-col gap-3 mb-10">
          <div className="flex gap-2">
            <input
              type="radio"
              id="daily"
              name="type"
              value={"daily"}
              className=""
              onChange={handleChange}
            />
            <label htmlFor="daily" className="cursor-pointer font-semibold">
              Update single egg price
            </label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="white"
              name="type"
              value={"white"}
              onChange={handleChange}
            />
            <label htmlFor="white" className="cursor-pointer font-semibold">
              Update White Egg price
            </label>
            <div className="h-5 w-5 bg-white border-black border-2"></div>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              id="brown"
              name="type"
              value={"brown"}
              onChange={handleChange}
            />
            <label htmlFor="brown" className="cursor-pointer font-semibold">
              Update Brown Egg price
            </label>
            <div className="h-5 w-5 bg-amber-500 border-black border-2"></div>
          </div>
        </div>
        <Dialog
          dialogState={loader}
          closeDialogState={closeDialog}
          message={message}
        />
        <div className=" md:flex-col md:px-0 md:text-center flex items-start justify-between flex-row">
          {type === "daily" ? (
            <div className="w-1/2 md:w-full">
              <h1 className="font-bold text-2xl mb-5">
                Enter today's Egg price
              </h1>
              <form
                className="flex flex-col gap-5 md:items-center"
                name="dailyPrice"
                onSubmit={handleUpdate}
              >
                <input
                  type="number"
                  placeholder="Today's Egg price / piece"
                  className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                  onChange={(e) => setDailyEggPrice(e.target.value)}
                  step="0.01"
                  required
                />
                <button className="bg-green-300 px-10 py-2 hover:bg-green-400 transition-all rounded-lg w-40">
                  Update
                </button>
              </form>
            </div>
          ) : (
            <div className="w-1/2 md:w-full">
              <h1 className="font-bold text-2xl mb-5">
                Enter{" "}
                {type === "white" ? "White Eggs price" : "Brown Egg price"}
              </h1>
              <form
                className="flex flex-col gap-5 md:items-center"
                name="all-type"
                onSubmit={handleUpdate}
              >
                <input
                  type="text"
                  placeholder="Large Egg price / piece"
                  className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                  onChange={(e) => setLarge(e.target.value)}
                  step="0.01"
                  required
                />
                <input
                  type="text"
                  placeholder="Medium Egg price / piece"
                  className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                  onChange={(e) => setMedium(e.target.value)}
                  step="0.01"
                  required
                />
                <input
                  type="text"
                  placeholder="Medium small Egg price / piece"
                  className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                  onChange={(e) => setSmall(e.target.value)}
                  step="0.01"
                  required
                />
                <input
                  type="text"
                  placeholder="Bullet Egg price / piece"
                  className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                  onChange={(e) => setBullet(e.target.value)}
                  step="0.01"
                  required
                />
                <button className="bg-green-300 px-10 py-2 hover:bg-green-400 transition-all rounded-lg w-40">
                  Update
                </button>
                <button
                  type="reset"
                  className="bg-red-300 px-5 py-2 hover:bg-red-400 transition-all rounded-lg w-fit"
                >
                  Reset
                </button>
              </form>
            </div>
          )}
          <div className="w-1/2 flex flex-col gap-8 md:w-full">
            <div className="bg-green-100 px-14 py-5 rounded-lg md:px-8 sm:py-5 sm:w-full">
              <h3 className="font-bold text-2xl md:text-xl sm:text-lg text-center">
                Egg rate in Bengaluru today:{" "}
                <span className="text-red-400">₹</span>{" "}
                {eggData ? eggData[0]?.price : 0}
              </h3>
            </div>
            {eggData ? (
              <table className="bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden">
                <thead>
                  <tr>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      Date
                    </th>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      Piece
                    </th>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      Tray
                    </th>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      100 Pcs
                    </th>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      Peti
                    </th>
                    <th className="px-3 py-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {eggData.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          {item.date}
                        </td>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          {editprice === i ? (
                            <div className="relative w-fit overflow-hidden">
                              <input
                                className="text-sm outline-none bg-slate-200 h-11 w-42 pl-6 rounded-lg"
                                type="number"
                                required
                                placeholder={item.price}
                                onChange={(e) =>
                                  setUpdatedPrice(e.target.value)
                                }
                              />
                              <i
                                className="fi fi-rr-check bg-green-400 absolute top-0 h-full right-0 pt-[15px] text-sm px-3 cursor-pointer rounded-lg"
                                onClick={() => handlePriceUpdate(item._id)}
                              ></i>
                            </div>
                          ) : (
                            <p>
                              {" "}
                              <span className="text-red-400">₹</span>{" "}
                              {item.price?.toFixed(2)}
                            </p>
                          )}
                        </td>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          <span className="text-red-400">₹</span>{" "}
                          {(item.price * 30)?.toFixed(2)}
                        </td>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          <span className="text-red-400">₹</span>{" "}
                          {(item.price * 100)?.toFixed(2)}
                        </td>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          <span className="text-red-400">₹</span>{" "}
                          {(item.price * 210)?.toFixed(2)}
                        </td>
                        <td
                          className={`text-center ${
                            i % 2 === 0 ? "bg-slate-100" : "bg-white"
                          } py-3 md:px-0 md:py-4 sm:text-xs`}
                        >
                          <button
                            className="bg-green-200 hover:bg-green-300 transition-all px-6 py-1 rounded-lg"
                            onClick={() => {
                              if (!editprice && editprice !== 0)
                                setEditprice(i);
                              else setEditprice(null);
                            }}
                          >
                            <i className="fi fi-rr-file-edit pr-3"></i>
                            Edit
                          </button>
                          <button
                            className="ml-4 hover:bg-red-400 transition-all px-2 pt-1 rounded-md"
                            onClick={() => {
                              handleDelete(item._id);
                            }}
                          >
                            <i class="fi fi-rr-trash"></i>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
