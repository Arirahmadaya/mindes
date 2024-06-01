import React from "react";
import Sidebares2 from "../../components/Sidebar2";
import NavbarAdmin2 from "../../components/NavbarAdmin2";

const Laporan = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-hidden">
      <Sidebares2 />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin2 />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Dashboard</div>
        <div className="flex gap-5 ">
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
        </div>

        <div className="flex gap-5 my-5">
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
          <div className="w-full h-[100px] lg:h-[150px] bg-white"></div>
        </div>
     
      </div>
    </div>
  );
};

export default Laporan;
