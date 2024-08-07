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

const EditUser = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [selectedKey, setSelectedKey] = useState(new Set());
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    roles: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fungsi untuk mengambil data pengguna berdasarkan ID
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userData = response.data.data[0];
        setFormData({
          username: userData.username,
          email: userData.email,
          password: "", // Password tidak ditampilkan untuk keamanan
          roles: userData.roles,
        });
        setSelectedKey(new Set([userData.roles]));
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data pengguna", error);
      }
    };

    fetchUserData();
  }, [id]);

  const selectedValue = useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Role";
  }, [selectedKey]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const role = keys.values().next().value;
    setFormData((prevData) => ({
      ...prevData,
      roles: role,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = { ...formData };
      const token = localStorage.getItem("token");

      await axios.put(`${import.meta.env.VITE_API_URL}/user/${id}`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("User berhasil diupdate!");
      setTimeout(() => {
        navigate("/admin/user");
      }, 2000);
    } catch (error) {
      toast.error("Terjadi kesalahan saat mengupdate user. Silakan coba lagi.");
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
          <BreadcrumbItem href="/admin/user">User</BreadcrumbItem>
          <BreadcrumbItem href={`/admin/user/edit/${id}`}>Edit User</BreadcrumbItem>
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
                      Masukkan Username
                    </p>
                    <Input
                      type="text"
                      variant="bordered"
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Email
                    </p>
                    <Input
                      type="email"
                      variant="bordered"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Masukkan Password
                    </p>
                    <Input
                      type="password"
                      variant="bordered"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative w-full mb-0">
                    <p className="mt-1 mb-2 text-caption-2 text-gray">
                      Pilih Role
                    </p>

                    <Dropdown backdrop="blur">
                      <DropdownTrigger>
                        <Button
                          variant="bordered"
                          className="capitalize text-left w-50%"
                        >
                          {selectedValue}
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
                        <DropdownItem key="superadmin">
                          Super Admin
                        </DropdownItem>
                        <DropdownItem key="admin">Admin</DropdownItem>
                        <DropdownItem key="umum">Umum</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>

                  {/* button */}
                  <div className="flex justify-between w-full mt-4">
                    <Link
                      to="/admin/user"
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

export default EditUser;
