import React, { useState } from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
  DatePicker,
} from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

const FormPenduduk = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());

  const selectedValue = React.useMemo(() => {
    const items = Array.from(selectedKeys).map(
      (key) => key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
    );
    return items.length ? items.join(", ") : "Pilih Kategori";
  }, [selectedKeys]);

  const handleSelectionChange = (keys) => {
    setSelectedKeys(keys);
  };

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/penduduk">Penduduk</BreadcrumbItem>
          <BreadcrumbItem href="/admin/penduduk/tambah">Tambah Mutasi Penduduk</BreadcrumbItem>
        </Breadcrumbs>


        {/* Form start */}
        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="flex flex-col p-10 gap-5">
                <div className="relative w-1/4 mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Masukkan Tanggal Mutasi
                  </p>
                  <DatePicker
                    label="Tanggal Mutasi"
                    variant="bordered"
                    onChange={(date) => console.log(date)}
                    // isRequired
                  />
                </div>

                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Pilih Jenis Mutasi
                  </p>
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        variant="bordered"
                        className="capitalize text-left w-50%"
                      >
                        {selectedValue}
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                      aria-label="Multiple selection example"
                      variant="flat"
                      closeOnSelect={false}
                      disallowEmptySelection
                      selectionMode="multiple"
                      selectedKeys={selectedKeys}
                      onSelectionChange={handleSelectionChange}
                    >
                      <DropdownItem key="1">Lahir</DropdownItem>
                      <DropdownItem key="2">Meninggal</DropdownItem>
                      <DropdownItem key="3">Datang</DropdownItem>
                      <DropdownItem key="3">Pindah</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                {/* input number */}
                <div className="relative w-1/12 mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Jumlah Orang
                  </p>
                  <Input type="text" variant="bordered" label="Jumlah" />
                </div>
                <div className="relative w-full mb-0">
                  <p className="text-caption-2 text-gray mt-1 mb-2">
                    Keterangan
                  </p>
                  <Input
                    type="text"
                    variant="bordered"
                    label="Masukkan Keterangan Tambahan"
                  />
                </div>

                <div className="flex justify-between w-full mt-4">
                  <Link
                    to="/admin/penduduk"
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

export default FormPenduduk;
