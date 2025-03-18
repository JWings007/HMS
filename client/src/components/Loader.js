import React from "react";
import Lottie from "react-lottie";
import loader from "../assets/images/Loader.json";

function Loader({ loaderState }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (loaderState)
    return (
      <div className="w-full h-screen fixed top-0 z-[999] flex items-center justify-center bg-white">
        <div className="loader w-56">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    );
  else return null;
}

export default Loader;
