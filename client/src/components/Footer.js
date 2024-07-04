import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center py-20 gap-4 bg-green-300">
        <h1 className="font-bold text-2xl">HMS EGG DISTRIBUTOR</h1>
        <div>
          <ul className="flex gap-10">
            <li
              className="cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/")}
            >
              HOME
            </li>
            <li
              className="cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/about")}
            >
              ABOUT
            </li>
            <li
              className="cursor-pointer hover:text-slate-600"
              onClick={() => navigate("/contact")}
            >
              CONTACT
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <i className="fi fi-brands-instagram text-2xl hover:text-slate-500 cursor-pointer"></i>
          <i className="fi fi-brands-facebook text-2xl hover:text-slate-500 cursor-pointer"></i>
          <i className="fi fi-brands-twitter-alt-circle text-2xl hover:text-slate-500 cursor-pointer"></i>
        </div>
        <p className="mt-8 text-slate-600">
          Copyright &copy;2024 All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
