import React from "react";

function blur1() {
  return (
    <div className="absolute px-4 h-screen w-full flex justify-center items-center">
      <div className="w-full h-full max-w-lg relative z-0 flex justify-center items-center opacity-20">
        <div className="absolute right-0 h-60 w-60 mix-blend-multiply bg-yellow-300 filter blur-3xl rounded-full"></div>
        <div className="absolute left-0 h-60 w-60 mix-blend-multiply bg-yellow-400 filter blur-3xl rounded-full"></div>
        <div className="absolute top-20 h-60 w-60 mix-blend-multiply bg-yellow-200 filter blur-3xl rounded-full"></div>
      </div>
    </div>
  );
}

export default blur1;
