import React, { useState } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import TambahRealisasiForm from "../../../components/TambahRealisasiForm";

const FormPencatatan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [showForm, setShowForm] = useState(false); // State to control form visibility
  const [formData, setFormData] = useState({}); // State to manage form data

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/pencatatan", formData);
      navigate("/admin/realisasi/pencatatan");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTambahClick = () => {
    setShowForm(true);
    navigate("/admin/realisasi/pencatatan/tambah");
  };

  const detailData = {
    bidang: "2. BIDANG PELAKSANAAN PEMBANGUNAN DESA",
    subBidang: "5. Sub Bidang Pendidikan",
    kegiatan:
      "2505. Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal Milik Desa (Honor, Pakaian dll)",
    waktuPelaksanaan: "12 Bulan",
    output: "Terbayarnya Honorarium Guru TK",
  };

  const tableData = [
    {
      no: 1,
      akun: "5221",
      uraian: "Belanja Jasa Honorarium Lainnya",
      volume: "3 Bulan",
      harga: "Rp. 3,500,000.00",
      subtotal: "Rp. 10,500,000.00",
    },
    {
      no: 2,
      akun: "5212",
      uraian: "Belanja Pakaian Dinas/Seragam/Atribut",
      volume: "4 Bulan",
      harga: "Rp. 300,000.00",
      subtotal: "Rp. 1,200,000.00",
    },
  ];

  const total = tableData.reduce(
    (sum, item) =>
      sum +
      parseFloat(item.subtotal.replace(/[^0-9,-]+/g, "").replace(",", ".")),
    0
  );

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
          <BreadcrumbItem href="/admin/realisasi/bidang">Utama</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang/tambah">
            Tambah Pencatatan
          </BreadcrumbItem>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <div className="container mx-auto my-5 p-5 bg-white rounded-lg  background-animate transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
            <h2 className="text-2xl font-bold mb-5 text-center text-blue-600">
              DATA REALISASI
            </h2>
            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-3">Data Realisasi</h3>
              <table className="min-w-full bg-white border mb-5">
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Bidang</td>
                    <td className="border px-4 py-2">{detailData.bidang}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Sub Bidang
                    </td>
                    <td className="border px-4 py-2">{detailData.subBidang}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">Kegiatan</td>
                    <td className="border px-4 py-2">{detailData.kegiatan}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Waktu Pelaksanaan
                    </td>
                    <td className="border px-4 py-2">
                      {detailData.waktuPelaksanaan}
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2 font-semibold">
                      Output/Keluaran
                    </td>
                    <td className="border px-4 py-2">{detailData.output}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* button tambah di /realisasi/pencatatan */}
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-5"
              type="button"
              // onClick={() => setShowForm(true)} // Show the form when button is clicked
              onClick={handleTambahClick}
            >
              Tambah
            </button>
            {/* {showForm && <TambahRealisasiForm />}  */}
            {/* Render the form component if showForm is true */}
            {/* TABLE IINI MERUPAKAN GET PENCATATAN */}
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="border px-4 py-2">No</th>
                  <th className="border px-4 py-2">Akun</th>
                  <th className="border px-4 py-2">Uraian</th>
                  <th className="border px-4 py-2">Volume</th>
                  <th className="border px-4 py-2">Harga</th>
                  <th className="border px-4 py-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2 text-center">{item.no}</td>
                    <td className="border px-4 py-2">{item.akun}</td>
                    <td className="border px-4 py-2">{item.uraian}</td>
                    <td className="border px-4 py-2 text-center">
                      {item.volume}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {item.harga}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {item.subtotal}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan="5"
                    className="border px-4 py-2 font-bold text-right"
                  >
                    Total
                  </td>
                  <td className="border px-4 py-2 font-bold text-right">
                    Rp.{" "}
                    {total.toLocaleString("id-ID", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-between w-full mt-4">
              <Link
                // get data per id
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPencatatan;
