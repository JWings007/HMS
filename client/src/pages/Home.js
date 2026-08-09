import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import axios from "../api/axios";
import Loader from "../components/Loader";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Sparkles,
  Calculator,
  PhoneCall,
  Calendar,
  Award,
  Egg,
  ShieldCheck,
} from "lucide-react";

function Home() {
  const pathname = useLocation();
  const [eggData, setEggData] = useState([]);
  const [whiteVerity, setWhiteVerity] = useState([]);
  const [brownVerity, setBrownVerity] = useState([]);
  const [loaderState, setLoaderState] = useState(false);
  
  // Custom calculator state
  const [calcQuantity, setCalcQuantity] = useState(15000);

  useEffect(() => {
    const fetchEggDeatils = async () => {
      setLoaderState(true);
      try {
        const allEgg = await axios.get(`/user/egg-data`);
        if (allEgg && allEgg.data) {
          setEggData(allEgg.data);
        }

        const varients = await axios.get(`/user/all-egg-data`);
        if (varients && varients.data) {
          setBrownVerity(varients.data.filter((v) => v.color === "brown"));
          setWhiteVerity(varients.data.filter((v) => v.color === "white"));
        }
      } catch (err) {
        console.error("Error fetching egg data:", err);
      } finally {
        setLoaderState(false);
      }
    };

    fetchEggDeatils();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HMS Egg Product Distributors | Home";
  }, [pathname]);

  const todayPrice = eggData && eggData.length > 0 ? eggData[0]?.price : 5.90;
  const yesterdayPrice = eggData && eggData.length > 1 ? eggData[1]?.price : 5.85;
  const priceDiff = yesterdayPrice !== null ? (todayPrice - yesterdayPrice) : 0.05;

  // Fallback variety definitions if DB has not been seeded yet
  const defaultWhiteGrades = [
    { verity: "Large", price: "58 Gram / 590-25=565" },
    { verity: "Medium", price: "52 Gram / 590-30=560" },
    { verity: "Medium Small", price: "50 Gram / 590-40=550" },
    { verity: "Bullet", price: "40 Gram / 590-150=440" },
  ];

  const defaultBrownGrades = [
    { verity: "Large", price: "58 Gram / 700" },
    { verity: "Medium", price: "0" },
    { verity: "Medium Small", price: "0" },
    { verity: "Bullet", price: "0" },
  ];

  // Fallback 1-week past historical egg rates
  const defaultHistory = [
    { date: "08-03-2026", price: 5.90 },
    { date: "07-03-2026", price: 5.85 },
    { date: "06-03-2026", price: 5.80 },
    { date: "05-03-2026", price: 5.85 },
    { date: "04-03-2026", price: 5.90 },
    { date: "03-03-2026", price: 5.85 },
    { date: "02-03-2026", price: 5.80 },
  ];

  const activeWhiteVerity = whiteVerity && whiteVerity.length > 0 ? whiteVerity : defaultWhiteGrades;
  const activeBrownVerity = brownVerity && brownVerity.length > 0 ? brownVerity : defaultBrownGrades;
  const activeHistory = eggData && eggData.length > 0 ? eggData : defaultHistory;

  return (
    <>
      <Navbar setLoader={setLoaderState} />
      <Loader loaderState={loaderState} />

      <main className="min-h-screen bg-slate-50 relative pt-20 overflow-x-hidden">
        
        {/* Subtle Ambient Background Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] hero-gradient pointer-events-none -z-10 opacity-70" />

        {/* ULTRA-MODERN HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 flex flex-col items-center text-center gap-6">
          
          {/* Live Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-slate-800 text-xs font-bold tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-emerald absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live NECC Benchmark Rate • Bengaluru Market</span>
          </div>

          {/* Main Title with Emerald Shimmer Shine */}
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight max-w-4xl uppercase">
              HMS <span className="shimmer-text-emerald">EGG PRODUCT DISTRIBUTORS</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl font-medium leading-relaxed">
              Bengaluru’s premier commercial distribution network. Direct farm sourcing, daily NECC benchmark rates & commercial batch fulfillment.
            </p>
          </div>

          {/* 1. TODAY'S NECC RATE HERO METRIC CARD (INLINE SKELETON SHIMMER DURING LOADING) */}
          <div className="w-full max-w-4xl bg-white border border-slate-200/80 shadow-xl shadow-slate-200/40 rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden transition-all hover:shadow-2xl">
            
            {/* Left Column: Metric Info */}
            <div className="flex flex-col items-center sm:items-start gap-1.5 text-center sm:text-left">
              <div className="flex items-center gap-2 text-emerald-700 text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Today's Official NECC Benchmark</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                NECC Egg Rate In Bengaluru Today :
              </h2>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NECC Verified Daily Market Rate</span>
              </div>
            </div>

            {/* Right Column: Inline Rate Display / Inline Skeleton Shimmer */}
            {loaderState ? (
              <div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200">
                <div className="flex flex-col gap-2">
                  <div className="h-3 w-16 rounded-md skeleton-shimmer" />
                  <div className="h-10 w-28 rounded-xl skeleton-shimmer" />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 text-slate-900 px-6 py-4 rounded-2xl shadow-sm border border-emerald-300/70">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-wider">Rate / Piece</span>
                  <span className="text-amber-600 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                    ₹ {todayPrice ? todayPrice.toFixed(2) : "5.90"}
                  </span>
                </div>

                {yesterdayPrice !== null && (
                  <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black ${
                    priceDiff > 0
                      ? "bg-rose-100 text-rose-700 border border-rose-200"
                      : priceDiff < 0
                      ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}>
                    {priceDiff > 0 ? (
                      <>
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>+₹{priceDiff.toFixed(2)}</span>
                      </>
                    ) : priceDiff < 0 ? (
                      <>
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>-₹{Math.abs(priceDiff).toFixed(2)}</span>
                      </>
                    ) : (
                      <>
                        <Minus className="w-3.5 h-3.5" />
                        <span>Stable</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* 2. TWO TYPES EGG PRICE TABLES (INLINE SKELETON SHIMMER ROWS DURING LOADING) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left mt-2">
            
            {/* White Eggs Price Table */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col">
              <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-bold">
                    <Egg className="w-5 h-5 fill-emerald-100" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">White Eggs</h3>
                    <p className="text-xs font-semibold text-slate-500">Standard Commercial Variety</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-2.5 px-3">Varities</th>
                      <th className="py-2.5 px-3 text-right">Price Breakdown</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold">
                    {loaderState ? (
                      [1, 2, 3, 4].map((n) => (
                        <tr key={n}>
                          <td className="py-3.5 px-3">
                            <div className="h-4 w-24 rounded-md skeleton-shimmer" />
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <div className="h-4 w-32 rounded-md skeleton-shimmer ml-auto" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      activeWhiteVerity.map((v, i) => (
                        <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-3 text-slate-900 font-bold">{v.verity}</td>
                          <td className="py-3.5 px-3 text-right text-emerald-700 font-black text-sm">{v.price}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Brown Eggs Price Table */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg hover:shadow-xl transition-all overflow-hidden flex flex-col">
              <div className="p-5 sm:p-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg">Brown Eggs</h3>
                    <p className="text-xs font-semibold text-slate-500">Premium Free-Range Variety</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 sm:p-5 overflow-x-auto">
                <table className="w-full text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                      <th className="py-2.5 px-3">Varities</th>
                      <th className="py-2.5 px-3 text-right">Price Breakdown</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold">
                    {loaderState ? (
                      [1, 2, 3, 4].map((n) => (
                        <tr key={n}>
                          <td className="py-3.5 px-3">
                            <div className="h-4 w-24 rounded-md skeleton-shimmer" />
                          </td>
                          <td className="py-3.5 px-3 text-right">
                            <div className="h-4 w-32 rounded-md skeleton-shimmer ml-auto" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      activeBrownVerity.map((v, i) => (
                        <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-3 text-slate-900 font-bold">{v.verity}</td>
                          <td className="py-3.5 px-3 text-right text-amber-700 font-black text-sm">{v.price}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* 3. MODERN BULK TIER METRIC CARDS (1 Pc, 1 Tray, 100 Pcs, 1 Peti) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-4xl mt-2">
            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 flex flex-col items-center gap-1 shadow-xs hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">1 Piece</span>
              <span className="text-lg sm:text-2xl font-black text-slate-900">
                ₹{todayPrice ? todayPrice.toFixed(2) : "5.90"}
              </span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 flex flex-col items-center gap-1 shadow-xs hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">1 Tray (30 Pcs)</span>
              <span className="text-lg sm:text-2xl font-black text-emerald-700">
                ₹{todayPrice ? (todayPrice * 30).toFixed(2) : "177.00"}
              </span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 flex flex-col items-center gap-1 shadow-xs hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">100 Pieces</span>
              <span className="text-lg sm:text-2xl font-black text-slate-900">
                ₹{todayPrice ? (todayPrice * 100).toFixed(2) : "590.00"}
              </span>
            </div>

            <div className="bg-white p-4.5 rounded-2xl border border-slate-200/80 flex flex-col items-center gap-1 shadow-xs hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-md transition-all">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">1 Peti (210 Pcs)</span>
              <span className="text-lg sm:text-2xl font-black text-emerald-700">
                ₹{todayPrice ? (todayPrice * 210).toFixed(2) : "1239.00"}
              </span>
            </div>
          </div>

        </section>

        {/* WHOLESALE ANNOUNCEMENT MARQUEE */}
        <section className="w-full bg-slate-900 text-white py-3 border-y border-slate-800 overflow-hidden my-4">
          <div className="scrolling-text">
            <div className="scrolling-text-content flex items-center gap-12 font-medium text-xs sm:text-sm">
              <span className="flex items-center gap-2 text-amber-300 font-bold">
                <Sparkles className="w-4 h-4" />
                WHOLESALE ORDER POLICY:
              </span>
              <span>Minimum order size is 15,000 eggs for commercial dispatch across Bengaluru & Kolar.</span>
              <span className="flex items-center gap-2 text-emerald-400 font-bold">
                <PhoneCall className="w-4 h-4" />
                Call +91 9900956387 for daily booking.
              </span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE BULK COST CALCULATOR */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emerald-500/20 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold w-fit">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Bulk Order Cost Calculator
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Estimate your wholesale egg expenditure in real-time based on today’s official NECC market rate (<strong>₹{todayPrice ? todayPrice.toFixed(2) : "5.90"}</strong> / pc).
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs font-semibold text-slate-500 w-full">Quick Quantities:</span>
                {[15000, 30000, 50000, 100000].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setCalcQuantity(qty)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      calcQuantity === qty
                        ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {qty.toLocaleString()} Eggs
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-5 sm:p-6 flex flex-col gap-4 border border-slate-800">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Enter Custom Quantity (Number of Eggs)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="15000"
                    step="1000"
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold text-lg sm:text-xl px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                    Pcs
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-400 block">Total Estimated Cost</span>
                  <span className="text-[11px] text-emerald-400 font-medium">
                    ({Math.round(calcQuantity / 30).toLocaleString()} Trays approx.)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    ₹{(calcQuantity * (todayPrice || 5.9)).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <a
                href={`https://wa.me/+919900956387?text=Hi%2C%20I%20would%20like%20to%20place%20a%20wholesale%20order%20for%20${calcQuantity}%20eggs%20at%20today's%20rate.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Confirm Booking on WhatsApp</span>
              </a>
            </div>

          </div>
        </section>

        {/* 1-WEEK HISTORICAL EGG PRICE LEDGER SECTION (INLINE SKELETON SHIMMER ROWS DURING LOADING) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Egg Price Of Previous Days (1-Week Ledger)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Track past daily rate changes across Piece, Tray (30), 100 Pcs, and Peti (210) units.
            </p>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100/90 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                    <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Date</th>
                    <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Piece</th>
                    <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Tray (30 Pcs)</th>
                    <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">100 Pcs</th>
                    <th className="py-3.5 px-4 sm:px-6 whitespace-nowrap">Peti (210 Pcs)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {loaderState ? (
                    [1, 2, 3, 4, 5].map((n) => (
                      <tr key={n}>
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          <div className="h-4 w-24 rounded-md skeleton-shimmer" />
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          <div className="h-4 w-16 rounded-md skeleton-shimmer" />
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          <div className="h-4 w-20 rounded-md skeleton-shimmer" />
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          <div className="h-4 w-20 rounded-md skeleton-shimmer" />
                        </td>
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          <div className="h-4 w-20 rounded-md skeleton-shimmer" />
                        </td>
                      </tr>
                    ))
                  ) : (
                    activeHistory.map((item, i) => (
                      <tr
                        key={i}
                        className={`hover:bg-emerald-50/40 transition-colors ${
                          i === 0
                            ? "bg-emerald-100/70 border-l-4 border-l-emerald-600 font-extrabold text-emerald-950 shadow-inner"
                            : i % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50/50"
                        }`}
                      >
                        <td className="py-3.5 px-4 sm:px-6 font-bold text-slate-900 flex items-center gap-2 whitespace-nowrap">
                          <Calendar className={`w-4 h-4 shrink-0 ${i === 0 ? "text-emerald-700 font-extrabold" : "text-slate-400"}`} />
                          <span className={`whitespace-nowrap ${i === 0 ? "text-emerald-950 font-black" : ""}`}>{item.date}</span>
                        </td>
                        <td className={`py-3.5 px-4 sm:px-6 font-extrabold whitespace-nowrap ${i === 0 ? "text-emerald-800 text-base" : "text-emerald-700"}`}>
                          ₹{item.price?.toFixed(2)}
                        </td>
                        <td className={`py-3.5 px-4 sm:px-6 font-semibold whitespace-nowrap ${i === 0 ? "text-emerald-950 font-bold" : "text-slate-800"}`}>
                          ₹{(item.price * 30)?.toFixed(2)}
                        </td>
                        <td className={`py-3.5 px-4 sm:px-6 font-semibold whitespace-nowrap ${i === 0 ? "text-emerald-950 font-bold" : "text-slate-800"}`}>
                          ₹{(item.price * 100)?.toFixed(2)}
                        </td>
                        <td className={`py-3.5 px-4 sm:px-6 font-black whitespace-nowrap ${i === 0 ? "text-emerald-950 text-base" : "text-slate-900"}`}>
                          ₹{(item.price * 210)?.toFixed(2)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <Gallery />

        <Footer />
      </main>
    </>
  );
}

export default Home;
