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
} from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["id", "bidang", "parent_id", "actions"];

const columns = [
  { name: "ID", uid: "id" },
  { name: "BIDANG", uid: "bidang" },
  { name: "SUB BIDANG", uid: "parent_id" },
  { name: "Aksi", uid: "actions" },
];

const statusOptions = [
  { name: "Publish", uid: "publish" },
  { name: "Proses", uid: "proses" },
  { name: "Gagal", uid: "gagal" },
];

const Bidang = () => {
  const [bidangData, setBidangData] = useState([]);
  const [selectedBidang, setSelectedBidang] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    fetchBidangData();
  }, []);

  const fetchBidangData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/bidang");
      setBidangData(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const confirmDeleteBidang = (bidang) => {
    setSelectedBidang(bidang);
    onOpen();
  };

  const deleteBidang = async () => {
    if (selectedBidang) {
      try {
        await axios.delete(`http://localhost:3000/bidang/${selectedBidang.id}`);
        fetchBidangData();
        toast.success("Bidang berhasil dihapus!");
        onOpenChange(false); // Close the modal
      } catch (error) {
        console.error("Terjadi kesalahan", error);
      }
    }
  };

  const actionButtons = [
    {
      icon: <Edit className="w-4 h-4 text-warning" />,
      onClick: (bidang) => {
        navigate(`/admin/datamaster/bidang/edit/${bidang.id}`, {
          state: bidang,
        });
        console.log("Edit bidang:", bidang);
      },
    },
    {
      icon: <Trash2 className="w-4 h-4 text-danger" />,
      onClick: (bidang) => {
        confirmDeleteBidang(bidang);
      },
    },
  ];

  const isi = bidangData.map((bidang) => ({
    id: bidang.id_bidang,
    bidang: bidang.nama,
    parent_id: bidang.parent_id,
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
          <BreadcrumbItem href="/admin/datamaster/bidang">Data Master</BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/bidang">Bidang</BreadcrumbItem>
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
                  filterKeys={["id", "bidang"]}
                  tambahBeritaURL="/admin/datamaster/bidang/tambah"
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
              <ModalHeader className="flex flex-col gap-1">Konfirmasi Hapus</ModalHeader>
              <ModalBody>
                <p>Apakah Anda yakin ingin menghapus bidang ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button className="bg-danger shadow-lg shadow-indigo-500/20 text-white" onPress={deleteBidang}>
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

export default Bidang;
