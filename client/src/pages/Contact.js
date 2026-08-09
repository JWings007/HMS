import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Building2,
  ExternalLink,
  MessageCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

function Contact() {
  const pathname = useLocation();
  const [activeBranch, setActiveBranch] = useState("bengaluru");

  const handleRedirect = (branch) => {
    const text = encodeURIComponent(
      `Hi, I would like to make an inquiry regarding bulk egg wholesale from your ${
        branch === "kolar" ? "Kolar Branch" : "Bengaluru Main Hub"
      }.`
    );
    window.open(`https://wa.me/+919900956387?text=${text}`, "_blank");
  };

  const openDialer = (num) => {
    window.location.href = `tel:${num}`;
  };

  const mail = (emailid) => {
    window.location.href = `mailto:${emailid}`;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "HMS Egg Product Distributors | Contact & Hubs";
  }, [pathname]);

  const managers = [
    { name: "Noor Ahmed", role: "General Manager", phone: "+91 9900956387", raw: "9900956387" },
    { name: "Tanveer Pasha", role: "Sales Manager", phone: "+91 8892650006", raw: "8892650006" },
    { name: "Sagheer Ahmed", role: "Logistics Manager", phone: "+91 8867786887", raw: "8867786887" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-24 pb-16 overflow-x-hidden">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-emerald-900 text-xs font-extrabold tracking-wide uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Regional Distribution Hubs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Contact & <span className="gradient-text-emerald">Branch Locations</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Connect directly with our regional hub managers for daily NECC wholesale bookings, dispatch schedules, and commercial farm supply.
          </p>
        </section>

        {/* Branch Selector Tabs (Fully Responsive Pill Switcher) */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <div className="w-full max-w-md grid grid-cols-2 p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 shadow-inner">
            <button
              onClick={() => setActiveBranch("bengaluru")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all ${
                activeBranch === "bengaluru"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">Bengaluru Hub</span>
            </button>
            <button
              onClick={() => setActiveBranch("kolar")}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all ${
                activeBranch === "kolar"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <MapPin className="w-4 h-4 shrink-0" />
              <span className="truncate">Kolar Branch</span>
            </button>
          </div>
        </section>

        {/* Active Branch Display Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {activeBranch === "bengaluru" ? (
            <div className="glass-card rounded-3xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-emerald-300/60 shadow-xl bg-white/90">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 flex flex-col gap-5 w-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-2 border border-emerald-300/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Primary Regional Hub & Warehouse</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Bengaluru Main Hub
                  </h2>
                </div>

                <div className="flex flex-col gap-3.5 text-slate-700 text-xs sm:text-sm">
                  
                  {/* Address Tile */}
                  <a
                    href="https://maps.app.goo.gl/FEhMKHZrQjrmyzit9"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all group w-full"
                  >
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Warehouse Address:</strong>
                      <span className="text-slate-600 text-xs leading-relaxed group-hover:text-emerald-950 block mt-0.5">
                        No #117, 4th Cross, Ajij Sait Industrial Area, Nayandahalli, Bengaluru - 560039.
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0 ml-1 self-center" />
                  </a>

                  {/* Direct Managers List */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-emerald-600" />
                        <span>Logistics Managers & Contacts:</span>
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                        Tap to Call
                      </span>
                    </div>

                    <div className="flex flex-col gap-2">
                      {managers.map((m, idx) => (
                        <button
                          key={idx}
                          onClick={() => openDialer(m.raw)}
                          className="p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition-all font-semibold text-slate-800 text-left flex items-center justify-between gap-2 text-xs w-full shadow-xs"
                        >
                          <div className="flex flex-col min-w-0">
                            <span className="font-bold text-slate-900 truncate">{m.name}</span>
                            <span className="text-[10px] text-slate-500 font-normal">{m.role}</span>
                          </div>
                          <span className="text-emerald-700 font-black text-xs shrink-0 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                            {m.phone}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Email Tile */}
                  <button
                    onClick={() => mail("HMSEGGDISTRIBUTORS87@GMAIL.COM")}
                    className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all text-left w-full"
                  >
                    <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Official Email:</strong>
                      <span className="text-slate-600 text-xs font-bold break-all block mt-0.5">
                        HMSEGGDISTRIBUTORS87@GMAIL.COM
                      </span>
                    </div>
                  </button>

                  {/* Operating Hours */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-600 text-xs">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dispatch Operations: Mon - Sun (5:00 AM - 9:00 PM)</span>
                  </div>

                </div>

                <div className="pt-1">
                  <button
                    onClick={() => handleRedirect("bengaluru")}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Bengaluru Sales Manager</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Embedded Map */}
              <div className="lg:col-span-6 w-full h-72 sm:h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3859193107523!2d77.5202278!3d12.9471394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa22ac2c4ff%3A0xc0aede0efacbcb29!2sH.M.S%20EGG%20DISTRIBUTOR!5e0!3m2!1sen!2sin!4v1720014669293!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bengaluru Main Hub Map"
                  className="w-full h-full border-0"
                ></iframe>
              </div>

            </div>
          ) : (
            <div className="glass-card rounded-3xl p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-amber-300/60 shadow-xl bg-white/90">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 flex flex-col gap-5 w-full">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold mb-2 border border-amber-300/60">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                    <span>Regional Distribution Branch</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Kolar Branch
                  </h2>
                </div>

                <div className="flex flex-col gap-3.5 text-slate-700 text-xs sm:text-sm">
                  
                  {/* Address Tile */}
                  <a
                    href="https://maps.app.goo.gl/L6rkxojpfZrNZoby7"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-amber-50/50 hover:border-amber-300 transition-all group w-full"
                  >
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Branch Address:</strong>
                      <span className="text-slate-600 text-xs leading-relaxed group-hover:text-amber-950 block mt-0.5">
                        M B Road, Near SBI ATM, Doddapet, Kolar, Karnataka - 563101.
                      </span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-1 self-center" />
                  </a>

                  {/* Branch Manager */}
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                        <Phone className="w-4 h-4 text-amber-600" />
                        <span>Kolar Branch Manager:</span>
                      </span>
                      <span className="text-[10px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                        Tap to Call
                      </span>
                    </div>

                    <button
                      onClick={() => openDialer("9900956387")}
                      className="p-3 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/30 transition-all font-semibold text-slate-800 text-left flex items-center justify-between gap-2 text-xs w-full shadow-xs"
                    >
                      <div className="flex flex-col min-w-0">
                        <span className="font-bold text-slate-900 truncate">Noor Ahmed</span>
                        <span className="text-[10px] text-slate-500 font-normal">Branch In-Charge</span>
                      </div>
                      <span className="text-amber-800 font-black text-xs shrink-0 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        +91 9900956387
                      </span>
                    </button>
                  </div>

                  {/* Email Tile */}
                  <button
                    onClick={() => mail("HMSEGGDISTRIBUTORS87@GMAIL.COM")}
                    className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-all text-left w-full"
                  >
                    <div className="p-2 rounded-xl bg-amber-100 text-amber-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <strong className="block text-slate-900 font-bold text-xs sm:text-sm">Official Email:</strong>
                      <span className="text-slate-600 text-xs font-bold break-all block mt-0.5">
                        HMSEGGDISTRIBUTORS87@GMAIL.COM
                      </span>
                    </div>
                  </button>

                  {/* Operating Hours */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-600 text-xs">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Branch Operating Hours: Mon - Sat (6:00 AM - 8:00 PM)</span>
                  </div>

                </div>

                <div className="pt-1">
                  <button
                    onClick={() => handleRedirect("kolar")}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/25 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Kolar Sales Manager</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Embedded Map */}
              <div className="lg:col-span-6 w-full h-72 sm:h-80 lg:h-[440px] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7770.754739918576!2d78.130287!3d13.13858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf1ccd778942f%3A0x896f7e19587059de!2sH.M.S%20NOOR%20EGG%20CENTRE!5e0!3m2!1sen!2sin!4v1720099987489!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kolar Branch Map"
                  className="w-full h-full border-0"
                ></iframe>
              </div>

            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}

export default Contact;
