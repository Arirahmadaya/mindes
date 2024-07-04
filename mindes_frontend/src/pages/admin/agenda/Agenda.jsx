import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Edit, Trash2 } from "react-feather";
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

const Agenda = () => {
  const [agendatable, setAgenda] = useState([]);
  const [selectedAgenda, setSelectedAgenda] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    getAgenda();
  }, []);

  const getAgenda = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/agenda`
      );
      setAgenda(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteAgenda = (agenda) => {
    setSelectedAgenda(agenda);
    onOpen();
  };

  const deleteAgenda = async () => {
    if (selectedAgenda) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/agenda/${selectedAgenda.id}`
        );
        toast.success("Agenda berhasil dihapus!");
        getAgenda();
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
    "tgl",
    "jam",
    "tempat",
    "hari",
    "kegiatan",
    "deskripsi",
    "status",
    "actions",
  ];

  const columns = [
    { name: "ID", uid: "id" },
    { name: "Tanggal", uid: "tgl" },
    { name: "Waktu", uid: "jam" },
    { name: "Tempat", uid: "tempat" },
    { name: "Hari", uid: "hari" },
    { name: "Kegiatan", uid: "kegiatan" },
    { name: "Deskripsi", uid: "deskripsi" },
    { name: "Status", uid: "status" },
    { name: "Aksi", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Selesai", uid: "publish" },
    { name: "Proses", uid: "proses" },
    { name: "Gagal", uid: "gagal" },
  ];

  const actionButtons = [
    {
      icon: (
        <Tooltip content="Edit">
          <span className=" active:opacity-50">
            <Edit className="w-4 h-4 text-warning" />
          </span>
        </Tooltip>
      ),
      onClick: (item) => {
        navigate("/admin/agenda/edit", { state: item });
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
        confirmDeleteAgenda(item);
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

  const isi = agendatable.map((agenda) => ({
    id: agenda.id_agenda,
    tgl: formatDate(agenda.tgl),
    jam: agenda.jam,
    hari: agenda.hari,
    tempat: agenda.tempat,
    kegiatan: agenda.kegiatan,
    deskripsi: agenda.deskripsi,
    status: agenda.status,
  }));

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <NavbarAdmin />
        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/agenda">Agenda</BreadcrumbItem>
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
                    "tgl",
                    "jam",
                    "tempat",
                    "hari",
                    "kegiatan",
                    "deskripsi",
                  ]}
                  tambahKegiatanURL="/admin/agenda/tambah"
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
                <p>Apakah Anda yakin ingin menghapus agenda ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={deleteAgenda}
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

export default Agenda;
