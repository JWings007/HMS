import React from "react";

function Loader({ loaderState }) {
  if (loaderState)
    return (
      <div className="w-full h-screen fixed top-0 z-[999] flex items-center justify-center bg-white">
        <div className="loader"></div>
      </div>
    );
  else return null;
}

export default Loader;
