import React from "react";

const Jelajahi = () => {
  return (
    <>
      <div className="flex justify-evenly items-center mt-20">
        <div className="relative bg-blue-600 w-60 h-40 flex flex-col items-center justify-center rounded-[20px] shadow-lg ">
          <div className="absolute -top-10 bg-blue-800 w-24 h-24 flex items-center justify-center rounded-[20px]">
            <p className="text-heading-1">📊</p>
          </div>
          <div className="mt-10 text-white font-semibold text-center text-xl">
            Infografis
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="relative bg-blue-600 w-60 h-40 flex flex-col items-center justify-center rounded-[20px] shadow-lg">
            <div className="absolute -top-10 bg-blue-800 w-24 h-24 flex items-center justify-center rounded-[20px]">
              <p className="text-heading-1">📑</p>
            </div>
            <div className="mt-10 text-white font-semibold text-center text-xl">
              Cek info
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center min-h-screen ">
        <div className="relative bg-blue-600 w-60 h-40 flex flex-col items-center justify-center rounded-[20px] shadow-lg ">
          <div className="absolute -top-10 bg-blue-800 w-24 h-24 flex items-center justify-center rounded-[20px]">
            <p className="text-heading-1">🚀</p>
          </div>
          <div className="mt-10 text-white font-semibold text-center text-xl">
            Desa
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="relative bg-blue-600 w-60 h-40 flex flex-col items-center justify-center rounded-[20px] shadow-lg">
            <div className="absolute -top-10 bg-blue-800 w-24 h-24 flex items-center justify-center rounded-[20px]">
              <p className="text-heading-1">📰</p>
            </div>
            <div className="mt-10 text-white font-semibold text-center text-xl">
              Berita
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jelajahi;
