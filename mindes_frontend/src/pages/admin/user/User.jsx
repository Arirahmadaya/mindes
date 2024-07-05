import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Eye, Edit, Trash2 } from "react-feather";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";

import { Tooltip } from "@nextui-org/react";

const User = () => {
  const [usertable, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/user`);
      setUser(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const statusColorMap = {
    active: "success",
    paused: "secondary",
    vacation: "danger",
  };

  const INITIAL_VISIBLE_COLUMNS = [
    "id",
    "nama",
    "email",
    "roles",
    "password",
    "actions",
  ];

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAMA", uid: "nama", sortable: true },
    { name: "EMAIL", uid: "email" },
    { name: "ROLE", uid: "roles", sortable: true },
    { name: "PASSWORD", uid: "password", sortable: true },
    { name: "ACTIONS", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Active", uid: "active" },
    { name: "Paused", uid: "paused" },
    { name: "Cuti", uid: "vacation" },
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
      onClick: (user) => {
        // Implement your logic for deleting here
      },
    },
  ];

  const isi = usertable.map((user) => ({
    id: user.id_user,
    nama: user.username,
    email: user.email,
    roles: user.roles,
    password: user.password,
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
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  filterKeys={["nama", "email"]}
                  actionButtons={actionButtons}
                  tambahKegiatanURL="/admin/user/tambah"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
