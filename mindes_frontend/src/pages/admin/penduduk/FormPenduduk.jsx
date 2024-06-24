import React, { useState } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormPenduduk = () => {
  const [selectedKey, setSelectedKey] = useState(new Set());
  const [formData, setFormData] = useState({
    tgl: "",
    jumlah: "",
    mutasi: "",
    keterangan: "",
  });

  const selectedValue = React.useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Jenis Mutasi";
  }, [selectedKey]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const mutasi = keys.values().next().value;
    setFormData((prevData) => ({
      ...prevData,
      mutasi: mutasi,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/penduduk/create`,
        formData
      );
      toast.success("Data penduduk berhasil disimpan!");
      setTimeout(() => {
        navigate("/admin/penduduk");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/penduduk">Penduduk</BreadcrumbItem>
          <BreadcrumbItem href="/admin/penduduk/tambah">
            Tambah Mutasi Penduduk
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className="flex w-full bg-white rounded-lg ">
              <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
                <div className="flex flex-col gap-5 p-10">
                  <div className="relative w-1/4 mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Tanggal Mutasi
                    </p>
                    <Input
                      type="date"
                      label="Tanggal Agenda"
                      variant="bordered"
                      name="tgl"
                      value={formData.tgl}
                      onChange={handleChange}
                    />
                  </div>
                  {/* select nya udah bener */}
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
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
                        selectedKey={selectedKey}
                        onSelectionChange={handleSelectionChange}
                      >
                        <DropdownItem key="lahir">Lahir</DropdownItem>
                        <DropdownItem key="meninggal">Meninggal</DropdownItem>
                        <DropdownItem key="datang">Datang</DropdownItem>
                        <DropdownItem key="pindah">Pindah</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  {/* input number */}
                  <div className="relative w-1/2 mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Jumlah Orang
                    </p>
                    <Input
                      type="number"
                      variant="bordered"
                      label="Jumlah Mutasi"
                      name="jumlah"
                      value={formData.jumlah}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Keterangan
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Masukkan Keterangan Tambahan"
                      name="keterangan"
                      value={formData.keterangan}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between w-full mt-4">
                    <Link
                      to="/admin/penduduk"
                      className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      <ArrowUturnLeftIcon className="w-5 h-5" />
                      Batal
                    </Link>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                      <span>Simpan</span>
                      <PaperAirplaneIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FormPenduduk;
