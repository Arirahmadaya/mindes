import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link } from "react-router-dom";
import { Input, DatePicker, TimeInput } from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";

const FormBerita = () => {

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Tambah Berita</div>

        {/* Form start */}
        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="flex flex-col p-10 gap-5">
                <div className="flex gap-5">
                  <div className="relative w-1/2 mb-0">
                    <p className="text-caption-2 text-gray mt-1 mb-2">
                      Masukkan Tangga l Kegiatan/Program Berlangsung
                    </p>
                    <DatePicker
                      label="Tanggal Agenda"
                      variant="bordered"
                      onChange={(date) => console.log(date)}
                      // isRequired
                    />
                  </div>
                  <div className="relative w-1/2 mb-0">
                    <p className="text-caption-2 text-gray mt-1 mb-2">
                      Masukkan Waktu Kegiatan/Program Berlangsung
                    </p>
                    <TimeInput
                      label="Waktu"
                      variant="bordered"
                      onChange={(time) => console.log(time)}
                      // isRequired
                    />
                  </div>
                </div>

                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Masukkan Nama Agenda
                  </p>
                  <Input type="text" variant="bordered" label="Nama Agenda" />
                </div>
                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Masukkan Tempat Agenda Dilaksanakan
                  </p>
                  <Input type="text" variant="bordered" label="Tempat" />
                </div>

                <div className="flex justify-between w-full mt-4">
                  <Link
                    to="/admin/agenda"
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

export default FormBerita;
