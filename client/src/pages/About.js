import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";

function About() {
  const pathname = useLocation();
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="pb-20 flex flex-col px-20 pt-28 md:px-10 vsm:px-5">
        <div className="flex h-56 lg:flex-col lg:gap-10 lg:h-fit lg:text-center">
          <div className="w-1/3  flex flex-col items-center justify-center lg:w-full">
            <h2 className="text-3xl font-bold">
              <span className="text-8xl pr-3 md:text-6xl">About</span> us
            </h2>
          </div>
          <div className="w-2/3  flex flex-col justify-center lg:w-full">
            <p className="text-black vsm:text-sm">
              Welcome to{" "}
              <span className="font-bold text-green-500">
                HMS EGG DISTRIBUTERS
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
        <div className="flex items-center lg:flex-col lg:mt-10">
          <div className="w-1/2 lg:w-full lg:px-5">
            <Slider {...settings}>
              {brownEggImages.map((image, i) => (
                <div key={i} className="flex justify-center">
                  <img
                    src={image}
                    alt={`Slide ${i}`}
                    className="w-full h-3/4 object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className=" text-center p-8 md:mt-10 md:px-2 lg:pb-10 lg:w-full">
            <p className="mt-4 text-normal vsm:text-sm">
              <span className="font-bold text-black">
                Our mission is simple:
              </span>{" "}
              to offer a diverse selection of eggs that cater to every
              preference and dietary need. Whether you prefer organic,
              free-range, or specialty eggs, we ensure that each egg meets
              stringent quality standards before it reaches your doorstep.
              Backed by years of experience in the egg distribution industry, we
              strive to exceed your expectations with every delivery.
            </p>
            <div className="text-center px-20 py-8 md:px-5 vsm:px-0">
              <p className="text-normal vsm:text-sm">
                Join us in celebrating the joy of good food and responsible
                sourcing. Experience the difference that fresh, locally sourced
                eggs can make in your meals. Thank you for choosing{" "}
                <span className="font-bold text-green-500">
                  HMS EGG DISTRIBUTERS
                </span>{" "}
                — where quality, freshness, and customer satisfaction are our
                top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
