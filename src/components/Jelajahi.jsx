import React from "react";
import { BarChart2, FileText, Home, BookOpen } from "react-feather";

const Jelajahi = () => {
  return (
    <div className="relative flex flex-col items-center justify-evenly min-h-screen lg:mt-20 my-10 mx-5 lg:mx-70">
      <div className="flex  flex-row justify-evenly items-center w-full gap-10 lg:gap-0">
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

      <div className="flex flex-row justify-evenly items-center w-full mt-20 gap-10 lg:gap-0">
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

      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <svg className="w-full h-full">
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="50%"
            stroke="#97C1E4"
            strokeWidth="2"
          />
          <line
            x1="50%"
            y1="50%"
            x2="0"
            y2="50%"
            stroke="#97C1E4"
            strokeWidth="2"
          />
          <line
            x1="50%"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#97C1E4"
            strokeWidth="2"
          />
          <line
            x1="50%"
            y1="50%"
            x2="50%"
            y2="100%"
            stroke="#97C1E4"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Jelajahi;


// <div className="relative flex flex-col items-center justify-evenly min-h-screen mt-20 mx-70">
//   <div className="flex justify-evenly items-center w-full">
//     <div className="relative bg-secondary-40 w-[300px] h-40 flex flex-col items-center justify-center rounded-t-full shadow-lg">
//       <div className="absolute -top-10 bg-primary-40 w-24 h-24 flex items-center justify-center rounded-full">
//         <BarChart2 className="text-white" size={48} />
//       </div>
//       <div className="mt-10 text-white font-semibold text-center text-heading-3">
//         Infografis
//       </div>
//     </div>

//     <div className="relative bg-secondary-40 w-[300px] h-40 flex flex-col items-center justify-center rounded-t-full shadow-lg">
//       <div className="absolute -top-10 bg-primary-40 w-24 h-24 flex items-center justify-center rounded-full">
//         <FileText className="text-white" size={48} />
//       </div>
//       <div className="mt-10 text-white font-semibold text-center text-heading-3">
//         Cek Info
//       </div>
//     </div>
//   </div>

//   <div className="flex justify-evenly items-center w-full mt-20">
//     <div className="relative bg-secondary-40 w-[300px] h-40 flex flex-col items-center justify-center rounded-b-full shadow-lg">
//       <div className="absolute -bottom-10 bg-primary-40 w-24 h-24 flex items-center justify-center rounded-full">
//         <Home className="text-white" size={48} />
//       </div>
//       <div className="mb-10 text-white font-semibold text-center text-heading-3">
//         Desa Kalinyamat Kulon
//       </div>
//     </div>

//     <div className="relative bg-secondary-40 w-[300px] h-40 flex flex-col items-center justify-center rounded-b-full shadow-lg">
//       <div className="absolute -bottom-10 bg-primary-40 w-24 h-24 flex items-center justify-center rounded-full">
//         <BookOpen className="text-white" size={48} />
//       </div>
//       <div className=" mb-10 text-white font-semibold text-center text-heading-3">
//         Berita
//       </div>
//     </div>
//   </div>

//   <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//     <svg className="w-full h-full">
//       <line
//         x1="50%"
//         y1="0"
//         x2="50%"
//         y2="50%"
//         stroke="#97C1E4"
//         strokeWidth="2"
//       />
//       <line
//         x1="50%"
//         y1="50%"
//         x2="0"
//         y2="50%"
//         stroke="#97C1E4"
//         strokeWidth="2"
//       />
//       <line
//         x1="50%"
//         y1="50%"
//         x2="100%"
//         y2="50%"
//         stroke="#97C1E4"
//         strokeWidth="2"
//       />
//       <line
//         x1="50%"
//         y1="50%"
//         x2="50%"
//         y2="100%"
//         stroke="#97C1E4"
//         strokeWidth="2"
//       />
//     </svg>
//   </div>
// </div>;
