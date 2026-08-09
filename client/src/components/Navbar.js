import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Egg,
  Menu,
  X,
  LayoutDashboard,
  LogOut,
  PhoneCall,
  Home as HomeIcon,
  Info as InfoIcon,
  Contact as ContactIcon,
} from "lucide-react";

function Navbar({ setLoader }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [username, setUserName] = useState("");

  const handleLogout = async () => {
    if (setLoader) setLoader(true);
    try {
      const res = await axios.post(
        "/auth/logout",
        { username: localStorage.getItem("username") },
        { withCredentials: true }
      );

      if (res.data.success) {
        if (setLoader) setLoader(false);
        localStorage.removeItem("username");
        localStorage.removeItem("name");
        navigate("/admin/login");
      } else {
        if (setLoader) setLoader(false);
        alert("Please try again...!");
      }
    } catch (err) {
      if (setLoader) setLoader(false);
      alert("Please try again...!");
    }
  };

  useEffect(() => {
    setUserName(localStorage.getItem("name"));
    if (toggle) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [navigate, toggle]);

  const navLinks = [
    { name: "HOME", path: "/", icon: HomeIcon },
    { name: "ABOUT US", path: "/about", icon: InfoIcon },
    { name: "CONTACT US", path: "/contact", icon: ContactIcon },
  ];

  return (
    <header className="w-full h-20 fixed top-0 left-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 md:px-4 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
            <Egg className="w-6 h-6 fill-amber-300/30 text-amber-200" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg sm:text-base tracking-tight text-slate-900 leading-tight">
              HMS <span className="text-emerald-600">EGG PRODUCT</span>
            </h1>
            <p className="text-[11px] font-semibold text-emerald-700 tracking-wider uppercase">
              Distributors
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:hidden lg:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-emerald-700 bg-emerald-50 shadow-sm border border-emerald-200/60"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/+919900956387"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs tracking-wide shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Order Wholesale</span>
          </a>

          {location.pathname === "/admin/dashboard" ? (
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <span className="text-sm font-semibold text-slate-700">
                {username || "Admin"}
              </span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 text-xs font-semibold border border-rose-200/60 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/admin/dashboard")}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all duration-200"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Portal</span>
            </button>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setToggle(!toggle)}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {toggle ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Navigation Drawer */}
      <div
        className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out flex lg:hidden flex-col justify-between p-6 z-40 border-t border-slate-200/80 ${
          toggle ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4 hidden"
        }`}
      >
        <div className="flex flex-col gap-3 mt-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setToggle(false);
                }}
                className={`flex items-center gap-4 w-full p-4 rounded-2xl text-left font-bold text-base transition-all duration-200 ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                    : "bg-slate-50 text-slate-800 hover:bg-slate-100"
                }`}
              >
                <div
                  className={`p-2 rounded-xl ${
                    isActive ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span>{link.name}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Footer CTAs */}
        <div className="flex flex-col gap-3 pb-6 border-t border-slate-100 pt-6">
          <a
            href="https://wa.me/+919900956387"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setToggle(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Order Wholesale (Min 15k Eggs)</span>
          </a>

          {location.pathname === "/admin/dashboard" ? (
            <button
              onClick={() => {
                handleLogout();
                setToggle(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-rose-50 text-rose-600 font-bold text-sm border border-rose-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/admin/dashboard");
                setToggle(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 text-white font-bold text-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Admin Dashboard</span>
            </button>
          )}

          <p className="text-center text-xs text-slate-400 mt-2 font-medium">
            Copyright &copy; 2024. HMS Egg Product Distributors.
          </p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
