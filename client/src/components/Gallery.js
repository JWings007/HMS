import React from "react";
import Slider from "react-slick";
import { MapPin, Truck, ShieldCheck, Award, CheckCircle2, Images } from "lucide-react";

function Gallery({ place }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  const images = [
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/bbznrc67xhubyfozlinp",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/jpb5rdgkipyn6bsanbsh",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/xnj2rnw84lygt7nrdjvk",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/ztwhjxlvobnjbvjdbzye",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/bd1wa4yhwhqqhvqiaj34",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/xc6onfzm9og2tzuavuhu",
    "https://res.cloudinary.com/dp35re9sa/image/upload/f_auto,q_auto/v1/HMS/dmi08zjct9pa8rv5kjlz"
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Strict Quality Control",
      desc: "Every batch is inspected for shell integrity, weight consistency, and peak freshness."
    },
    {
      icon: Truck,
      title: "Timely Bulk Delivery",
      desc: "Dedicated temperature-safe transport fleet reaching hotels, bakeries & vendors across Karnataka."
    },
    {
      icon: Award,
      title: "Ethical Local Sourcing",
      desc: "Partnered directly with trusted bio-secure poultry farms maintaining high welfare standards."
    }
  ];

  return (
    <section className="w-full py-16 px-6 md:px-4 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold tracking-wide uppercase">
          <Images className="w-3.5 h-3.5" />
          <span>Distribution Network Gallery</span>
        </div>
        <h2 className="text-3xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
          Supplying Freshness Across <span className="gradient-text-emerald">Bengaluru & Kolar</span>
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl">
          Take a look into our logistics operations, warehouse storage facilities, and daily distribution fleet.
        </p>
      </div>

      {/* Slider & Distribution Intro Split Card */}
      <div className="glass-card rounded-3xl p-8 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Slider Frame */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 shadow-lg relative bg-slate-900">
          <Slider {...settings}>
            {images.map((image, i) => (
              <div key={i} className="outline-none">
                <div className="h-72 sm:h-60 w-full relative overflow-hidden">
                  <img
                    src={image}
                    alt={`Distribution Slide ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white text-xs font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>HMS Supply Fleet in Action</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Intro Copy */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl sm:text-xl font-bold text-slate-900">
            We Distribute All Across Bengaluru & Regional Hubs
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            At <strong className="text-emerald-700 font-semibold">HMS EGG PRODUCT DISTRIBUTORS</strong>, we take pride in delivering top-grade commercial eggs directly to your business doorstep. With an unyielding commitment to excellence, every shipment meets stringent standards for freshness, weight grading, and nutritional value.
          </p>
          <div className="flex flex-col gap-2 pt-2">
            {[
              "Bulk orders handled with care (15,000+ egg capacity)",
              "Organic, free-range, and specialty white & brown varieties",
              "Direct farm-to-door distribution with minimal transit delay"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Feature Grid */}
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Why Commercial Buyers Trust <span className="text-emerald-600">HMS Distributors</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl flex flex-col gap-3 hover:-translate-y-1 transition-all duration-300 border border-emerald-500/10 hover:border-emerald-500/30 hover:shadow-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-base">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

export default Gallery;
