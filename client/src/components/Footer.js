import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Egg,
  Phone,
  MapPin,
  ShieldCheck,
  Smartphone,
  ChevronRight,
  Sparkles,
} from "lucide-react";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800/80">
        
        {/* Col 1: Brand Info */}
        <div className="flex flex-col gap-4">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer group w-fit"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <Egg className="w-5 h-5 text-amber-200 fill-amber-200/30" />
            </div>
            <div>
              <h2 className="font-extrabold text-base tracking-tight text-white leading-tight">
                HMS <span className="text-emerald-400">EGG PRODUCT</span>
              </h2>
              <p className="text-[10px] font-semibold text-emerald-500 tracking-widest uppercase">
                Distributors
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Bengaluru’s leading commercial egg distribution network supplying premium-grade white, brown, and specialty eggs to businesses, caterers, and vendors across Karnataka.
          </p>

          <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium pt-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NECC Certified Market Rates</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-sm tracking-wide border-l-2 border-emerald-500 pl-3">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs">
            {[
              { name: "Home Dashboard", path: "/" },
              { name: "About HMS Distributors", path: "/about" },
              { name: "Contact & Branch Locations", path: "/contact" },
              { name: "Privacy Policy & Terms", path: "/privacy-policy" },
              { name: "Admin Portal Login", path: "/admin/login" },
            ].map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-200 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-emerald-500" />
                  <span>{link.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Contact Summary */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-bold text-sm tracking-wide border-l-2 border-emerald-500 pl-3">
            Branch Hubs
          </h3>
          <div className="flex flex-col gap-3 text-xs text-slate-400">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Main Hub (Bengaluru)</strong>
                <span>Nayandahalli Industrial Area, Bengaluru - 560039</span>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-200 block">Branch 2 (Kolar)</strong>
                <span>Doddapet, Kolar, Karnataka - 563101</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-emerald-400 font-medium">
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+91 9900956387 / +91 8892650006</span>
            </div>
          </div>
        </div>

        {/* Col 4: Mobile App */}
        <div className="flex flex-col gap-4 bg-slate-900/80 p-5 rounded-2xl border border-slate-800/90">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Smartphone className="w-4 h-4 text-emerald-400" />
            <span>Download Mobile App</span>
          </div>
          <p className="text-xs text-slate-400">
            Get daily egg rate alerts and manage your commercial orders directly from your phone.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.hmsegg.eggport"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block group"
          >
            <div className="flex items-center justify-center gap-3 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all duration-200 group-hover:-translate-y-0.5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-7 object-contain"
              />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-4 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          Copyright &copy; 2024 <span className="text-slate-300 font-medium">HMS Egg Product Distributors</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Privacy Policy & Legal Terms</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
