import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog";
import axios from "../api/axios";
import Loader from "../components/Loader";
import { Lock, User, LogIn, ShieldCheck } from "lucide-react";

function AdminSignin() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
      const res = await axios.post(
        `/auth/login`,
        { username, password },
        { withCredentials: true }
      );

      if (!res.data.username) {
        setLoaderState(false);
        openDialog();
        setMessage(res.data.message);
      } else if (res.data.username && res.data.password) {
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("name", res.data.user.name);
        setLoaderState(false);
        navigate("/admin/dashboard");
      } else if (!res.data.password) {
        setLoaderState(false);
        openDialog();
        setMessage(res.data.message);
      }
    } catch (err) {
      setLoaderState(false);
      console.error(err);
    }
  };

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`/auth/authcheck`, { withCredentials: true });
        if (res.data.authenticated) navigate("/admin/dashboard");
      } catch (error) {
        console.error(error);
      }
    };
    authCheck();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Dialog
        dialogState={dialog}
        message={message}
        closeDialogState={closeDialogState}
      />
      <Loader loaderState={loaderState} />
      
      <main className="min-h-screen bg-slate-50 pt-28 pb-16 flex items-center justify-center px-6">
        <div className="w-full max-w-md glass-card rounded-3xl p-8 border border-emerald-500/20 shadow-2xl flex flex-col gap-6">
          
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-1 shadow-inner">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Portal Sign In</h1>
            <p className="text-xs text-slate-500 font-medium">
              Enter your credentials to access the rate management dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700">Username</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Enter admin username"
                  className="w-full bg-slate-100 border border-slate-300 font-semibold px-4 py-3 pl-10 rounded-xl focus:outline-none focus:border-emerald-500 text-xs"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-700">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full bg-slate-100 border border-slate-300 font-semibold px-4 py-3 pl-10 rounded-xl focus:outline-none focus:border-emerald-500 text-xs"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 mt-2">
              <LogIn className="w-4 h-4" />
              <span>Sign In to Dashboard</span>
            </button>
          </form>

          <div className="text-center pt-4 border-t border-slate-200 text-xs text-slate-500">
            Need admin access?{" "}
            <span
              onClick={() => navigate("/admin/register")}
              className="font-bold text-emerald-600 hover:underline cursor-pointer"
            >
              Register New Admin
            </span>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminSignin;
