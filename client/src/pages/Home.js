import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../components/Loader";

function Home() {
  const pathname = useLocation();
  const [eggData, setEggData] = useState([]);
  const [whiteVerity, setWhiteVerity] = useState([]);
  const [brownVerity, setBrownVerity] = useState([]);
  const [loaderState, setLoaderState] = useState(false);

  useEffect(() => {
    const fetchEggDeatils = async () => {
      setLoaderState(true);
      const allEgg = await axios.get(`/user/egg-data`);
      if (allEgg) {
        setEggData(allEgg.data);
      }

      const varients = await axios.get(`/user/all-egg-data`);
      if (varients) {
        setBrownVerity(
          varients.data.filter((v) => {
            return v.color === "brown";
          })
        );
        setWhiteVerity(
          varients.data.filter((v) => {
            return v.color === "white";
          })
        );
        setLoaderState(false);
      }
    };

    fetchEggDeatils();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hms Egg Distributors | Home";
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Loader loaderState={loaderState} />
      <div className="px-20 pb-14 relative h-fit pt-44 md:px-10 vsm:px-2">
        <img
          src={
            "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="absolute top-0 left-0 min-w-full -z-10 object-cover opacity-40 h-full object-top"
        />
        <div className="flex flex-col items-center z-10">
          <h1 className="text-center text-green-400 font-bold text-7xl sm:text-6xl vsm:text-[2.8rem]">
            HMS EGG DISTRIBUTORS
          </h1>
          {eggData ? (
            <div className="bg-green-200 px-32 py-8 mt-10 rounded-lg md:px-8 sm:py-5 sm:w-full xs:hidden">
              <h3 className="font-bold text-4xl md:text-2xl sm:text-xl text-center leading-[50px]">
                NECC Egg Rate In Bengaluru Today :{" "}
                <span className="text-amber-500">₹ {eggData[0]?.price?.toFixed(2)}</span>
              </h3>
            </div>
          ) : null}

          {eggData ? (
            <div className="bg-green-200 px-32 py-8 mt-10 rounded-lg md:px-2 sm:py-5 sm:w-full xs:block hidden">
              <h3 className="font-bold text-4xl md:text-2xl sm:text-xl text-center">
                NECC Egg Rate In Bengaluru Today :
              </h3>
              <h3 className="font-bold text-4xl md:text-2xl sm:text-xl text-center text-amber-500">
                ₹ {eggData[0]?.price?.toFixed(2)}
              </h3>
            </div>
          ) : null}

          <div className="flex gap-5 md:flex-col">
            {whiteVerity ? (
              <table className="bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden text-left mt-5">
                <thead className="bg-green-200">
                  <tr>
                    <th
                      colSpan={2}
                      className="text-center px-7 py-3 bg-green-300 text-lg"
                    >
                      White Eggs
                    </th>
                  </tr>
                  <tr>
                    <th className="px-7 py-3">Varities</th>
                    <th className="px-7 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {whiteVerity.map((v, i) => {
                    return (
                      <tr key={i}>
                        <th className="px-7 py-2 sm:text-sm text-sm">
                          {v.verity}
                        </th>
                        <td className="px-7 py-2 sm:text-sm">{v.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
            {brownVerity ? (
              <table className="bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden text-left mt-5">
                <thead className="bg-green-200">
                  <tr>
                    <th
                      colSpan={2}
                      className="text-center px-7 py-3 bg-green-300 text-lg"
                    >
                      Brown Eggs
                    </th>
                  </tr>
                  <tr>
                    <th className="px-7 py-3">Varities</th>
                    <th className="px-7 py-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {brownVerity.map((v, i) => {
                    return (
                      <tr key={i}>
                        <th className="px-7 py-2 sm:text-sm text-sm">
                          {v.verity}
                        </th>
                        <td className="px-7 py-2 sm:text-sm">{v.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </div>
        </div>
      </div>
      <div className="scrolling-text h-12 flex items-center bg-green-200">
        <div className="scrolling-text-content">
          <h1 className="text-xl">
            Please contact us only if you are interested in making a purchase of
            at least 15,000 eggs.
          </h1>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-10 items-center justify-center">
        <h1 className="font-bold text-2xl text-center md:text-lg">
          Egg price of previous days
        </h1>
        {eggData ? (
          <table className="w-1/2 bg-slate-100 rounded-lg border-solid border-slate-100 border-2 overflow-hidden">
            <thead>
              <tr>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs vsm:px-5">
                  Date
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs vsm:px-5">
                  Piece
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs vsm:px-5">
                  Tray
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs vsm:px-5">
                  100 Pcs
                </th>
                <th className="p-4 bg-green-200 lg:px-8 sm:px-6 sm:py-4 md:text-xs vsm:px-5">
                  Peti
                </th>
              </tr>
            </thead>
            <tbody>
              { eggData && eggData?.map((item, i) => {
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
                      {item.price?.toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 30)?.toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 100)?.toFixed(2)}
                    </td>
                    <td
                      className={`text-center ${
                        i % 2 === 0 ? "bg-slate-100" : "bg-white"
                      } py-5 md:px-0 md:py-4 sm:text-xs`}
                    >
                      <span className="text-red-300">₹</span>{" "}
                      {(item.price * 210)?.toFixed(2)}
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
          <div className="flex justify-center mt-10">
  <a
    href="https://play.google.com/store/apps/details?id=com.hmsegg.eggport"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
      className="h-16 md:h-12 transition-transform duration-200 hover:scale-105"
    />
  </a>
</div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
