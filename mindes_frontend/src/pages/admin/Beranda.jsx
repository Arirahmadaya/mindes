import React from "react";
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import {
  PresentationChartLineIcon,
  UsersIcon,
  NewspaperIcon,
  ChevronRightIcon,
  PrinterIcon,
} from "@heroicons/react/20/solid";
import ChartAPBDes from "../../components/ChartAPBDes";
import { Link, Button } from "@nextui-org/react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

const Beranda = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
        </Breadcrumbs>


        <div className="flex gap-5 my-5">
          <div className="w-full h-auto bg-gradient-10 background-animate rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
            <div className="m-7">
            <div className="text-heading-6  font-semibold">
                Selamat Datang User 1
              </div>
              <div className="flex justify-between">
                <p className="text-body-1">
                  Awasi penyelenggaraan desa, majukan desa bersama.
                </p>
                <Button
                  as={Link}
                  className="bg-primary-30 text-white rounded-md"
                  href="/"
                  variant="flat"
                >
                  Cetak Laporan <PrinterIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 ">
          <div className="w-full h-[150px] bg-white border-l-4 border-green-600 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Pengguna <ChevronRightIcon className="w-5 h-5 text-blue-600 ml-1" />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-green-600">
                  <UsersIcon width={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <p className="font-bold text-heading-6 items-end">
                  99 Pengguna
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[150px] bg-white border-l-4 border-danger rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Belanja Desa <ChevronRightIcon className="w-5 h-5 text-blue-600 ml-1" />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-red-600">
                  <PresentationChartLineIcon width={32} className="text-white" />
                </div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <p className="font-bold text-heading-6 items-end">
                  Rp 1.200.000.000
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[150px] bg-white border-l-4 border-blue-600 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
            <div className="flex justify-end">
              <div className="bg-blue-100 rounded-tr-lg rounded-bl-[20px] inline-block w-auto">
                <p className="flex lg:text-body-2 text-caption-2 font-semibold text-center text-blue p-3 items-center">
                  Berita <ChevronRightIcon className="w-5 h-5 text-blue-600 ml-1" />
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center p-4">
              <div className="flex-shrink-0 pr-4">
                <div className="rounded-full p-3 bg-blue-600">
                  <NewspaperIcon width={32} className="text-white" />
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
