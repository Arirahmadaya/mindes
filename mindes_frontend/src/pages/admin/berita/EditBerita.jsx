import React, { useState, useCallback } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import InputCKEditor from "../../../components/InputCKEditor";
import ImageViewer from "react-simple-image-viewer";
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


// yet
const EditBerita = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [postDate, setPostDate] = useState("");
  const [formData, setFormData] = useState({
    id_kategori: "",
    id_user: "",
    judul: "",
    artikel: "",
    img_berita: "",
    status: "",
  });
  const navigate = useNavigate();



  const selectedValue = React.useMemo(() => {
    const items = Array.from(selectedKeys).map(
      (key) => key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
    );
    return items.length ? items.join(", ") : "Pilih Kategori";
  }, [selectedKeys]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectionChange = (keys) => {
    setSelectedKeys(keys);
  };

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
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
      await axios.post("http://localhost:3000/berita/create", formData);
      navigate("/admin/berita");
    } catch (error) {
      console.log(error);
    }
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
          <BreadcrumbItem href="/admin/berita">Berita</BreadcrumbItem>
          <BreadcrumbItem href="/admin/berita/tambah">
            Tambah Berita
          </BreadcrumbItem>
        </Breadcrumbs>

        {/* Form start */}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-5 my-5">
            <div className=" flex w-full bg-white rounded-lg">
              <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
                <div className="bg-blue-100/20 rounded-b-[20px] w-auto">
                  <div className="flex flex-col p-10 gap-5">
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Tanggal Posting
                      </p>
                      <input
                        type="date"
                        className="w-full border-2 border-gray-300 rounded-xl p-3"
                        value={postDate}
                        onChange={(e) => setPostDate(e.target.value)}
                      />
                    </div>
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Pilih Kategori Berita
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
                          <DropdownItem key="1">Program</DropdownItem>
                          <DropdownItem key="2">Kesehatan</DropdownItem>
                          <DropdownItem key="3">Bansos</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    {/* judul berita harus unique jika ada yang sama maka tidak dapat disimpan  */}
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Masukkan Judul Berita
                      </p>
                      <Input
                        type="text"
                        variant="bordered"
                        label="Judul Berita"
                        name="judul"
                        value={formData.judul}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Masukkan Isi Berita
                      </p>
                      <InputCKEditor
                        type="text"
                        label="Artikel"
                        name="artikel"
                        value={formData.artikel}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-0">
                      <p className="text-caption-2 text-gray mt-1 mb-2">
                        Unggah Gambar
                      </p>
                      <input
                        type="file"
                        label="Foto Berita"
                        className="file-input file-input-bordered w-full bg-white"
                        value={FormData.img_berita}
                        onChange={handleImageChange}
                      />
                      {selectedImage && (
                        <div className="mt-4">
                          <img
                            src={selectedImage}
                            onClick={openImageViewer}
                            width="300"
                            style={{ margin: "2px", cursor: "pointer" }}
                            alt="Selected Preview"
                          />
                        </div>
                      )}
                    </div>
                    {isViewerOpen && (
                      <ImageViewer
                        src={[selectedImage]}
                        currentIndex={currentImage}
                        disableScroll={false}
                        closeOnClickOutside={true}
                        onClose={closeImageViewer}
                      />
                    )}

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
                          aria-label="Multiple selection example"
                          variant="flat"
                          closeOnSelect={true}
                          disallowEmptySelection
                          selectionMode="multiple"
                          selectedKeys={selectedKeys}
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

                    <div className="flex justify-between w-full mt-4">
                      <Link
                        to="/admin/berita"
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
        </form>
      </div>
    </div>
  );
};

export default EditBerita;