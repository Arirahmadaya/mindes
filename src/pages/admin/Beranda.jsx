import React from "react";
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import { ArrowUp, ChevronRight, ArrowDown, Info, Printer} from "react-feather";
import ChartAPBDes from "../../components/ChartAPBDes";
import {

  Link,
  Button,
} from "@nextui-org/react";


const Beranda = () => {
  return (
    <div className="flex flex-row bg-[#F3F2F7] h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Dashboard</div>

        <div className="flex gap-5 my-5">
          <div className="w-full h-auto bg-gradient-10 rounded-lg">
            <div className="m-7">
            <div className="text-heading-4 font-semibold">
              Selamat Datang User 1

            </div>
            <div className="flex justify-between">
            <p className="text-heading-6">
            Awasi penyelenggaraan desa, majukan desa bersama. 

            </p>
            <Button
            as={Link}
            className="bg-primary-30 text-white rounded-md"
            href="/"
            variant="flat"
          >
            Cetak Laporan <Printer />
          </Button>
            </div>
          

            </div>
          
           
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
          <div className="w-full h-auto bg-white">
            <ChartAPBDes />
          </div>
          
         
       
        </div>
      </div>
    </div>
  );
};

export default Beranda;
