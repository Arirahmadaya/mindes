import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";

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

const actionButtons = [
  {
    icon: <Eye className="w-4 h-4 text-black" />,
    onClick: (item) => {
      console.log("View item:", item);
      // Implementasikan logika tampilan di sini
    },
  },
  {
    icon: <Edit className="w-4 h-4 text-warning" />,
    onClick: (item) => {
      console.log("Edit item:", item);
      // Implementasikan logika edit di sini
    },
  },
  {
    icon: <Trash2 className="w-4 h-4 text-danger" />,
    onClick: (item) => {
      deleteAkun(item.id);
    },
  },
];

const Akuntansi = () => {
  const [akun, setAkun] = useState([]);

  useEffect(() => {
    fetchAkun();
  }, []);

  const fetchAkun = async () => {
    try {
      const response = await axios.get("http://localhost:3000/akun");
      setAkun(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const deleteAkun = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/akun/${id}`);
      fetchAkun(); // Refresh data setelah penghapusan
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const isi = akun.map((akun) => ({
    id: akun.id_akun,
    kode: akun.kode,
    uraian: akun.uraian,
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
          <BreadcrumbItem href="/admin/datamaster/akuntansi">
            Data Master
          </BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/akuntansi">
            Akuntansi
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="flex gap-5 my-5">
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-blue-200  ">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto "></div>
              <div className="p-4 ">
                <TableProps
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  filterKeys={["id", "kode", "uraian"]} // Filter keys ditambahkan di sini
                  tambahKegiatanURL={"/admin/realisasi/akuntansi/tambah"}
                  actionButtons={actionButtons}
                />
              </div>
            </div>

            <div className="flex justify-between "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Akuntansi;
