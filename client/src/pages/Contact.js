import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Contact() {
  const pathname = useLocation();

  const handleRedirect = () => {
    window.open("https://wa.me/+919900956387", "_blank");
  };

  const openDialer = (num) => {
    const number = `tel:${num}`;
    window.location.href = number;
  };

  const mail = (emailid) => {
    const email = `mailto:${emailid}`;
    window.location.href = email;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="px-20 py-10 flex justify-between items-center w-full pt-28 md:px-10 vsm:px-5">
        <div className="flex flex-col gap-10">
          <p className="vsm:text-sm">Visit us by the below means</p>
          <h1 className="text-3xl font-bold">
            <span className="font-bold text-8xl md:text-6xl sm:text-5xl">
              Contact
            </span>{" "}
            us{" "}
          </h1>
          <p className="w-3/4 md:w-full vsm:text-sm">
            We're here help and answer any questions you have. We look forward
            to hearing from you!
          </p>
          <div className="flex gap-5">
            <i className="fi fi-rr-marker"></i>
            <a
              className="font-bold vsm:text-sm"
              href="https://maps.app.goo.gl/FEhMKHZrQjrmyzit9"
              target="_blank"
              rel="noreferrer"
            >
              3rd Main Rd, Vinayaka Extension, Nayanda Halli, Bengaluru,
              Karnataka - 560039
            </a>
          </div>
          <h1 className="font-bold">Main Branch ( Bengaluru )</h1>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3859193107523!2d77.5202278!3d12.9471394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fa22ac2c4ff%3A0xc0aede0efacbcb29!2sH.M.S%20EGG%20DISTRIBUTOR!5e0!3m2!1sen!2sin!4v1720014669293!5m2!1sen!2sin"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="vsm:w-[100%]"
              title="map"
            ></iframe>
          </div>
          <h1 className="font-bold">Branch 2 ( Kolar )</h1>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.377371542152!2d78.13028729999999!3d13.138579899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf1ccd778942f%3A0x896f7e19587059de!2sH.M.S%20NOOR%20EGG%20CENTRE!5e0!3m2!1sen!2sin!4v1720022202072!5m2!1sen!2sin"
              width="400"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="vsm:w-[100%]"
            ></iframe>
          </div>
          <div className="flex gap-5">
            <i className="fi fi-rr-phone-call"></i>
            <div className="flex flex-col gap-3">
              <p
                className="font-bold vsm:text-sm cursor-pointer"
                onClick={() => openDialer(9900956387)}
              >
                +91 9900956387 (Noor Ahmed)
              </p>
              <p
                className="font-bold vsm:text-sm cursor-pointer"
                onClick={() => openDialer(8892650006)}
              >
                +91 8892650006 (Tanveer Pasha)
              </p>
              <p
                className="font-bold vsm:text-sm cursor-pointer"
                onClick={() => openDialer(8867786887)}
              >
                +91 8867786887 (Sagheer Ahmed)
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <i className="fi fi-rr-envelope"></i>
            <p
              className="font-bold vsm:text-sm cursor-pointer"
              onClick={() => mail("HMSEGGDISTRIBUTORS87@GMAIL.COM")}
            >
              HMSEGGDISTRIBUTORS87@GMAIL.COM
            </p>
          </div>
          <div>
            <button
              className="flex gap-3 items-center bg-green-300 px-3 py-2 rounded-md hover:bg-green-400 transition-all"
              onClick={handleRedirect}
            >
              <i className="fi fi-brands-whatsapp pt-1"></i>
              <p>Contact Us</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
