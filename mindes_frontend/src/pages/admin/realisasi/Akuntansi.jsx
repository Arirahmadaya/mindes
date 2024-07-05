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

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "kode", "uraian", "actions"];

const columns = [
  { name: "ID", uid: "id" },
  { name: "Kode", uid: "kode" },
  { name: "Uraian", uid: "uraian" },
  { name: "Aksi", uid: "actions" },
];

const statusOptions = [
  { name: "Publish", uid: "publish" },
  { name: "Proses", uid: "proses" },
  { name: "Gagal", uid: "gagal" },
];

const Akuntansi = () => {
  const [akun, setAkun] = useState([]);
  const [selectedAkun, setSelectedAkun] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    fetchAkun();
  }, []);

  const fetchAkun = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/akun`);
      setAkun(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteAkun = (akun) => {
    setSelectedAkun(akun);
    onOpen();
  };

  const deleteAkun = async () => {
    if (selectedAkun) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/akun/${selectedAkun.id}`
        );
        fetchAkun();
        toast.success("Akun berhasil dihapus!");
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Terjadi kesalahan", error);
      }
    }
  };

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
        navigate(`/admin/datamaster/akuntansi/edit/${item.id}`, {
          state: item,
        });
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
        confirmDeleteAkun(item);
      },
    },
  ];

  const isi = akun.map((akun) => ({
    id: akun.id_akun,
    kode: akun.kode,
    uraian: akun.uraian,
  }));

  return (
    <div className="flex flex-row w-screen h-screen overflow-y-auto bg-secondary-10">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/akuntansi">
            Data Master
          </BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/akuntansi">
            Akuntansi
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex gap-5 my-5">
          <div className="flex w-full bg-white rounded-lg ">
            <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-200 ">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto "></div>
              <div className="p-4 ">
                <TableProps
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  filterKeys={["id", "kode", "uraian"]}
                  tambahKegiatanURL={"/admin/datamaster/akuntansi/tambah"}
                  actionButtons={actionButtons}
                />
              </div>
            </div>

            <div className="flex justify-between "></div>
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
                <p>Apakah Anda yakin ingin menghapus akun ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={deleteAkun}
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

export default Akuntansi;
