import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useNavigate, useParams } from "react-router-dom";
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

const EditAgenda = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [selectedKey, setSelectedKey] = useState(new Set());
  const [selectedStatus, setSelectedStatus] = useState(new Set());
  const [formData, setFormData] = useState({
    tgl: "",
    jam: "",
    hari: "",
    tempat: "",
    kegiatan: "",
    deskripsi: "",
    status: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fungsi untuk mengambil data agenda berdasarkan ID
    const fetchAgendaData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/agenda/${id}`);
        const agendaData = response.data.data[0];
        
        // Format tanggal agar sesuai dengan input tipe "date"
        const formattedDate = new Date(agendaData.tgl).toISOString().split("T")[0];

        setFormData({
          tgl: formattedDate,
          jam: agendaData.jam,
          hari: agendaData.hari,
          tempat: agendaData.tempat,
          kegiatan: agendaData.kegiatan,
          deskripsi: agendaData.deskripsi,
          status: agendaData.status,
        });
        setSelectedKey(new Set([agendaData.hari]));
        setSelectedStatus(new Set([agendaData.status]));
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data agenda", error);
      }
    };

    fetchAgendaData();
  }, [id]);

  const selectedHariValue = useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Hari";
  }, [selectedKey]);

  const selectedStatusValue = useMemo(() => {
    const key = [...selectedStatus].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Status";
  }, [selectedStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const hari = keys.values().next().value;
    setFormData((prevData) => ({
      ...prevData,
      hari: hari,
    }));
  };

  const handleStatusSelectionChange = (keys) => {
    setSelectedStatus(keys);
    const status = keys.values().next().value;
    setFormData((prevData) => ({
      ...prevData,
      status: status,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };

      await axios.put(`${import.meta.env.VITE_API_URL}/agenda/${id}`, payload);

      toast.success("Agenda berhasil diupdate!");
      setTimeout(() => {
        navigate("/admin/agenda");
      }, 2000);
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengupdate agenda. Silakan coba lagi.");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div>
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/agenda">Agenda</BreadcrumbItem>
          <BreadcrumbItem href={`/admin/agenda/edit/${id}`}>Edit Agenda</BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className="flex w-full bg-white rounded-lg ">
              <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
                <div className="flex flex-col gap-5 p-10">
                <div className="flex gap-5">
                  <div className="relative w-1/2 mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Tanggal Agenda Berlangsung
                    </p>
                    <Input
                      type="date"
                      variant="bordered"
                      label="Tanggal Agenda"
                      name="tgl"
                      value={formData.tgl}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-1/2 mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Waktu Agenda Berlangsung
                    </p>
                    <Input
                      type="time"
                      variant="bordered"
                      label="Waktu"
                      name="jam"
                      value={formData.jam}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Pilih Hari
                    </p>

                    <Dropdown backdrop="blur">
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className="capitalize text-left w-50%"
                        >
                          {selectedHariValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        closeOnSelect={true}
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedKey}
                        onSelectionChange={handleSelectionChange}
                      >
                        {[
                          "Senin",
                          "Selasa",
                          "Rabu",
                          "Kamis",
                          "Jumat",
                          "Sabtu",
                          "Minggu",
                        ].map((hari) => (
                          <DropdownItem key={hari} eventKey={hari}>
                            {hari}
                          </DropdownItem>
                        ))}
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Tempat Agenda Dilaksanakan
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Tempat"
                      name="tempat"
                      value={formData.tempat}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Nama Agenda
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Nama Agenda"
                      name="kegiatan"
                      value={formData.kegiatan}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Deskripsi Kegiatan
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Deskripsi kegiatan"
                      name="deskripsi"
                      value={formData.deskripsi}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Pilih Status
                    </p>

                    <Dropdown backdrop="blur">
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className="capitalize text-left w-50%"
                        >
                          {selectedStatusValue}
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Single selection example"
                        variant="flat"
                        closeOnSelect={true}
                        disallowEmptySelection
                        selectionMode="single"
                        selectedKeys={selectedStatus}
                        onSelectionChange={handleStatusSelectionChange}
                      >
                        <DropdownItem key="selesai">Selesai</DropdownItem>
                        <DropdownItem key="proses">Proses</DropdownItem>
                        <DropdownItem key="batal">Batal</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  {/* button */}
                  <div className="flex justify-between w-full mt-4">
                    <Link
                      to="/admin/agenda"
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

export default EditAgenda;
