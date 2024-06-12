import React from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
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

const isi = [
  {
    id: 1,
    tgl: "2024-06-01",
    mutasi: "Lahir",
    jumlah: 1,
    keterangan: "Lahir di RT 1 RW 2",
  },
  {
    id: 2,
    tgl: "2024-06-02",
    mutasi: "Meninggal",
    jumlah: 1,
    keterangan: "Meninggal di RT 3 RW 4",
  },
  {
    id: 3,
    tgl: "2024-06-03",
    mutasi: "Datang",
    jumlah: 1,
    keterangan: "Datang dari Kecamatan X",
  },
  {
    id: 4,
    tgl: "2024-06-04",
    mutasi: "Pindah",
    jumlah: 1,
    keterangan: "Pindah ke Desa Y",
  },
  {
    id: 5,
    tgl: "2024-06-05",
    mutasi: "Lahir",
    jumlah: 1,
    keterangan: "Lahir di RT 2 RW 3",
  },
  {
    id: 6,
    tgl: "2024-06-06",
    mutasi: "Meninggal",
    jumlah: 1,
    keterangan: "Meninggal di RT 4 RW 5",
  },
  {
    id: 7,
    tgl: "2024-06-07",
    mutasi: "Datang",
    jumlah: 1,
    keterangan: "Datang dari Kota Z",
  },
  {
    id: 8,
    tgl: "2024-06-08",
    mutasi: "Pindah",
    jumlah: 1,
    keterangan: "Pindah ke Kecamatan A",
  },
  {
    id: 9,
    tgl: "2024-06-09",
    mutasi: "Lahir",
    jumlah: 1,
    keterangan: "Lahir di RT 5 RW 6",
  },
  {
    id: 10,
    tgl: "2024-06-10",
    mutasi: "Meninggal",
    jumlah: 1,
    keterangan: "Meninggal di RT 6 RW 7",
  },
  {
    id: 11,
    tgl: "2024-06-11",
    mutasi: "Datang",
    jumlah: 1,
    keterangan: "Datang dari Desa B",
  },
  {
    id: 12,
    tgl: "2024-06-12",
    mutasi: "Pindah",
    jumlah: 1,
    keterangan: "Pindah ke Kota C",
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

const BeritaAdmin = () => {
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
          <div className=" flex w-full bg-white rounded-lg">
            <div className="bg-white rounded-lg w-full h-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-blue-200  ">
              <div className="bg-blue-100/20 rounded-b-[20px] w-auto "></div>
              <div className="p-4 ">
                {/* <Tablenih /> */}
                <TableProps
                  statusColorMap={statusColorMap}
                  INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                  columns={columns}
                  statusOptions={statusOptions}
                  isi={isi}
                  tambahBeritaURL={"/admin/penduduk/mutasi"}
                 
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

export default BeritaAdmin;
