import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  Sparkles,
  Target,
  CheckCircle2,
  PhoneCall,
  Egg,
} from "lucide-react";

function About() {
  const pathname = useLocation();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
  };

  const brownEggImages = [
    "https://i.ibb.co/hc8kjmw/Whats-App-Image-2024-07-03-at-16-48-35-576b303e.jpg",
    "https://i.ibb.co/ZhGkpbg/Whats-App-Image-2024-07-03-at-16-48-22-489657a5.jpg",
    "https://i.ibb.co/JjcrF0f/Whats-App-Image-2024-07-03-at-16-48-29-c0724d04.jpg",
    "https://i.ibb.co/n68YHVV/Whats-App-Image-2024-07-03-at-16-48-23-0acd4ce3.jpg",
    "https://i.ibb.co/Dr6NXDc/Whats-App-Image-2024-07-03-at-16-48-26-86dc8775.jpg",
    "https://i.ibb.co/Jm99RP0/Whats-App-Image-2024-07-03-at-16-48-25-ddd74efd.jpg",
    "https://i.ibb.co/f8fhfvt/Whats-App-Image-2024-07-03-at-16-48-30-809c192b.jpg",
    "https://i.ibb.co/cXsNz0V/Whats-App-Image-2024-07-03-at-16-48-22-1a360953.jpg",
    "https://i.ibb.co/k0BNpCF/Whats-App-Image-2024-07-03-at-16-48-33-8ded5849.jpg",
    "https://i.ibb.co/Z6D8PRz/Whats-App-Image-2024-07-03-at-16-48-31-90969f2b.jpg",
    "https://i.ibb.co/rFnQx8P/Whats-App-Image-2024-07-03-at-16-48-33-d2ed5e78.jpg",
    "https://i.ibb.co/SRhcVPs/Whats-App-Image-2024-07-03-at-16-48-09-d5f7f2ae.jpg",
    "https://i.ibb.co/T0SxrWV/Whats-App-Image-2024-07-03-at-16-48-10-0534ee0b.jpg",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Hms Egg Product Distributors | About Us";
  }, [pathname]);

  const stats = [
    { label: "Daily Distribution Volume", value: "100,000+", suffix: "Eggs" },
    { label: "Commercial Clients Served", value: "500+", suffix: "Businesses" },
    { label: "Regional Hubs", value: "2", suffix: "Bengaluru & Kolar" },
    { label: "Quality Assurance", value: "100%", suffix: "NECC Certified" },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-28 pb-16">
        
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-4 py-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Journey & Commitment</span>
          </div>
          <h1 className="text-4xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            About <span className="gradient-text-emerald">HMS Egg Product Distributors</span>
          </h1>
          <p className="text-slate-600 text-base max-w-2xl font-medium">
            Bridging regional poultry farms directly with commercial kitchens, bakeries, and retail vendors across Karnataka.
          </p>
        </section>

        {/* Stats Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-1 border border-emerald-500/10"
              >
                <span className="text-3xl sm:text-2xl font-black text-emerald-600">{item.value}</span>
                <span className="text-xs font-bold text-slate-800">{item.label}</span>
                <span className="text-[11px] text-slate-400 font-medium">{item.suffix}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Core Story & Mission Split Section */}
        <section className="max-w-7xl mx-auto px-6 md:px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Our Mission & Story
              </h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Welcome to <strong className="text-emerald-700 font-semibold">HMS EGG PRODUCT DISTRIBUTORS</strong>, your trusted source for premium-quality commercial eggs. Founded with a passion for delivering absolute freshness and reliability to every kitchen, we are dedicated to setting benchmark standards in the regional poultry supply chain.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              We prioritize strict bio-secure sourcing from ethical local farms known for sustainable agriculture and healthy flock maintenance. Our mission is simple: to provide a consistent, high-volume supply of White, Brown, and Specialty Eggs tailored to commercial caterers, hotels, and retail vendors.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              {[
                "Strict adherence to daily NECC market benchmark pricing",
                "Temperature-monitored logistics for extended shell shelf-life",
                "Dedicated customer support for seamless recurring order cycles"
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide shadow-md shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Our Distribution Team</span>
              </button>
            </div>
          </div>

          {/* Slider Gallery Showcase */}
          <div className="lg:col-span-6">
            <div className="glass-card p-4 rounded-3xl border border-emerald-500/20 shadow-xl overflow-hidden">
              <div className="rounded-2xl overflow-hidden shadow-md bg-slate-900">
                <Slider {...settings}>
                  {brownEggImages.map((image, i) => (
                    <div key={i} className="outline-none">
                      <div className="h-80 sm:h-64 w-full relative">
                        <img
                          src={image}
                          alt={`Farm Product ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute bottom-3 left-4 text-white text-xs font-semibold flex items-center gap-1.5">
                          <Egg className="w-4 h-4 text-amber-300 fill-amber-300/40" />
                          <span>Premium Bio-Secure Sourced Eggs</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

        </section>

      </main>
      <Footer />
    </>
  );
}

export default About;
