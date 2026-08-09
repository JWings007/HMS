import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Dialog from "../components/Dialog";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import {
  LayoutDashboard,
  TrendingUp,
  PlusCircle,
  Edit3,
  Trash2,
  Check,
  Layers,
  Calendar,
} from "lucide-react";

function AdminDashboard() {
  const [dailyEggPrice, setDailyEggPrice] = useState(0);
  const [type, setType] = useState("daily");
  const [eggData, setEggData] = useState([]);
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

  const handleUpdate = async (e) => {
    setLoaderState(true);
    e.preventDefault();
    try {
      if (type === "daily") {
        const currentDate = new Date();
        const res = await axios.post(
          `/user/update-daily`,
          {
            date: `${currentDate.getDate()}-${
              currentDate.getMonth() + 1
            }-${currentDate.getFullYear()}`,
            price: dailyEggPrice,
          },
          { withCredentials: true }
        );
        if (res.data) {
          setEggData(res.data.data);
          setMessage(res.data.message);
          openDialog();
        }
      } else {
        const res = await axios.post(
          `/user/update-all/${type}`,
          { large, medium, small, bullet },
          { withCredentials: true }
        );
        if (res.data) {
          setMessage(res.data.message);
          openDialog();
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderState(false);
    }
  };

  const handlePriceUpdate = async (id) => {
    setLoaderState(true);
    try {
      const res = await axios.patch(
        "/user/update-price",
        { id, newPrice: updatedPrice },
        { withCredentials: true }
      );
      if (res) {
        setEggData(res.data.data);
        setEditprice(null);
        setMessage(res.data.message);
        openDialog();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderState(false);
    }
  };

  const handleDelete = async (id) => {
    setLoaderState(true);
    try {
      const res = await axios.put(
        "/user/delete-price",
        { id },
        { withCredentials: true }
      );
      if (res) {
        setEggData(res.data.data);
        setMessage(res.data.message);
        openDialog();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoaderState(false);
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
      try {
        const res = await axios.get("/auth/authcheck", { withCredentials: true });
        if (!res.data.authenticated) {
          navigate("/admin/login");
        }
      } catch (err) {
        navigate("/admin/login");
      }
    };

    const getEggdata = async () => {
      try {
        const res = await axios.get("/user/egg-data", { withCredentials: true });
        if (res.data && res.data.length > 0) {
          setEggData(res.data);
        } else {
          setEggData([
            { _id: "demo1", date: "08-03-2026", price: 5.90 },
            { _id: "demo2", date: "07-03-2026", price: 5.85 },
            { _id: "demo3", date: "06-03-2026", price: 5.80 },
          ]);
        }
      } catch (err) {
        console.error(err);
      }
    };

    authCheck();
    getEggdata();
    setLoaderState(false);
  }, [navigate]);

  return (
    <>
      <Navbar setLoader={setLoaderState} />
      <Loader loaderState={loaderState} />
      <Dialog
        dialogState={loader}
        closeDialogState={closeDialog}
        message={message}
      />

      <main className="min-h-screen bg-slate-50 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-4 flex flex-col gap-8">
          
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold w-fit">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Admin Management Portal</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Daily Rates & <span className="gradient-text-emerald">Catalog Controls</span>
            </h1>
          </div>

          {/* Today's Metric Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-card p-6 rounded-2xl border border-emerald-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Today's Active Rate
                </span>
                <span className="text-3xl font-black text-emerald-600">
                  ₹{eggData && eggData.length > 0 ? eggData[0]?.price?.toFixed(2) : "0.00"}
                </span>
                <span className="text-xs text-slate-400 block font-medium">Per Piece / Bengaluru</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  1 Tray (30 Pcs) Rate
                </span>
                <span className="text-3xl font-black text-slate-900">
                  ₹{eggData && eggData.length > 0 ? (eggData[0]?.price * 30)?.toFixed(2) : "0.00"}
                </span>
                <span className="text-xs text-slate-400 block font-medium">Standard Tray Pack</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Total Ledger History
                </span>
                <span className="text-3xl font-black text-slate-900">
                  {eggData ? eggData.length : 0}
                </span>
                <span className="text-xs text-slate-400 block font-medium">Entries Recorded</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                <Calendar className="w-6 h-6" />
              </div>
            </div>

          </div>

          {/* Form & Table Split Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Update Controls Panel */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-6 border border-slate-200/80 flex flex-col gap-6 shadow-xl">
              
              <div>
                <h2 className="text-xl font-bold text-slate-900">Update Rates</h2>
                <p className="text-xs text-slate-500 font-medium">Select update category below</p>
              </div>

              {/* Category Radio Selectors */}
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  { id: "daily", label: "Update Single Egg Rate (Today's Benchmark)", badge: "Daily NECC" },
                  { id: "white", label: "Update White Egg Varieties (L, M, S, Bullet)", badge: "White Grades" },
                  { id: "brown", label: "Update Brown Egg Varieties (L, M, S, Bullet)", badge: "Brown Grades" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all ${
                      type === opt.id
                        ? "bg-emerald-50 border-emerald-500 shadow-sm"
                        : "bg-slate-50/80 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id={opt.id}
                        name="type"
                        value={opt.id}
                        checked={type === opt.id}
                        onChange={handleChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-xs font-bold text-slate-800">{opt.label}</span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                      {opt.badge}
                    </span>
                  </label>
                ))}
              </div>

              {/* Form Input Section */}
              {type === "daily" ? (
                <form onSubmit={handleUpdate} className="flex flex-col gap-4 pt-2 border-t border-slate-200">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-slate-700">Today's Single Egg Rate (₹ / piece)</label>
                    <input
                      type="number"
                      step="0.01"
                      placeholder="e.g. 5.50"
                      onChange={(e) => setDailyEggPrice(e.target.value)}
                      className="w-full bg-slate-100 border border-slate-300 font-bold text-slate-900 px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 text-sm"
                      required
                    />
                  </div>
                  <button className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2">
                    <PlusCircle className="w-4 h-4" />
                    <span>Publish Today's Rate</span>
                  </button>
                </form>
              ) : (
                <form onSubmit={handleUpdate} className="flex flex-col gap-3 pt-2 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {type === "white" ? "White Egg" : "Brown Egg"} Price Grades (₹ / pc)
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">Large Size</label>
                      <input
                        type="text"
                        placeholder="Price"
                        className="bg-slate-100 border border-slate-300 font-semibold px-3 py-2 rounded-lg text-xs"
                        onChange={(e) => setLarge(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">Medium Size</label>
                      <input
                        type="text"
                        placeholder="Price"
                        className="bg-slate-100 border border-slate-300 font-semibold px-3 py-2 rounded-lg text-xs"
                        onChange={(e) => setMedium(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">Medium Small</label>
                      <input
                        type="text"
                        placeholder="Price"
                        className="bg-slate-100 border border-slate-300 font-semibold px-3 py-2 rounded-lg text-xs"
                        onChange={(e) => setSmall(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] font-semibold text-slate-600">Bullet Size</label>
                      <input
                        type="text"
                        placeholder="Price"
                        className="bg-slate-100 border border-slate-300 font-semibold px-3 py-2 rounded-lg text-xs"
                        onChange={(e) => setBullet(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-1.5">
                      <PlusCircle className="w-4 h-4" />
                      <span>Update Grades</span>
                    </button>
                    <button
                      type="reset"
                      className="px-4 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-xs transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Rate History Table Panel */}
            <div className="lg:col-span-7 glass-card rounded-3xl p-6 border border-slate-200/80 shadow-xl flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Historical Rate Ledger</h2>
                  <p className="text-xs text-slate-500">Edit or delete past rate entries</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {eggData ? eggData.length : 0} Records
                </span>
              </div>

              {eggData && eggData.length > 0 ? (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Piece</th>
                        <th className="py-3 px-4">Tray (30)</th>
                        <th className="py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs font-medium">
                      {eggData.map((item, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">
                            {item.date}
                          </td>
                          <td className="py-3 px-4 text-emerald-700 font-extrabold">
                            {editprice === i ? (
                              <div className="flex items-center gap-1">
                                <input
                                  type="number"
                                  step="0.01"
                                  defaultValue={item.price}
                                  onChange={(e) => setUpdatedPrice(e.target.value)}
                                  className="w-20 bg-white border border-emerald-400 font-bold px-2 py-1 rounded text-xs focus:outline-none"
                                />
                                <button
                                  onClick={() => handlePriceUpdate(item._id)}
                                  className="p-1 rounded bg-emerald-600 text-white hover:bg-emerald-700"
                                >
                                  <Check className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <span>₹{item.price?.toFixed(2)}</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-slate-800">
                            ₹{(item.price * 30)?.toFixed(2)}
                          </td>
                          <td className="py-3 px-4 flex items-center gap-2">
                            <button
                              onClick={() => {
                                if (editprice === i) setEditprice(null);
                                else setEditprice(i);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold flex items-center gap-1 transition-colors"
                            >
                              <Edit3 className="w-3 h-3" />
                              <span>Edit</span>
                            </button>
                            <button
                              onClick={() => handleDelete(item._id)}
                              className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                              title="Delete entry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 text-xs text-slate-500">
                  No rate history entries found. Use the panel on the left to publish today's rate.
                </div>
              )}

            </div>

          </div>

        </div>
      </main>
    </>
  );
}

export default AdminDashboard;
