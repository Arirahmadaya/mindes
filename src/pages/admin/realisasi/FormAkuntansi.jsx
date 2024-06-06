import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link } from "react-router-dom";
import {
  Input,
} from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

const FormAkuntansi = () => {

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/akuntansi">Akuntansi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/akuntansi/tambah">Tambah Akuntansi</BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="flex flex-col p-10 gap-5">
                
                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Masukkan Kode Akun
                  </p>
                  <Input type="text" variant="bordered" label="Kode Akun" />
                </div>
                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Masukkan Uraian Akun
                  </p>
                  <Input type="text" variant="bordered" label="Uraian" />
                </div>
                
                
                <div className="flex justify-between w-full mt-4">
                <Link
                    to="/admin/realisasi/akuntansi"
                    className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    <ArrowUturnLeftIcon className="w-5 h-5" />
                    Batal
                  </Link>
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    <span>Simpan</span>
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAkuntansi;
