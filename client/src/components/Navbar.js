import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [username, setUserName] = useState("");

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "/auth/logout",
        { username: localStorage.getItem("username") },
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        navigate("/admin/login");
      } else {
        alert("Please try again...!");
      }
    } catch (err) {
      alert("Please try again...!");
    }
  };

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
  }, []);

  return (
    <div className="w-full h-24 flex items-center justify-between px-20 md:px-10 fixed bg-white z-50">
      <div className="justify-between w-full hidden lg:flex lg:relative">
        <h1 className="font-bold text-2xl">HMS EGG DIST.</h1>
        <i
          className="fi fi-rr-bars-sort cursor-pointer"
          onClick={() => setToggle(!toggle)}
        ></i>
      </div>
      <div
        className={`-z-10 md:flex fixed top-24 right-0 w-full bg-white duration-[.6s] items-center justify-evenly h-screen z-100 flex-col transition-transform ${
          !toggle ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <ul className="text-center flex flex-col gap-12">
          <li
            className="text-3xl font-light cursor-pointer"
            onClick={() => {
              navigate("/");
              setToggle(false);
            }}
          >
            HOME
          </li>
          <li
            className="text-3xl font-light cursor-pointer"
            onClick={() => {
              navigate("/about");
              setToggle(false);
            }}
          >
            ABOUT
          </li>
          <li
            className="text-3xl font-light cursor-pointer"
            onClick={() => {
              navigate("/contact");
              setToggle(false);
            }}
          >
            CONTACT
          </li>
        </ul>
        <p>Copyright &copy; 2024. HMS Egg Distributions</p>
      </div>
      <h1 className="font-bold text-2xl lg:hidden">HMS EGG DIST.</h1>
      <ul className="flex items-center justify-center gap-20 font-extralight lg:hidden">
        <li
          className={`text-3xl tracking-wider ${
            location.pathname === "/" ? "font-medium text-green-400" : null
          } hover:text-green-400 cursor-pointer`}
          onClick={() => navigate("/")}
        >
          HOME
        </li>
        <li
          className={`text-3xl tracking-wider ${
            location.pathname === "/about" ? "font-medium text-green-400" : null
          } hover:text-green-400 cursor-pointer`}
          onClick={() => navigate("/about")}
        >
          ABOUT US
        </li>
        <li
          className={`text-3xl tracking-wider ${
            location.pathname === "/contact"
              ? "font-medium text-green-400"
              : null
          } hover:text-green-400 cursor-pointer`}
          onClick={() => navigate("/contact")}
        >
          CONTACT US
        </li>
      </ul>

      {location.pathname === "/admin/dashboard" ? (
        <div className="flex gap-3 items-center">
          <h1 className="font-bold text-xl">{username}</h1>
          <button
            className="bg-red-300 px-5 py-2 rounded-lg text-sm"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          className="bg-green-400 p-2 rounded-md font-light text-sm hover:bg-green-500 lg:hidden"
          onClick={() => navigate("/admin/dashboard")}
        >
          Dashboard
        </button>
      )}
    </div>
  );
}

export default Navbar;
