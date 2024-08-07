import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2, Printer } from "react-feather";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";
import PrintLaporan from "./PrintLaporan"; 
import { Tooltip, Modal, useDisclosure, Button, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Realisasi = () => {
  const [realisasitable, setRealisasi] = useState([]);
  const [selectedRealisasi, setSelectedRealisasi] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const [printItem, setPrintItem] = useState(null);

  useEffect(() => {
    getRealisasi();
  }, []);

  const getRealisasi = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/realisasi`
      );
      setRealisasi(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteRealisasi = (realisasi) => {
    setSelectedRealisasi(realisasi);
    onOpen();
  };

  const deleteRealisasi = async () => {
    if (selectedRealisasi) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/realisasi/${selectedRealisasi.id}`
        );
        getRealisasi();
        toast.success("Realisasi berhasil dihapus!");
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Terjadi kesalahan", error);
        toast.error("Terjadi kesalahan saat menghapus realisasi.");
      }
    }
  };

  const statusColorMap = {
    publish: "success",
    proses: "secondary",
    gagal: "danger",
  };

  const INITIAL_VISIBLE_COLUMNS = [
    "id",
    "kode_kegiatan",
    "nama",
    "output",
    "kegiatan",
    "lokasi",
    "sumber",
    "pembiayaan",
    "status",
    "actions",
  ];

  const columns = [
    { name: "ID", uid: "id" },
    { name: "Kode", uid: "kode_kegiatan" },
    { name: "Bidang", uid: "nama" },
    { name: "Output", uid: "output" },
    { name: "Kegiatan", uid: "kegiatan" },
    { name: "Lokasi", uid: "lokasi" },
    { name: "Sumber", uid: "sumber" },
    { name: "Biaya", uid: "pembiayaan" },
    { name: "Status", uid: "status" },
    { name: "Aksi", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Publish", uid: "publish" },
    { name: "Proses", uid: "proses" },
    { name: "Gagal", uid: "gagal" },
  ];

  const actionButtons = [
    {
      icon: <Eye className="w-4 h-4 text-black" />,
      onClick: (item) => {
        navigate("/admin/realisasi/pencatatan", { state: item });
        console.log("View item:", item);
      },
    },
    {
      icon: (
        <Tooltip content="Edit">
          <span className=" active:opacity-50">
            <Edit className="w-4 h-4 text-warning" />
          </span>
        </Tooltip>
      ),
      onClick: (item) => {
        navigate(`/admin/realisasi/edit/${item.id}`, { state: item });
        console.log("Edit item:", item);
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
      onClick: (item) => {
        confirmDeleteRealisasi(item);
      },
    },
    {
      icon: <Printer className="w-4 h-4 text-blue" />,
      onClick: (item) => {
        setPrintItem(item);
      },
    },
  ];

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const isi = realisasitable.map((realisasi) => ({
    id: realisasi.id_realisasi,
    kode_kegiatan: realisasi.kode_kegiatan,
    nama: realisasi.nama,
    kegiatan: realisasi.kegiatan,
    output: realisasi.output,
    status: realisasi.status,
    lokasi: realisasi.lokasi,
    sumber: realisasi.sumber,
    pembiayaan: realisasi.pembiayaan,
    tgl_mulai: formatDate(realisasi.tgl_mulai),
    tgl_selesai: formatDate(realisasi.tgl_selesai),
  }));

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
                  filterKeys={[
                    "kode_kegiatan",
                    "nama",
                    "kegiatan",
                    "lokasi",
                    "sumber",
                    "pembiayaan",
                    "tgl_mulai",
                    "tgl_selesai",
                  ]}
                  tambahKegiatanURL="/admin/realisasi/tambah"
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
                <p>Apakah Anda yakin ingin menghapus realisasi ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={deleteRealisasi}
                >
                  Hapus
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <ToastContainer />
      {printItem && (
        <PrintLaporan item={printItem} onClose={() => setPrintItem(null)} />
      )}
    </div>
  );
};

export default Realisasi;
