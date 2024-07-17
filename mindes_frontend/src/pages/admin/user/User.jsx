import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Eye, Edit, Trash2 } from "react-feather";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";
import { Tooltip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [usertable, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/user/${selectedUser.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(usertable.filter((item) => item.id_user !== selectedUser.id));
      toast.success("User berhasil dihapus!");
      onOpenChange(false);
    } catch (error) {
      console.error("Terjadi kesalahan saat menghapus user", error);
      toast.error("Terjadi kesalahan saat menghapus user.");
    }
  };

  const confirmDelete = (user) => {
    setSelectedUser(user);
    onOpenChange(true);
  };

  const INITIAL_VISIBLE_COLUMNS = ["id", "nama", "email", "roles", "actions"];

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAMA", uid: "nama", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "ROLE", uid: "roles", sortable: true },
    { name: "ACTIONS", uid: "actions" },
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
      onClick: (user) => {
        navigate(`/admin/user/edit/${user.id}`);
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
      onClick: confirmDelete,
    },
  ];

  const isi = usertable.map((user) => ({
    id: user.id_user,
    nama: user.username,
    email: user.email,
    roles: user.roles,
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
          <BreadcrumbItem href="/admin/user">User</BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex gap-5 my-5">
          <div className="flex w-full bg-white rounded-lg">
            <div className="w-full h-auto transition duration-300 ease-in-out bg-white rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-200">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto"></div>
              <div className="p-4">
                <TableProps
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  isi={isi}
                  filterKeys={["nama", "email"]}
                  tambahKegiatanURL="/admin/user/tambah"
                  actionButtons={actionButtons}
                  hideStatus={true} // Hide status for this page
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
                <p>Apakah Anda yakin ingin menghapus user ini?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>
                  Batal
                </Button>
                <Button
                  className="text-white shadow-lg bg-danger shadow-indigo-500/20"
                  onPress={handleDelete}
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

export default User;
