import React from "react";
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { ArrowUp, ChevronRight, ArrowDown, Info } from "react-feather";
import Tablenih from "../../components/Table";

const Laporan = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Laporan</div>
        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500  ">
              <div className="bg-blue-100/20  rounded-b-[20px] w-auto "></div>
              <div className="p-4 ">
                <Tablenih />
              </div>
            </div>

            <div className="flex justify-between "></div>
          </div>
        </div>

     

      
      </div>
    </div>
  );
};

export default Laporan;
