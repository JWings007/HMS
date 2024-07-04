import React, { useRef } from "react";

function Dialog({ dialogState, closeDialogState, message }) {
  const loaderRef = useRef();

  if (dialogState)
    return (
      <>
        <div
          className="h-fit w-80 bg-slate-100 absolute bottom-10 right-10 flex flex-col justify-between rounded-lg transition-all"
          ref={loaderRef}
        >
          <div className="flex flex-col items-start justify-between gap-4 px-5 py-4">
            <h1 className="text-sm">{message}</h1>
            <button
              className="px-6 py-2 bg-red-300 hover:bg-red-400 transition-all rounded-lg text-sm"
              onClick={closeDialogState}
            >
              Close
            </button>
          </div>
          <div className="w-0 h-1 bg-green-500 transition-all duration-[4s]"></div>
        </div>
      </>
    );
  else return null;
}

export default Dialog;
