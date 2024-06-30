import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";

function Home() {
  const pathname = useLocation();
  const [eggData, setEggData] = useState([]);
  const [verity, setVerity] = useState([]);

  useEffect(() => {
    const fetchEggDeatils = async () => {
      const allEgg = await axios.get(`/user/egg-data`);
      if (allEgg) setEggData(allEgg.data);

      const varients = await axios.get(`/user/all-egg-data`);
      if (varients) setVerity(varients.data);
    };

    fetchEggDeatils();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="px-20 pb-14 relative h-fit pt-44 md:px-10">
        <img
          src={
            "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="absolute top-0 left-0 min-w-full -z-10 object-cover opacity-40 h-full object-top"
        />
        <div className="flex flex-col items-center z-10">
          <h1 className="text-center text-green-400 font-bold text-7xl md:text-5xl sm:text-4xl">
            HMS EGG DISTRIBUTION
          </h1>
          {eggData ? (
            <div className="bg-green-100 px-32 py-8 mt-10 rounded-lg md:px-8 sm:py-5 sm:w-full">
              <h3 className="font-bold text-4xl md:text-2xl sm:text-xl text-center">
                Egg rate in Bengaluru today: ₹ {eggData[0]?.price}
              </h3>
            </div>
          ) : null}

          {verity ? (
            <table className="bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden text-left mt-5">
              <thead className="bg-green-300">
                <tr>
                  <th className="px-7 py-3">Varities</th>
                  <th className="px-7 py-3">Price</th>
                </tr>
              </thead>
              <tbody>
                {verity.map((v, i) => {
                  return (
                    <tr key={i}>
                      <th className="px-7 py-2 sm:text-sm">{v.verity}</th>
                      <td className="px-7 py-2 sm:text-sm">
                        <span className="text-red-500">₹</span>
                        {v.price.toFixed(2)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-bold text-2xl text-center md:text-lg">
          Egg price of previous five days
        </h1>
        {eggData ? (
          <table className="w-1/2 bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden">
            <thead>
              <tr>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                  Date
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                  Piece
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                  Tray
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                  100 Pcs
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs">
                  Peti
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
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      {item.date}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {item.price.toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 30).toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 100).toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 150).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : null}
      </div>
      <div className="w-full">
        <Gallery />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;