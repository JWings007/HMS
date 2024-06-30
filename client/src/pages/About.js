import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function About() {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="pb-20 flex flex-col px-20 pt-28 md:px-10">
        <div className="flex h-56 lg:flex-col lg:gap-10 lg:h-fit lg:text-center">
          <div className="w-1/3  flex flex-col items-center justify-center lg:w-full">
            <h2 className="text-3xl font-bold">
              <span className="text-8xl pr-3 md:text-6xl">About</span> us
            </h2>
          </div>
          <div className="w-2/3  flex flex-col justify-center lg:w-full">
            <p className="text-black">
              Welcome to{" "}
              <span className="font-bold text-green-500">
                HMS EGG DISTRIBUTIONS
              </span>
              , your trusted source for premium-quality eggs. Founded with a
              passion for delivering freshness and flavor to every table, we are
              dedicated to providing our customers with the best eggs available.
              Here , we prioritize quality, sourcing our eggs from local farms
              known for their ethical practices and dedication to sustainable
              agriculture.
            </p>
          </div>
        </div>
        <div className=" text-center p-8 md:mt-10 md:px-2 lg:pb-10 lg:w-full">
          <p className="mt-4 text-normal">
            <span className="font-bold text-black">Our mission is simple:</span>{" "}
            to offer a diverse selection of eggs that cater to every preference
            and dietary need. Whether you prefer organic, free-range, or
            specialty eggs, we ensure that each egg meets stringent quality
            standards before it reaches your doorstep. Backed by years of
            experience in the egg distribution industry, we strive to exceed
            your expectations with every delivery.
          </p>
        </div>

        <div className="text-center px-20 py-8 md:px-5  ">
          <p className="text-normal">
            Join us in celebrating the joy of good food and responsible
            sourcing. Experience the difference that fresh, locally sourced eggs
            can make in your meals. Thank you for choosing{" "}
            <span className="font-bold text-green-500">
              HMS EGG DISTRIBUTIONS
            </span>{" "}
            — where quality, freshness, and customer satisfaction are our top
            priorities.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
