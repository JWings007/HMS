import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Contact() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="px-20 py-10 flex justify-between items-center w-full pt-28 md:px-10">
        <div className="flex flex-col gap-10">
          <p>Visit us by the below means</p>
          <h1 className="text-3xl font-bold">
            <span className="font-bold text-8xl md:text-6xl sm:text-5xl">
              Contact
            </span>{" "}
            us{" "}
          </h1>
          <p className="w-3/4 md:w-full">
            We're here help and answer any questions you have. We look forward
            to hearing from you!
          </p>
          <div className="flex gap-5">
            <i className="fi fi-rr-marker"></i>
            <a
              className="font-bold"
              href="https://maps.app.goo.gl/FEhMKHZrQjrmyzit9"
              target="_blank"
              rel="noreferrer"
            >
              3rd Main Rd, Vinayaka Extension, Nayanda Halli, Bengaluru,
              Karnataka - 560039
            </a>
          </div>
          <div className="flex gap-5">
            <i className="fi fi-rr-phone-call"></i>
            <p className="font-bold">+91 990 0956 387</p>
          </div>
          <div className="flex gap-5">
            <i className="fi fi-rr-envelope"></i>
            <p className="font-bold">HMSEGGDISTRIBUTORS87@GMAIL.COM</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
