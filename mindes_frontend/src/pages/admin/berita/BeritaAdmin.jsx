import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Eye, Edit, Trash2 } from "react-feather";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteIcon, EditIcon, EyeIcon } from "../../../components/Ikon";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "tgl",
  "judul",
  "artikel",
  "nama",
  "img_berita",
  "status",
  "actions",
];

const columns = [
  { name: "ID", uid: "id" },
  { name: "Tanggal", uid: "tgl" },
  { name: "Judul", uid: "judul" },
  { name: "Artikel", uid: "artikel" },
  { name: "Kategori", uid: "nama" },
  { name: "Kunjungan", uid: "kunjungan" },
  { name: "Status", uid: "status" },
  { name: "Aksi", uid: "actions" },
];

const statusOptions = [
  { name: "Publish", uid: "publish" },
  { name: "Proses", uid: "proses" },
  { name: "Gagal", uid: "gagal" },
];

const BeritaAdmin = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/berita`
      );
      setNews(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteNews = (news) => {
    setSelectedNews(news);
    onOpen();
  };

  const deleteNews = async () => {
    if (selectedNews) {
      try {
        console.log(`Menghapus berita dengan ID: ${selectedNews.id_berita}`);
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/berita/${selectedNews.id_berita}`
        );
        fetchNews();
        toast.success("Berita berhasil dihapus!");
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Terjadi kesalahan", error);
        toast.error("Terjadi kesalahan saat menghapus berita!");
      }
    }
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const actionButtons = [
    {
      icon: (
        <Tooltip content="Lihat Detail">
          <span className=" active:opacity-50">
            <Eye className="w-4 h-4 " />
          </span>
        </Tooltip>
      ),
    },
    {
      icon: (
        <Tooltip content="Edit">
          <span className=" active:opacity-50">
            <Tooltip content="Edit">
              <span className=" active:opacity-50">
                <Edit className="w-4 h-4 text-warning" />
              </span>
            </Tooltip>
          </span>
        </Tooltip>
      ),
      onClick: (news) => {
        navigate(`/admin/berita/edit/${news.id_berita}`, { state: news });
      },
    },
    {
      icon: (
        <Tooltip content="Hapus">
          <span className=" active:opacity-50">
            <Trash2 className="w-4 h-4 text-danger " />
          </span>
        </Tooltip>
      ),
      onClick: (news) => {
        confirmDeleteNews(news);
      },
    },
  ];

  const isi = news.map((item) => ({
    id: item.id_berita,
    tgl: formatDate(item.tgl),
    judul: item.judul,
    artikel: item.artikel,
    img_berita: item.img_berita,
    id_user: item.id_user,
    nama: item.nama,
    kunjungan: item.kunjungan,
    status: item.status,
    actions: item.id_berita, // Pass the entire item object to the action buttons
  }));

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <NavbarAdmin />
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/berita">Berita</BreadcrumbItem>
        </Breadcrumbs>
        <div className="flex gap-5 my-5">
          <div className="flex w-full bg-white rounded-lg">
            <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-200">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="p-4">
                <TableProps
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  filterKeys={["tgl", "judul", "artikel", "nama"]}
                  tambahKegiatanURL="/admin/berita/tambah"
                  actionButtons={actionButtons}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-white text-black",
          header: "border-b-[1px] border-[#292f46]/10",
          footer: "border-t-[1px] border-[#292f46]10",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Konfirmasi Hapus
              </ModalHeader>
              <ModalBody>
                <p>Apakah Anda yakin ingin menghapus berita ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={() => {
                    deleteNews();
                    onClose();
                  }}
                >
                  Hapus
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default BeritaAdmin;
