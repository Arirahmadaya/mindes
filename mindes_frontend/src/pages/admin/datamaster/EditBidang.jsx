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

const EditBidang = () => {
  const { id } = useParams(); // Mendapatkan parameter ID dari URL
  const [formData, setFormData] = useState({
    nama: "",
    parent_id: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/bidang/${id}`
        );
        setFormData({
          nama: response.data.data.nama,
          parent_id: response.data.data.parent_id || "",
        });
      } catch (error) {
        console.log(error);
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
      await axios.put(`${import.meta.env.VITE_API_URL}/bidang/${id}`, formData);
      toast.success("Bidang berhasil diperbarui!");
      setTimeout(() => {
        navigate("/admin/bidang");
      }, 2000); // Navigate after 2 seconds to show the toast
    } catch (error) {
      console.log(error);
      toast.error("Terjadi kesalahan saat memperbarui bidang.");
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
          <BreadcrumbItem href="/admin">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/bidang">Bidang</BreadcrumbItem>
          <BreadcrumbItem href={`/admin/bidang/edit/${id}`}>
            Edit Bidang
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className="flex w-full bg-white rounded-lg ">
              <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
                <div className="flex flex-col gap-5 p-10">
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Bidang
                    </p>
                    <Input
                       type="text"
                       variant="bordered"
                       label="Bidang"
                       name="nama"
                       value={formData.nama}
                       onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Sub Bidang
                    </p>
                    <Input
                      type="number"
                      variant="bordered"
                      label="Sub Bidang"
                      name="parent_id"
                      value={formData.parent_id}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-between w-full mt-4">
                    <Link
                      to="/admin/bidang"
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
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditBidang;
