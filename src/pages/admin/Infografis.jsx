import React from "react";
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { ArrowUp, ChevronRight, ArrowDown, Info } from "react-feather";
import Tablenih from "../../components/Table";
const Infografis = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Infografis</div>

        <div className="flex gap-5 my-5">
          <div className=" flex bg-gray-100 w-full border-2 border-purple-500">
            <div className="bg-white rounded-lg w-full h-[550px] transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 mx-10 border-2 border-purple-500">
              <div className="bg-blue-100/20  rounded-b-[20px] w-auto ">
                <p className="text-heading-4 font-semibold text-center text-black p-5">
                  Tabel ....
                </p>
              </div>
              <div className="p-4 border-2 border-purple-500">
                <Tablenih />
              </div>
            </div>

            <div className="flex justify-between "></div>
          </div>
        </div>

        <div className="flex gap-5 ">
          <div className="w-full h-[150px] bg-white border-l-4 border-green-600 rounded-lg shadow-xl ">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto ">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Pendapatan Desa <ChevronRight />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-green-600">
                  <ArrowUp className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <p className="font-bold text-heading-6 items-end">
                  Rp 1.200.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[150px] bg-white border-l-4 border-danger rounded-lg shadow-xl ">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto ">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Belanja Desa <ChevronRight />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-red-600">
                  <ArrowDown className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <p className="font-bold text-heading-6 items-end">
                  Rp 1.200.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[150px] bg-white border-l-4 border-blue-600 rounded-lg shadow-xl ">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto ">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Berita <ChevronRight />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-blue-600">
                  <Info className="text-white" size={32} />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <p className="font-bold text-heading-6 items-end">11 Berita</p>
              </div>
            </div>
          </div>
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

export default Infografis;
