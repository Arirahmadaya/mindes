import React, { useState } from "react";
import Sidebares from "../../../components/Sidebar";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { PaperAirplaneIcon, ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import NavbarAdmin from "../../../components/NavbarAdmin";

const FormPencatatanDetail = () => {
  const navigate = useNavigate();

  // State untuk menyimpan pilihan bidang, status, dan sumber
  const [selectedBidang, setSelectedBidang] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSumber, setSelectedSumber] = useState("");
  const [formData, setFormData] = useState({
    lokasi: "",
    idKegiatan: "",
    kegiatan: "",
    biaya: "",
    output: "",
    tanggalMulai: "",
    tanggalSelesai: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/pencatatan/create", formData);
      navigate("/admin/realisasi/pencatatan");
    } catch (error) {
      console.log(error);
    }
  };

  // Opsi bidang yang tersedia
  const bidangOptions = [
    "- Pilih Bidang -",
    "Bidang 1",
    "Bidang 2",
    // Tambahkan opsi bidang lainnya sesuai kebutuhan
  ];

  // Opsi status yang tersedia
  const statusOptions = [
    "- Pilih Status -",
    "Status 1",
    "Status 2",
    // Tambahkan opsi status lainnya sesuai kebutuhan
  ];

  // Opsi sumber yang tersedia
  const sumberOptions = [
    "- Pilih Sumber -",
    "Sumber 1",
    "Sumber 2",
    // Tambahkan opsi sumber lainnya sesuai kebutuhan
  ];

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div>

        <NavbarAdmin />
        </div>
        
        
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang">Bidang</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang/tambah">Tambah Bidang</BreadcrumbItem>
        </Breadcrumbs>

      
        <div className="container mx-auto my-5 p-5 bg-white rounded-lg  background-animate transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
          <h2 className="text-3xl font-bold mb-5 text-left text-blue-600">REALISASI</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Pilih Bidang</label>
                <select
                  value={selectedBidang}
                  onChange={(e) => setSelectedBidang(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {bidangOptions.map((bidang, index) => (
                    <option key={index} value={bidang}>
                      {bidang}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Lokasi</label>
                <textarea
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Lokasi"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">ID Kegiatan</label>
                <input
                  type="text"
                  name="idKegiatan"
                  value={formData.idKegiatan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan ID Kegiatan"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Sumber</label>
                <select
                  value={selectedSumber}
                  onChange={(e) => setSelectedSumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {sumberOptions.map((sumber, index) => (
                    <option key={index} value={sumber}>
                      {sumber}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Kegiatan</label>
                <textarea
                  name="kegiatan"
                  value={formData.kegiatan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Kegiatan"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Biaya</label>
                <input
                  type="number"
                  name="biaya"
                  value={formData.biaya}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Biaya"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Output</label>
                <input
                  type="text"
                  name="output"
                  value={formData.output}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Output Kegiatan"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Tanggal Mulai</label>
                <input
                  type="date"
                  name="tanggalMulai"
                  value={formData.tanggalMulai}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                >
                  {statusOptions.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-semibold">Tanggal Selesai</label>
                <input
                  type="date"
                  name="tanggalSelesai"
                  value={formData.tanggalSelesai}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex justify-between w-full mt-4">
              <Link
                to="/admin/realisasi"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPencatatanDetail;
