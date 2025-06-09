// import React from "react";
// import { useNavigate } from "react-router-dom";

// function Footer() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="flex flex-col items-center py-20 gap-4 bg-green-300">
//         <h1 className="font-bold text-2xl">HMS EGG DISTRIBUTOR</h1>
//         <div>
//           <ul className="flex gap-10">
//             <li
//               className="cursor-pointer hover:text-slate-600"
//               onClick={() => navigate("/")}
//             >
//               HOME
//             </li>
//             <li
//               className="cursor-pointer hover:text-slate-600"
//               onClick={() => navigate("/about")}
//             >
//               ABOUT
//             </li>
//             <li
//               className="cursor-pointer hover:text-slate-600"
//               onClick={() => navigate("/contact")}
//             >
//               CONTACT
//             </li>
//           </ul>
//         </div>
//         <div className="flex gap-5">
//           <i className="fi fi-brands-instagram text-2xl hover:text-slate-500 cursor-pointer"></i>
//           <i className="fi fi-brands-facebook text-2xl hover:text-slate-500 cursor-pointer"></i>
//           <i className="fi fi-brands-twitter-alt-circle text-2xl hover:text-slate-500 cursor-pointer"></i>
//         </div>
//         <p className="mt-8 text-slate-600">
//           Copyright &copy;2024 All rights reserved. <span className="cursor-pointer hover:border-b-2 border-black transition-all duration-[50ms]" onClick={()=>navigate("/privacy-policy")}>Privacy Policy</span>
//         </p>
//       </div>
//     </>
//   );
// }

// export default Footer;



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

        {/* 🚀 Play Store Button Section */}
        <div className="mt-10 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-3 text-green-800">Download Our App</h2>
          <a
            href="https://play.google.com/store/apps/details?id=com.hmsegg.eggport"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="w-40 hover:scale-105 transition-transform duration-200"
            />
          </a>
        </div>

        <p className="mt-8 text-slate-600 text-center">
          Copyright &copy;2024 All rights reserved.{" "}
          <span
            className="cursor-pointer hover:border-b-2 border-black transition-all duration-[50ms]"
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
        </p>
      </div>
    </>
  );
}

export default Footer;
