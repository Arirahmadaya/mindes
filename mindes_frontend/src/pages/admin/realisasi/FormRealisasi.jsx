import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const FormRealisasi = () => {
  const [formData, setFormData] = useState({
    lokasi: "",
    idKegiatan: "",
    kegiatan: "",
    biaya: "",
    output: "",
    tanggalMulai: "",
    tanggalSelesai: "",
  });

  const [selectedKey, setSelectedKey] = useState(new Set());
  // const [selectedBidang, setSelectedBidang] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  // Choose
  const [bidang, setBidang] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(new Set());
  const [selectedSumber, setSelectedSumber] = useState(new Set());

  const navigate = useNavigate();

  // Get data from kategori berita
  useEffect(() => {
    const fetchBidang = async () => {
      try {
        const response = await axios.get("http://localhost:3000/bidang");
        setBidang(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBidang();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Status
  const selectedStatusValue = React.useMemo(() => {
    const key = [...selectedStatus].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Status";
  }, [selectedStatus]);

  // Sumber
  const handleSumberSelectionChange = (keys) => {
    setSelectedKey(keys);
    const sumber = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      sumber: sumber,
    }));
  };

  // Bidang
  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const id_bidang = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      id_bidang: id_bidang,
    }));
  };

  // const handleImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     setSelectedImage(URL.createObjectURL(event.target.files[0]));
  //     setSelectedImageFile(event.target.files[0]);
  //   }
  // };
  const handleImageChange = (event) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      setSelectedImage((prevImages) => ({
        ...prevImages,
        [name]: URL.createObjectURL(files[0]),
      }));
      setSelectedImageFile((prevFiles) => ({
        ...prevFiles,
        [name]: files[0],
      }));
    }
  };

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (selectedImageFile.img_realisasi1) {
        data.append('img_realisasi1', selectedImageFile.img_realisasi1);
      }
      if (selectedImageFile.img_realisasi2) {
        data.append('img_realisasi2', selectedImageFile.img_realisasi2);
      }
      await axios.post("http://localhost:3000/realisasi/create", formData);
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
      navigate("/admin/realisasi/pencatatan");
    } catch (error) {
      console.log(error);
    }
  };

  // Opsi bidang yang tersedia
  // const bidangOptions = [
  //   "- Pilih Bidang -",
  //   "Bidang 1",
  //   "Bidang 2",
  // ];
  // // Opsi status yang tersedia
  // const statusOptions = [
  //   "- Pilih Status -",
  //   "Status 1",
  //   "Status 2",
  //   // Tambahkan opsi status lainnya sesuai kebutuhan
  // ];
  // Opsi sumber yang tersedia
  // const sumberOptions = [
  //   "- Pilih Sumber -",
  //   "Sumber 1",
  //   "Sumber 2",
  //   // Tambahkan opsi sumber lainnya sesuai kebutuhan
  // ];

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
          <BreadcrumbItem href="/admin/realisasi/bidang">Utama</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang/tambah">
            Tambah Realisasi
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="container p-5 mx-auto my-5 transition duration-300 ease-in-out bg-white rounded-lg shadow-md background-animate hover:shadow-lg hover:shadow-gray-500">
          <h2 className="mb-5 text-3xl font-bold text-left text-blue-600">
            Data Reliassi
          </h2>

          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                
                <label className="block mb-2 font-semibold text-gray-700">
                  Pilih Bidang
                </label>
                <select
                  value={handleSelectionChange}
                  onChange={(e) => setSelectedKey(e.target.value)}
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Lokasi
                </label>
                <textarea
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Lokasi"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  ID Kegiatan
                </label>
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Sumber
                </label>
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Kegiatan
                </label>
                <textarea
                  name="kegiatan"
                  value={formData.kegiatan}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Masukkan Kegiatan"
                ></textarea>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Biaya
                </label>
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Output
                </label>
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Tanggal Mulai
                </label>
                <input
                  type="date"
                  name="tanggalMulai"
                  value={formData.tanggalMulai}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Status
                </label>
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
                <label className="block mb-2 font-semibold text-gray-700">
                  Tanggal Selesai
                </label>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRealisasi;
