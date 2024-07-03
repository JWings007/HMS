import React from "react";
import Slider from "react-slick";

function Gallery({ place }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const images = [
    "https://i.ibb.co/BfHrFBv/image1.jpg",
    "https://i.ibb.co/XDWh3cq/image2.jpg",
    "https://i.ibb.co/cQqHhZh/image3.jpg",
    "https://i.ibb.co/HKP5PFC/image4.jpg",
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 py-10 mt-10">
      <h1 className="font-bold text-5xl text-center md:text-3xl">Gallery</h1>
      <div className="flex items-center justify-center gap-10 w-full max-w-6xl lg:flex-col">
        <div className="w-1/2 lg:w-full lg:px-5">
          <Slider {...settings}>
            {images.map((image, i) => (
              <div key={i} className="flex justify-center">
                <img
                  src={image}
                  alt={`Slide ${i}`}
                  className="w-full h-full max-h-64 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-1/2 p-5 md:w-full md:text-center md:px-10 lg:w-3/4">
          <h1 className="font-bold text-3xl mb-4">
            We Distribute all across Bengaluru
          </h1>
          <p>
            At{" "}
            <span className="text-green-500 font-bold">
              HMS EGG DISTRIBUTERS
            </span>
            , we take pride in delivering the finest quality eggs to your
            doorstep. With a commitment to excellence, we ensure that each egg
            meets rigorous standards for freshness, taste, and nutritional
            value. Our range includes a variety of options such as organic,
            free-range, and specialty eggs, sourced from trusted local farms
            known for their dedication to animal welfare and sustainable
            practices.
          </p>
        </div>
      </div>
      <div className="px-40 lg:px-10 lg:text-center">
        <h1 className="font-bold text-3xl mb-4">Why Choose Us?</h1>
        <p>
          Choosing{" "}
          <span className="text-green-500 font-bold">
            HMS EGG DISTRIBUTERS
          </span>{" "}
          means choosing reliability and quality. We offer flexible delivery
          options to ensure your eggs arrive fresh and on time. Whether you're a
          health-conscious consumer seeking nutritious options or someone
          looking for eggs that meet specific dietary preferences, we have
          something for everyone. Join us in supporting local farmers and enjoy
          the difference that fresh, high-quality eggs can make in your daily
          meals. Experience the convenience and satisfaction of shopping with{" "}
          <span className="text-green-500 font-bold">
            HMS EGG DISTRIBUTERS
          </span>
          , where every egg is a testament to our commitment to your
          satisfaction and well-being.
        </p>
      </div>
    </div>
  );
}

export default Gallery;
