import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import {
  PaperAirplaneIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import ImageViewer from "react-simple-image-viewer";

const FormRealisasi = () => {
  const [formData, setFormData] = useState({
    id_bidang: "",
    kode_kegiatan: "",
    kegiatan: "",
    output: "",
    status: "",
    lokasi: "",
    img_realisasi1: "",
    img_realisasi2: "",
    sumber: "",
    pembiayaan: "",
    tgl_mulai: "",
    tgl_selesai: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedImageFile1, setSelectedImageFile1] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isViewerOpen1, setIsViewerOpen1] = useState(false);

  const [selectedKey, setSelectedKey] = useState(new Set());
  const [selectedBidangKey, setSelectedBidangKey] = useState(new Set());
  const [bidang, setBidang] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(new Set());

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBidang = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/bidang`
        );
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

  const selectedStatusValue = React.useMemo(() => {
    const key = [...selectedStatus].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Status";
  }, [selectedStatus]);

  const handleStatusSelectionChange = (keys) => {
    setSelectedStatus(keys);
    const status = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      status: status,
    }));
  };

  const selectedSumberValue = React.useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Sumber Biaya";
  }, [selectedKey]);

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const sumber = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      sumber: sumber,
    }));
  };

  const selectedBidangValue = React.useMemo(() => {
    const key = [...selectedBidangKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Pilih Bidang";
  }, [selectedBidangKey]);

  const handleBidangSelectionChange = (keys) => {
    setSelectedBidangKey(keys);
    const id_bidang = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      id_bidang: id_bidang,
    }));
  };

  const handleImageChange = (event) => {
    const { name, files } = event.target;
    if (files && files[0]) {
      const imageUrl = URL.createObjectURL(files[0]);
      if (name === "img_realisasi1") {
        setSelectedImage(imageUrl);
        setSelectedImageFile(files[0]);
      } else if (name === "img_realisasi2") {
        setSelectedImage1(imageUrl);
        setSelectedImageFile1(files[0]);
      }
    }
  };

  const openImageViewer = useCallback(() => {
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  const openImageViewer1 = useCallback(() => {
    setIsViewerOpen1(true);
  }, []);

  const closeImageViewer1 = () => {
    setIsViewerOpen1(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (selectedImageFile) {
        data.append("img_realisasi1", selectedImageFile);
      }
      if (selectedImageFile1) {
        data.append("img_realisasi2", selectedImageFile1);
      }
      await axios.post(
        `${import.meta.env.VITE_API_URL}/realisasi/create`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Data yang dikirim:", formData);
      navigate("/admin/realisasi");
    } catch (error) {
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
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang">Utama</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi/bidang/tambah">
            Tambah Realisasi
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="container p-5 mx-auto my-5 transition duration-300 ease-in-out bg-white rounded-lg shadow-md background-animate hover:shadow-lg hover:shadow-gray-500">
          {/*  <h2 className="mb-5 text-3xl font-bold text-left text-blue-600">
            Data Reliassi
          </h2>*/}

          {/* form start */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative w-1/2 mb-0">
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Pilih Kategori Bidang
                </p>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize text-left w-50%"
                    >
                      {selectedBidangValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Pilih kategori bidang"
                    variant="flat"
                    closeOnSelect={false}
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedBidangKey}
                    onSelectionChange={handleBidangSelectionChange}
                  >
                    {bidang.map((bidang) => (
                      <DropdownItem key={bidang.id_bidang}>
                        {bidang.nama}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
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
                    aria-label="Multiple selection example"
                    variant="flat"
                    closeOnSelect={true}
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedStatus}
                    onSelectionChange={handleStatusSelectionChange}
                  >
                    <DropdownItem key="pengajuan">Pengajuan</DropdownItem>
                    <DropdownItem key="proses">Proses</DropdownItem>
                    <DropdownItem key="selesai">Selesai</DropdownItem>
                    <DropdownItem key="gagal">Gagal</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div>
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan ID Kegiatan
                </p>
                <Input
                  type="text"
                  variant="bordered"
                  label="Masukkan ID Kegiatan"
                  name="kode_kegiatan"
                  value={formData.kode_kegiatan}
                  onChange={handleChange}
                />
              </div>

              {/* Sumber Biaya */}
              <div className="relative w-full mb-0">
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Pilih Sumber Biaya
                </p>
                <Dropdown backdrop="">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize text-left w-50%"
                    >
                      {selectedSumberValue}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Pilih Sumber Pembiayaan"
                    variant="flat"
                    closeOnSelect={false}
                    disallowEmptySelection
                    selectionMode="multiple"
                    selectedKeys={selectedKey}
                    onSelectionChange={handleSelectionChange}
                  >
                    {["PBP", "PBK", "PBH", "PAD", "DD", "ADD"].map((sumber) => (
                      <DropdownItem key={sumber} eventKey={sumber}>
                        {sumber}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div>
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan Nama Program
                </p>
                <Input
                  type="text"
                  variant="bordered"
                  label="Nama Program"
                  name="kegiatan"
                  value={formData.kegiatan}
                  onChange={handleChange}
                />
              </div>

              <div>
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan Besar Anggaran (tanpa tanda titik/koma)
                </p>
                <Input
                  type="number"
                  variant="bordered"
                  label="Besar Anggaran"
                  name="pembiayaan"
                  value={formData.pembiayaan}
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="mt-1 mb-2 text-caption-2 text-gray">Lokasi</p>
                <Input
                  type="text"
                  variant="bordered"
                  label="Masukkan Target Lokasi"
                  name="lokasi"
                  value={formData.lokasi}
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-5">
                <div className="relative w-1/2 mb-0">
                  <p className="mt-1 mb-2 text-caption-2 text-gray">
                    Tanggal Mulai
                  </p>
                  <Input
                    type="date"
                    label="Tanggal Agenda"
                    variant="bordered"
                    name="tgl_mulai"
                    value={formData.tgl_mulai}
                    onChange={handleChange}
                    // isRequired
                  />
                </div>
                <div className="relative w-1/2 mb-0">
                  <p className="mt-1 mb-2 text-caption-2 text-gray">
                    Tanggal Selesai
                  </p>
                  <Input
                    type="date"
                    label="Tanggal Agenda"
                    variant="bordered"
                    name="tgl_selesai"
                    value={formData.tgl_selesai}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan Output Kegiatan/Program
                </p>
                <Input
                  type="text"
                  variant="bordered"
                  label="Hasil atau Output"
                  name="output"
                  value={formData.output}
                  onChange={handleChange}
                />
              </div>

              {/* image sebagai bukti bahwa kegiatan telah berlangsung, jadi hanya muncul ketika status sudah selesai/proses */}
              <div className="flex flex-col gap-5 p-10"></div>
            </div>
            <br />
            <h5 className="mb-3 text-3xl font-bold text-left text-blue-600">
              Dokumentasi Bukti Realisasi Anggaran Desa
            </h5>
            <div className="flex gap-5">
              <div className="relative w-1/2 mb-0">
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan Foto Realisasi 1
                </p>
                <input
                  type="file"
                  label="Foto Berita"
                  name="img_realisasi1"
                  className="w-full bg-white file-input file-input-bordered"
                  onChange={handleImageChange}
                />
                {selectedImage && (
                  <div className="mt-4">
                    <img
                      src={selectedImage}
                      onClick={openImageViewer}
                      width="300"
                      style={{ margin: "2px", cursor: "pointer" }}
                      className="border border-gray-300 rounded-md"
                      alt="Selected Preview"
                    />
                  </div>
                )}
                {isViewerOpen && (
                  <ImageViewer
                    src={[selectedImage]}
                    currentIndex={0}
                    onClose={closeImageViewer}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  />
                )}
              </div>
              <div className="relative w-1/2 mb-0">
                <p className="mt-1 mb-2 text-caption-2 text-gray">
                  Masukkan Foto Realisasi 2
                </p>
                <input
                  type="file"
                  label="Foto Berita"
                  name="img_realisasi2"
                  className="w-full bg-white file-input file-input-bordered"
                  onChange={handleImageChange}
                />
                {selectedImage1 && (
                  <div className="mt-4">
                    <img
                      src={selectedImage1}
                      onClick={openImageViewer1}
                      width="300"
                      style={{ margin: "2px", cursor: "pointer" }}
                      className="border border-gray-300 rounded-md"
                      alt="Selected Preview"
                    />
                  </div>
                )}
                {isViewerOpen1 && (
                  <ImageViewer
                    src={[selectedImage1]}
                    currentIndex={0}
                    onClose={closeImageViewer1}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    backgroundStyle={{
                      backgroundColor: "rgba(0,0,0,0.9)",
                    }}
                  />
                )}
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
