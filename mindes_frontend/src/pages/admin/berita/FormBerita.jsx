import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
// import InputCKEditor from "../../../components/InputCKEditor";
import ImageViewer from "react-simple-image-viewer";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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

const FormBerita = () => {
  const [formData, setFormData] = useState({
    id_kategori: "", //foreignkey
    tgl: "",
    judul: "",
    artikel: "",
    img_berita: "",
    status: "",
  });

  const [categories, setCategories] = useState([]);
  const [selectedKey, setSelectedKey] = useState(new Set());
  const [selectedStatus, setSelectedStatus] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/kategori");
        setCategories(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectedKategoriValue = React.useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Kategori";
  }, [selectedKey]);

  const selectedStatusValue = React.useMemo(() => {
    const key = [...selectedStatus].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Status";
  }, [selectedStatus]);

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const id_kategori = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      id_kategori: id_kategori,
    }));
  };

  const handleStatusSelectionChange = (keys) => {
    setSelectedStatus(keys);
    const status = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      status: status,
    }));
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

  const handleCKEditorChange = (event, editor) => {
    const data = editor.getData();
    setFormData((prevData) => ({
      ...prevData,
      artikel: data,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/berita/create", formData);
      console.log("Data yang dikirim:", formData);
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
                    <div className="flex gap-5">
                      <div className="relative w-1/2 mb-0">
                        <p className="text-caption-2 text-gray mt-1 mb-2">
                          Tanggal Posting
                        </p>
                        <Input
                          type="date"
                          label="Tanggal Agenda"
                          variant="bordered"
                          name="tgl"
                          value={formData.tgl}
                          onChange={handleChange}
                          // isRequired
                        />
                      </div>
                      <div className="relative w-1/2 mb-0">
                        <p className="text-caption-2 text-gray mt-1 mb-2">
                          Pilih Kategori Berita
                        </p>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              variant="bordered"
                              className="capitalize text-left w-50%"
                            >
                              {selectedKategoriValue}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Pilih kategori berita"
                            variant="flat"
                            closeOnSelect={false}
                            disallowEmptySelection
                            selectionMode="multiple"
                            selectedKeys={selectedKey}
                            onSelectionChange={handleSelectionChange}
                          >
                            {categories.map((kategori) => (
                              <DropdownItem key={kategori.id_kategori}>
                                {kategori.nama}
                              </DropdownItem>
                            ))}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </div>
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
                      <CKEditor classname="app rounded-md editor-container"
                        editor={ClassicEditor}
                        // type="longtext"
                        data={formData.artikel}
                        onChange={handleCKEditorChange}
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
                          aria-label="Multiple selection example"
                          variant="flat"
                          closeOnSelect={true}
                          disallowEmptySelection
                          selectionMode="multiple"
                          selectedKeys={selectedStatus}
                          onSelectionChange={handleStatusSelectionChange}
                        >
                          <DropdownItem key="publish">Publish</DropdownItem>
                          <DropdownItem key="proses">Draft</DropdownItem>
                          <DropdownItem key="gagal">Arsip</DropdownItem>
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

export default FormBerita;
