import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";

import { useNavigate } from "react-router-dom";

import { format } from "date-fns"; // Import date-fns


const Agenda = () => {
  const [agendatable, setAgenda] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAgenda();
  }, []);

  const getAgenda = async () => {
    try {
      const response = await axios.get("http://localhost:3000/agenda");
      setAgenda(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const deleteAgenda = async (id) => {
    console.log("Deleting category with id:", id); // Debugging log
    try {
      await axios.delete(`http://localhost:3000/agenda/${id}`);
      getAgenda();
    } catch (error) {
      console.error("Terjadi kesalahan", error);
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
      icon: <Eye className="w-4 h-4 text-black" />,
      onClick: (item) => {
        console.log("View item:", item);
        // Implement view logic here
      },
    },
    {
      icon: <Edit className="w-4 h-4 text-warning" />,
      onClick: (item) => {
        navigate("/admin/agenda/edit", { state: item });
        console.log("Edit item:", item);
      },
    },
    {
      icon: <Trash2 className="w-4 h-4 text-danger" />,
      onClick: (item) => {
        deleteAgenda(item.id);
      },
    },
  ];


  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, '0');
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
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <NavbarAdmin />

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/agenda">Agenda</BreadcrumbItem>
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
                  tambahKegiatanURL="/admin/agenda/tambah"
                  actionButtons={actionButtons}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
