import React from "react";
import { Link } from "react-router-dom";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";
import TableProps from "../../../components/TableProps";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "kode",
  "kegiatan",
  "lokasi",
  "sub_bidang",
  "biaya",
  "sumber",
  "status",
  "actions",
];

const columns = [
  { name: "ID", uid: "id" },
  { name: "Kode", uid: "kode" },
  { name: "Bidang", uid: "sub_bidang" },
  { name: "Kegiatan", uid: "kegiatan" },
  { name: "Lokasi", uid: "lokasi" },
  { name: "Sumber", uid: "sumber" },
  { name: "Biaya", uid: "biaya" },
  { name: "Status", uid: "status" },
  { name: "Aksi", uid: "actions" },
];

const statusOptions = [
  { name: "Publish", uid: "publish" },
  { name: "Proses", uid: "proses" },
  { name: "Gagal", uid: "gagal" },
];

const isi = [
  {
    id: 1,
    kode: "1101",
    sub_bidang: "BIDANG PENANGGULANGAN BENCANA, DARURAT DAN MENDESAK DESA",
    kegiatan: "Pembangunan Waduk Desa Kalinyamat Kulon",
    lokasi: "Bantaran Kali Kemiri",
    sumber: "ADD",
    biaya: "Rp. 1.000.000.000",
    status: "Proses",
  },
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
      console.log("Delete item:", item);
      // Implementasikan logika hapus di sini
    },
  },
];

const Realisasi = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
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
                  tambahBeritaURL={"/admin/realisasi/tambah"}
                  showPrintAction={true}
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

export default Realisasi;
