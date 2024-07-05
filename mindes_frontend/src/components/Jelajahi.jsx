import React from "react";
import { BarChart2, FileText, Home, BookOpen } from "react-feather";

const Jelajahi = () => {
  return (
    <>  
     <div className="relative md:flex flex-col hidden items-center lg:gap-48 gap-20 lg:my-20 my-10 mx-5 lg:mx-70 ">
      <div className="absolute inset-0 flex  justify-center items-center pointer-events-none z-0 ">
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
            x1="21%"
            y1="25%"
            x2="21%"
            y2="75%"
            stroke="#3A0507"
            strokeWidth="3"
          />
          <line
            x1="79%"
            y1="15%"
            x2="79%"
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
        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <BarChart2 className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
            Infografis
          </div>
        </div>

        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <FileText className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
            Cek Info
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-center items-center w-full gap-5 md:gap-24  z-10">
        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <Home className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
            Desa Kalinyamat Kulon
          </div>
        </div>

        <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
          <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
            <BookOpen className="text-white" size={48} />
          </div>
          <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
            Berita
          </div>
        </div>
      </div>
    </div>

    <div className="relative flex flex-col md:hidden items-center lg:gap-48 gap-16  my-10  mx-5">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
        <svg className="w-1/2 h-full ">
          <line
            x1="35%"
            y1="17%"
            x2="65%"
            y2="17%"
            stroke="#3A0507"
            strokeWidth="2"
          />
          <line
            x1="9%"
            y1="25%"
            x2="9%"
            y2="75%"
            stroke="#3A0507"
            strokeWidth="2"
          />
          <line
            x1="91%"
            y1="15%"
            x2="91%"
            y2="75%"
            stroke="#3A0507"
            strokeWidth="2"
          />
          <line
            x1="35%"
            y1="85%"
            x2="65%"
            y2="85%"
            stroke="#3A0507"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="flex flex-row justify-center items-center w-full gap-10 md:gap-24 z-10">
        <div className="relative bg-secondary-40 w-28 h-20 flex flex-col items-center justify-center rounded-[10px] shadow-lg">
          <div className="absolute lg:-top-10 -top-5 bg-primary-40 w-10 h-10 lg:w-24 lg:h-24 flex items-center justify-center rounded-[10px]">
            <BarChart2 className="text-white" size={24} />
          </div>
          <div className="mt-4 text-white font-semibold text-center text-caption-2">
            Infografis
          </div>
        </div>

        <div className="relative bg-secondary-40 w-28 h-20 flex flex-col items-center justify-center rounded-[10px] shadow-lg">
          <div className="absolute lg:-top-10 -top-5 bg-primary-40 w-10 h-10 lg:w-24 lg:h-24 flex items-center justify-center rounded-[10px]">
            <FileText className="text-white" size={24} />
          </div>
          <div className="mt-4 text-white font-semibold text-center text-caption-2">
            Cek Info
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-center items-center w-full gap-10 md:gap-24  z-10">
        <div className="relative bg-secondary-40 w-28 h-20 flex flex-col items-center justify-center rounded-[10px] shadow-lg">
          <div className="absolute lg:-top-10 -top-5 bg-primary-40 w-10 h-10 lg:w-24 lg:h-24 flex items-center justify-center rounded-[10px]">
            <Home className="text-white" size={24} />
          </div>
          <div className="mt-4 text-white font-semibold text-center text-caption-2">
            Desa Kalinyamat Kulon
          </div>
        </div>

        <div className="relative bg-secondary-40 w-28 h-20 flex flex-col items-center justify-center rounded-[10px] shadow-lg">
          <div className="absolute lg:-top-10 -top-5 bg-primary-40 w-10 h-10 lg:w-24 lg:h-24 flex items-center justify-center rounded-[10px]">
            <BookOpen className="text-white" size={24} />
          </div>
          <div className="mt-4 text-white font-semibold text-center text-caption-2">
            Berita
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Jelajahi;


{/* <div className="relative md:flex flex-col hidden items-center lg:gap-48 gap-20 lg:my-20 my-10 mx-5 lg:mx-70 ">
<div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 ">
  <svg className="w-full h-full relative">
    <line
      x1="400px"
      y1="90px"
      x2="800px"
      y2="90px"
      stroke="#3A0507"
      strokeWidth="3"
    />
    <line
      x1="430px"
      y1="150px"
      x2="430px"
      y2="450px"
      stroke="#3A0507"
      strokeWidth="3"
    />
    <line
      x1="775px"
      y1="150px"
      x2="775px"
      y2="450px"
      stroke="#3A0507"
      strokeWidth="3"
    />
    <line
      x1="400px"
      y1="440px"
      x2="800px"
      y2="440px"
      stroke="#3A0507"
      strokeWidth="3"
    />
  </svg>
</div>

<div className="flex flex-row justify-center items-center w-full gap-5 md:gap-24 z-10">
  <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
    <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
      <BarChart2 className="text-white" size={48} />
    </div>
    <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
      Infografis
    </div>
  </div>

  <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
    <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
      <FileText className="text-white" size={48} />
    </div>
    <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
      Cek Info
    </div>
  </div>
</div>

<div className="flex flex-row justify-center items-center w-full gap-5 md:gap-24 z-10">
  <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
    <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
      <Home className="text-white" size={48} />
    </div>
    <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
      Desa Kalinyamat Kulon
    </div>
  </div>

  <div className="relative bg-secondary-40 w-60 h-40 lg:w-[250px] flex flex-col items-center justify-center rounded-[20px] shadow-lg">
    <div className="absolute lg:-top-10 -top-7 bg-primary-40 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center rounded-[20px]">
      <BookOpen className="text-white" size={48} />
    </div>
    <div className="mt-10 text-white font-semibold text-center text-body-2 lg:text-heading-4">
      Berita
    </div>
  </div>
</div>
</div> */}
