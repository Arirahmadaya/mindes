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

const KtgBerita = () => {
  const [kategori, setKategori] = useState([]);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    fetchKategori();
  }, []);

  const fetchKategori = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/kategori`
      );
      setKategori(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteKategori = (kategori) => {
    setSelectedKategori(kategori);
    onOpen();
  };

  const deleteKategori = async () => {
    if (selectedKategori) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_API_URL}/kategori/${selectedKategori.id}`
        );
        fetchKategori();
        toast.success("Kategori berhasil dihapus!");
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

  const INITIAL_VISIBLE_COLUMNS = ["id", "nama", "actions"];

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Kategori", uid: "nama" },
    { name: "Aksi", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Publish", uid: "publish" },
    { name: "Proses", uid: "proses" },
    { name: "Gagal", uid: "gagal" },
  ];

  const actionButtons = [
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
      onClick: (kategori) => {
        navigate(`/admin/datamaster/kategori/edit/${kategori.id}`, {
          state: kategori,
        });
        console.log("Edit kategori:", kategori);
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
      onClick: (kategori) => {
        confirmDeleteKategori(kategori);
      },
    },
  ];

  const isi = kategori.map((kategori) => ({
    id: kategori.id_kategori,
    nama: kategori.nama,
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
          <BreadcrumbItem href="/admin/datamaster/ktgberita">
            Data Master
          </BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/ktgberita">
            Kategori Berita
          </BreadcrumbItem>
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
                  filterKeys={["id", "nama"]}
                  tambahKegiatanURL="/admin/datamaster/kategori/tambah"
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
                <p>Apakah Anda yakin ingin menghapus kategori ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={deleteKategori}
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

export default KtgBerita;
