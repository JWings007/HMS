import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, FileText, RotateCcw, CheckCircle2, ArrowLeft } from "lucide-react";

function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("privacy");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6 md:px-4 flex flex-col gap-8">
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-700 w-fit transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Previous Page</span>
          </button>

          {/* Header */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal & Regulatory Compliance</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              HMS Egg Product Distributors <span className="gradient-text-emerald">Legal Policies</span>
            </h1>
            <p className="text-slate-600 text-xs max-w-lg font-medium">
              Terms of service, privacy data protections, and commercial crate return policies for bulk purchasers.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "privacy", label: "Privacy Policy", icon: ShieldCheck },
              { id: "terms", label: "Terms & Conditions", icon: FileText },
              { id: "returns", label: "Crate & Return Policy", icon: RotateCcw },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Card */}
          <div className="glass-card rounded-3xl p-8 md:p-6 border border-slate-200/80 shadow-xl">
            
            {activeSection === "privacy" && (
              <div className="flex flex-col gap-5 text-slate-700 text-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Privacy Policy</span>
                  </h2>
                  <span className="text-xs font-semibold text-slate-400">Effective Date: 10 March 2025</span>
                </div>

                <p className="leading-relaxed">
                  We value your privacy. This Privacy Policy outlines how <strong>HMS Egg Product Distributors</strong> collects, uses, and safeguards your commercial transaction and contact details.
                </p>

                <ul className="flex flex-col gap-3 pt-2">
                  {[
                    "We collect basic client details including business name, contact phone number, delivery address, and order transaction logs.",
                    "All collected information is strictly used to process commercial deliveries, manage recurring order cycles, and send daily market rate updates.",
                    "We never sell, trade, or rent client data to third parties. Data sharing is limited to essential logistics and payment processing partners.",
                    "You have full right to access, update, or request removal of your account data by contacting our management directly."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "terms" && (
              <div className="flex flex-col gap-5 text-slate-700 text-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <span>Commercial Terms & Conditions</span>
                  </h2>
                  <span className="text-xs font-semibold text-slate-400">Last Revised: 10 March 2025</span>
                </div>

                <p className="leading-relaxed">
                  By placing wholesale orders with HMS Egg Product Distributors, commercial clients agree to the following terms:
                </p>

                <ul className="flex flex-col gap-3 pt-2">
                  {[
                    "Regular wholesale orders are dispatched according to agreed 2-day delivery cycles across Bengaluru and Kolar regional hubs.",
                    "Payment is due within 2 days of invoice issuance. Late payments beyond agreed cycles incur a standard 5% administrative fee per cycle.",
                    "All plastic/wooden transport crates remain the property of HMS Distributors. Unreturned or damaged crates will be charged at ₹35 per unit.",
                    "Clients must ensure proper bio-secure handling and storage upon receipt. HMS is not liable for storage mishandling post-delivery.",
                    "Notice of claims regarding damaged eggs during transit must be reported within 24 hours of delivery with photographic documentation.",
                    "Service dispatches may be rescheduled in events of severe weather or force majeure disruptions."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeSection === "returns" && (
              <div className="flex flex-col gap-5 text-slate-700 text-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <RotateCcw className="w-5 h-5 text-emerald-600" />
                    <span>Commercial Return Policy</span>
                  </h2>
                  <span className="text-xs font-semibold text-slate-400">Effective Date: 10 March 2025</span>
                </div>

                <p className="leading-relaxed">
                  Our commercial return policy covers perishable food handling under the following rules:
                </p>

                <ul className="flex flex-col gap-3 pt-2">
                  {[
                    "Eggs are perishable products and non-returnable unless visible physical breakage or grade mismatch is verified upon delivery inspection.",
                    "Damage claims must be filed within 24 hours of receipt with photo verification sent to our WhatsApp helpline.",
                    "Verified damage claims will be credited toward your next delivery cycle or issued as immediate replacement stock.",
                    "Monetary refunds (when approved) are processed back to the client bank account within 3-5 business days."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
