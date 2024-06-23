import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Penduduk = () => {
  const [penduduk, setPenduduk] = useState([]);
  const [selectedPenduduk, setSelectedPenduduk] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPenduduk();
  }, []);

  const fetchPenduduk = async () => {
    try {
      const response = await axios.get("http://data.mindes.my.id/penduduk");
      setPenduduk(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeletePenduduk = (penduduk) => {
    setSelectedPenduduk(penduduk);
    onOpen();
  };

  const deletePenduduk = async () => {
    if (selectedPenduduk) {
      try {
        await axios.delete(
          `http://data.mindes.my.id/penduduk/${selectedPenduduk.id}`
        );
        fetchPenduduk();
        toast.success("Penduduk berhasil dihapus!");
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Terjadi kesalahan", error);
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
    "tgl",
    "mutasi",
    "jumlah",
    "keterangan",
    "actions",
  ];

  const columns = [
    { name: "ID", uid: "id" },
    { name: "Tanggal", uid: "tgl" },
    { name: "Mutasi", uid: "mutasi" },
    { name: "Jumlah", uid: "jumlah" },
    { name: "Keterangan", uid: "keterangan" },
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
      onClick: (penduduk) => {
        console.log("View penduduk:", penduduk);
      },
    },
    {
      icon: <Edit className="w-4 h-4 text-warning" />,
      onClick: (penduduk) => {
        navigate(`/admin/penduduk/${penduduk.id}`, { state: penduduk });
        console.log("Edit penduduk:", penduduk);
      },
    },
    {
      icon: <Trash2 className="w-4 h-4 text-danger" />,
      onClick: (penduduk) => {
        confirmDeletePenduduk(penduduk);
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

  const isi = penduduk.map((item) => ({
    id: item.id_penduduk,
    tgl: formatDate(item.tgl),
    mutasi: item.mutasi,
    jumlah: item.jumlah,
    keterangan: item.keterangan,
  }));

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/penduduk">Penduduk</BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex gap-5 my-5">
          <div className="flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-blue-200">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="p-4">
                <TableProps
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  filterKeys={["tgl", "mutasi", "keterangan"]}
                  tambahKegiatanURL="/admin/penduduk/mutasi"
                  actionButtons={actionButtons}
                />
              </div>
            </div>
            <div className="flex justify-between"></div>
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
                <p>Apakah Anda yakin ingin menghapus penduduk ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="bg-danger shadow-lg shadow-indigo-500/20 text-white"
                  onPress={deletePenduduk}
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

export default Penduduk;
