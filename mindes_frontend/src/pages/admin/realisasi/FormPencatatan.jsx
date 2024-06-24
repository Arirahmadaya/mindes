import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
  FolderPlusIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
// import TambahRealisasiForm from "../../../components/TambahRealisasiForm";

const FormPencatatan = () => {
  const [pencatatan, setPencatatan] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { id_realisasi, ...detailData } = location.state || {};

  useEffect(() => {
    if (id_realisasi) {
      getPencatatan(id_realisasi);
    }
  }, [id_realisasi]);

  const getPencatatan = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pencatatan/${id}`
      );
      setPencatatan(response.data.data);
    } catch (error) {
      console.log("Terjadi kesalahan", error);
    }
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // const [showForm, setShowForm] = useState(false); // State to control form visibility
  // const [formData, setFormData] = useState({}); // State to manage form data

  // DATA dari pencatatan ini ga di push ke realisasitable, TAPI hanya di simpan di pencatatanTabel. Karna memang pencatatan final data itu disimpan di pencatatan (HANYA SAJA, di front-end itu PENCATATAN di taruh di dalam button LIHAT di setiap id_realisasi KARENA EMANG PENCATATAN DI SIMPAN DENGAN MENYIMPAN ID REALISASINYA.
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.get("${import.meta.env.VITE_API_URL}/pencatatan", formData);
  //     navigate("/admin/realisasi/pencatatan");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // TUJUANNYA ingin membuat ketika button tambah di klik menuju ke component TambahRealisasiForm.jsx
  const handleTambahClick = () => {
    // setShowForm(true);
    navigate("/admin/realisasi/pencatatan/tambah", { state: { id_realisasi } });
  };

  // const detailData = {
  //   bidang: "",
  //   kegiatan: "",
  //   waktuPelaksanaan: "", //durasi tgl_mulai - tgl_selesai
  //   output: "",
  // };

  // const total = tableData.reduce(
  //   (sum, item) =>
  //     sum +
  //     parseFloat(item.subtotal.replace(/[^0-9,-]+/g, "").replace(",", ".")),
  //   0
  // );

  const total = pencatatan.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div>
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/pencatatan">
            Pencatatan
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Form Start */}
        {/* DATA dari pencatatan ini ga di push ke realisasitable, TAPI hanya di simpan di pencatatanTabel. Karna memang pencatatan final data itu disimpan di pencatatan (HANYA SAJA, di front-end itu PENCATATAN di taruh di dalam button LIHAT di setiap id_realisasi KARENA EMANG PENCATATAN DI SIMPAN DENGAN MENYIMPAN ID REALISASINYA. */}
        {/* <form onSubmit={handleSubmit}> */}
        <div className="container p-5 mx-auto my-5 transition duration-300 ease-in-out bg-white rounded-lg shadow-md background-animate hover:shadow-lg hover:shadow-gray-500">
          {/* <h2 className="mb-5 text-2xl font-bold text-center text-blue-600">
            Data Realisasi Anggaran dan Belanja Desa Kalinyamat Kulon
          </h2> */}
          <div className="mb-5">
            <h3 className="mb-3 text-xl font-semibold">
              Pencatatan Realisasi Penggunaan APBDes
            </h3>
            {/* tambahkan button edit yang nantiny akan menuju ke hlaman edit data table realisasinya */}
            <table className="min-w-full mb-5 bg-white border">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border font-regular">Bidang</td>
                  <td className="px-4 py-2 border">{detailData.bidang}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-regular">Kegiatan</td>
                  <td className="px-4 py-2 border">{detailData.kegiatan}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-regular">
                    Waktu Pelaksanaan
                  </td>
                  <td className="px-4 py-2 border">
                    {formatDate(detailData.tgl_mulai)} s/d{" "}
                    {formatDate(detailData.tgl_selesai)}
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border font-regular">
                    Output/Keluaran
                  </td>
                  <td className="px-4 py-2 border">{detailData.output}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* button tambah di /realisasi/pencatatan */}
          <div className="flex justify-end mb-5">
            <button
              type="button"
              onClick={handleTambahClick}
              className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              <span>Tambah Pencatatan</span>
              <FolderPlusIcon className="w-5 h-5" />
              <div className=""></div>
            </button>
          </div>
          {/* <button
              className="p-2 mb-5 text-white bg-blue-500 rounded hover:bg-blue-600"
              type="button"
              // onClick={() => setShowForm(true)} // Show the form when button is clicked
              onClick={handleTambahClick}
            >
              Tambah
            </button> */}
          {/* {showForm && <TambahRealisasiForm />}  */}
          {/* Render the form component if showForm is true */}
          {/* TABLE IINI MERUPAKAN GET PENCATATAN */}
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="px-4 py-2 border">No</th>
                <th className="px-4 py-2 border">Kode Akun</th>
                <th className="px-4 py-2 border">Uraian</th>
                <th className="px-4 py-2 border">Kuantitas</th>
                <th className="px-4 py-2 border">Nominal</th>
                <th className="px-4 py-2 border">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {pencatatan.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-center border">{item.no}</td>
                  <td className="px-4 py-2 border">{item.kode}</td>
                  <td className="px-4 py-2 border">{item.uraian}</td>
                  <td className="px-4 py-2 text-center border">
                    {item.kuantitas}
                  </td>
                  <td className="px-4 py-2 text-right border">
                    {item.nominal}
                  </td>
                  <td className="px-4 py-2 text-right border">
                    {item.subtotal}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="5"
                  className="px-4 py-2 font-bold text-right border"
                >
                  Total
                </td>
                <td className="px-4 py-2 font-bold text-right border">
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
        {/* </form> */}
      </div>
    </div>
  );
};

export default FormPencatatan;
