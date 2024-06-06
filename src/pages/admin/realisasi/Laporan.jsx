import React from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const Laporan = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/laporan">
            Laporan
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="my-5 text-heading-6 font-semibold">Laporan</div>
        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500  ">
              <div className="bg-blue-100/20  rounded-b-[20px] w-auto "></div>
            </div>
            <div className="mb-28">
              <div className="mb-2 font-bold flex text-heading-2 md:text-display-2 hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[30px] bg-gradient-10 background-animate rounded-xl">
                <div className="w-full h-auto p-5">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laporan;
