import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import Dialog from "../components/Dialog";
import Loader from "../components/Loader";

function AdminRegister() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [adminKey, setAdminKey] = useState("");
  const [dialog, setDialog] = useState(false);
  const [message, setMessage] = useState("");
  const [loaderState, setLoaderState] = useState(false);

  const closeDialogState = () => {
    setDialog(false);
  };

  const openDialog = () => {
    setDialog(true);
  };

  const handleSubmit = async (e) => {
    setLoaderState(true);
    e.preventDefault();
    try {
      const res = await axios.post(`/auth/register`, {
        name,
        username,
        password,
        adminKey,
      });
      if (!res.data.exists) {
        setLoaderState(false);
        openDialog();
        setMessage(res.data.message);
        if (res.data.admin) {
          setTimeout(() => {
            setLoaderState(false);
            navigate("/admin/login");
          }, 20000);
        }
      } else if (res.data.exists) {
        setLoaderState(false);
        openDialog();
        setMessage(res.data.message);
      }
    } catch (err) {
      setLoaderState(false);
      console.log(err);
    }
  };
  return (
    <>
      <Navbar />
      <Dialog
        dialogState={dialog}
        message={message}
        closeDialogState={closeDialogState}
      />
      <Loader loaderState={loaderState} />
      <div className="pt-28 h-screen flex flex-col items-center justify-center  gap-14 md:pt-0">
        <div className="bg-slate-50 p-20 rounded-lg md:p-10">
          <h1 className="font-bold text-2xl mb-5 text-center">
            Create account
          </h1>
          <p className="mb-2 text-slate-400 text-center text-sm">
            Don't have an account create one
          </p>
          <div>
            <form
              method="POST"
              className="flex flex-col items-center justify-center gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Username"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                required
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Admin Key"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                required
                onChange={(e) => setAdminKey(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-sm">
                Already have an account?{" "}
                <span
                  className="text-green-500 cursor-pointer"
                  onClick={() => navigate("/admin/login")}
                >
                  Login
                </span>
              </p>
              <button className="bg-green-300 px-10 py-3 hover:bg-green-400 transition-all rounded-lg">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRegister;
