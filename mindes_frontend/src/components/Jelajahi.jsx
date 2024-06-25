import React from "react";
import { BarChart2, FileText, Home, BookOpen } from "react-feather";

const Jelajahi = () => {
  return (
    <div className="relative flex flex-col items-center lg:gap-48 gap-20 lg:my-20 my-10  mx-5 lg:mx-70 ">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <svg className="w-1/2 h-full ">
          <line
            x1="35%"
            y1="15%"
            x2="65%"
            y2="15%"
            stroke="#3A0507"
            strokeWidth="3"
          />
          <line
            x1="17%"
            y1="25%"
            x2="17%"
            y2="75%"
            stroke="#3A0507"
            strokeWidth="3"
          />
          <line
            x1="83%"
            y1="15%"
            x2="83%"
            y2="75%"
            stroke="#3A0507"
            strokeWidth="3"
          />
          <line
            x1="35%"
            y1="85%"
            x2="65%"
            y2="85%"
            stroke="#3A0507"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="flex flex-row justify-center items-center w-full gap-5 md:gap-24 z-10">
        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[300px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <BarChart2 className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-3">
            Infografis
          </div>
        </div>

        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[300px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <FileText className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-3">
            Cek Info
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-center items-center w-full gap-5 md:gap-24  z-10">
        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[300px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <Home className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-3">
            Desa Kalinyamat Kulon
          </div>
        </div>

        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[300px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <BookOpen className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-3">
            Berita
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jelajahi;
