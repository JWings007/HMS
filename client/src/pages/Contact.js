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
    document.title = 'Hms Egg Distributors | Contact'
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="px-20 py-10 flex justify-between items-center w-full pt-28 md:px-10 vsm:px-4 md:pt-32">
        <div className="flex flex-col gap-7 w-full">
          <p className="">Visit us by the below means</p>
          <h1 className="text-3xl font-bold">
            <span className="font-bold text-8xl md:text-6xl sm:text-5xl">
              Contact
            </span>{" "}
            us{" "}
          </h1>
          <p className="w-3/4 md:w-full vsm:text-sm">
            We're here to help and answer any questions you have. We look
            forward to hearing from you!
          </p>
          <div className="flex items-start justify-between w-full lg:flex-col lg:gap-14">
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl md:text-xl">
                Main Branch{" "}
                <span className="bg-green-100 px-3 rounded-md">Bengaluru</span>
              </h1>
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
              <div className="flex gap-5">
                <i className="fi fi-rr-marker text-xl"></i>
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
              <div className="flex gap-5">
                <i className="fi fi-rr-phone-call text-xl"></i>
                <div className="flex flex-col gap-3">
                  <p
                    className="vsm:text-sm cursor-pointer font-semibold"
                    onClick={() => openDialer(9900956387)}
                  >
                    +91 9900956387 (Noor Ahmed)
                  </p>
                  <p
                    className="vsm:text-sm cursor-pointer font-semibold"
                    onClick={() => openDialer(8892650006)}
                  >
                    +91 8892650006 (Tanveer Pasha)
                  </p>
                  <p
                    className="font-semibold vsm:text-sm cursor-pointer"
                    onClick={() => openDialer(8867786887)}
                  >
                    +91 8867786887 (Sagheer Ahmed)
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <i className="fi fi-rr-envelope text-xl"></i>
                <p
                  className="font-bold vsm:text-sm cursor-pointer sm:text-xs sm:w-3/4"
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
                  <i className="fi fi-brands-whatsapp pt-1 text-xl"></i>
                  <p>Contact Us</p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-3xl md:text-xl">
                Branch 2{" "}
                <span className="bg-green-100 px-3 rounded-md">Kolar</span>
              </h1>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7770.754739918576!2d78.130287!3d13.13858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf1ccd778942f%3A0x896f7e19587059de!2sH.M.S%20NOOR%20EGG%20CENTRE!5e0!3m2!1sen!2sin!4v1720099987489!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="vsm:w-[100%]"
                  title="map"
                ></iframe>
              </div>
              <div className="flex gap-5">
                <i className="fi fi-rr-marker text-xl"></i>
                <a
                  className="font-bold vsm:text-sm"
                  href="https://maps.app.goo.gl/L6rkxojpfZrNZoby7"
                  target="_blank"
                  rel="noreferrer"
                >
                  M B Road, Near SBI ATM, Doddapet, Kolar, Karnataka - 563101
                </a>
              </div>
              <div className="flex gap-5">
                <i className="fi fi-rr-phone-call text-xl"></i>
                <div className="flex flex-col gap-3">
                  <p
                    className="vsm:text-sm cursor-pointer font-semibold"
                    onClick={() => openDialer(9900956387)}
                  >
                    +91 9900956387 (Noor Ahmed)
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <i className="fi fi-rr-envelope text-xl"></i>
                <p
                  className="font-bold vsm:text-sm cursor-pointer sm:text-xs sm:w-3/4"
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
                  <i className="fi fi-brands-whatsapp pt-1 text-xl"></i>
                  <p>Contact Us</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
