import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input } from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditKtgBerita = () => {
  const { id } = useParams(); // Mendapatkan parameter ID dari URL
  const [formData, setFormData] = useState({
    nama: "",
  });
  const [loading, setLoading] = useState(true); // Menambah state loading untuk menunggu data diambil
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/kategori/${id}`
        );
        console.log("Data fetched from API:", response.data); // Log response API
        setFormData({ nama: response.data.data.nama });
        setLoading(false); // Set loading to false setelah data diambil
      } catch (error) {
        console.log(error);
        setLoading(false); // Set loading to false meskipun ada error
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/kategori/${id}`,
        formData
      );
      toast.success("Kategori berhasil diperbarui!");
      setTimeout(() => {
        navigate("/admin/kategori");
      }, 2000); // Navigate after 2 seconds to show the toast
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat memperbarui kategori.");
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Menampilkan loading sementara data diambil
  }

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/ktgberita">
            Data Master
          </BreadcrumbItem>
          <BreadcrumbItem href="/admin/ktgberita/edit">
            Edit Kategori Berita
          </BreadcrumbItem>
        </Breadcrumbs>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className="flex w-full bg-white rounded-lg">
              <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
                <div className="flex flex-col p-10 gap-5">
                  <div className="relative w-full mb-0">
                    <p className="text-caption-2 text-gray mt-1 mb-2">
                      Masukkan Kategori Berita
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Kategori Berita"
                      name="nama"
                      value={formData.nama} // Menggunakan state untuk value
                      onChange={handleChange}
                      placeholder="Masukkan Kategori Berita" // Placeholder jika data belum diambil
                    />
                  </div>

                  <div className="flex justify-between w-full mt-4">
                    <Link
                      to="/admin/kategori"
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
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditKtgBerita;
