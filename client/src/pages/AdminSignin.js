import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog";
import axios from "../api/axios";

function AdminSignin() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dialog, setDialog] = useState(false);
  const [message, setMessage] = useState("");

  const closeDialogState = () => {
    setDialog(false);
  };

  const openDialog = () => {
    setDialog(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `/auth/login`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (!res.data.username) {
        openDialog();
        setMessage(res.data.message);
      } else if (res.data.username && res.data.password) {
        localStorage.setItem("username", res.data.user.username);
        localStorage.setItem("name", res.data.user.name);
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 3000);
      } else if (!res.data.password) {
        openDialog();
        setMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`/auth/authcheck`, {
        withCredentials: true,
      });
      if (res.data.authenticated) navigate("/admin/dashboard");
      else {
        openDialog();
        setMessage(res.data.message);
      }
    };
    try {
      authCheck();
    } catch (error) {
      console.log(error);
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <Dialog
        dialogState={dialog}
        message={message}
        closeDialogState={closeDialogState}
      />
      <div className="pt-28 h-screen flex flex-col items-center justify-center  gap-14 md:pt-0">
        <div className="bg-slate-50 p-20 rounded-lg md:p-10">
          <h1 className="font-bold text-2xl mb-8">Login</h1>
          <div>
            <form
              method="POST"
              className="flex flex-col items-center justify-center gap-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Enter Username"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="text-sm outline-none bg-slate-200 h-11 w-80 pl-6 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="bg-green-300 px-10 py-3 hover:bg-green-400 transition-all rounded-lg">
                Login
              </button>
              <p className="text-sm">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/admin/register")}
                  className="cursor-pointer text-green-500"
                >
                  Register
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSignin;
