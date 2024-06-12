import React from "react";
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

const INITIAL_VISIBLE_COLUMNS = ["id", "bidang", "sub_bidang"];

const columns = [
  { name: "ID", uid: "id" },
  { name: "BIDANG", uid: "bidang" },
  { name: "SUB BIDANG", uid: "sub_bidang" },
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
    bidang: "BIDANG PENYELENGGARAAN PEMERINTAHAN DESA",
    sub_bidang:
      "Penyelenggaraan Belanja Siltap, Tunjangan dan Operasional Pemerintah Desa",
  },
  {
    id: 2,
    bidang: "BIDANG PENYELENGGARAAN PEMERINTAHAN DESA",
    sub_bidang: "Penyediaan Sarana Prasarana Pemerintah Desa",
  },
  {
    id: 3,
    bidang: "BIDANG PENYELENGGARAAN PEMERINTAHAN DESA",
    sub_bidang:
      "Pengelolaan Administrasi Kependudukan, Pencatatan Sipil, Statistik dan Kearsipan",
  },
  {
    id: 4,
    bidang: "BIDANG PENYELENGGARAAN PEMERINTAHAN DESA",
    sub_bidang:
      "Penyelenggaraan Tata Praja Pemerintahan, Perencanaan, Keuangan dan Pelaporan",
  },
  {
    id: 5,
    bidang: "BIDANG PENANGGULANGAN BENCANA, DARURAT DAN MENDESAK DESA",
    sub_bidang: "Sub Bidang Penanggulangan Bencana",
  },
  {
    id: 6,
    bidang: "BIDANG PENANGGULANGAN BENCANA, DARURAT DAN MENDESAK DESA",
    sub_bidang: "Sub Bidang Keadaan Mendesak",
  },
  {
    id: 7,
    bidang: "BIDANG PEMBINAAN KEMASYARAKATAN",
    sub_bidang: "Sub Bidang Kebudayaan dan Keagamaan",
  },
  {
    id: 8,
    bidang: "BIDANG PEMBINAAN KEMASYARAKATAN",
    sub_bidang: "Sub Bidang Kepemudaan dan Olahraga",
  },
  {
    id: 9,
    bidang: "BIDANG PEMBINAAN KEMASYARAKATAN",
    sub_bidang: "Sub Bidang Kelembagaan Masyarakat",
  },
  {
    id: 10,
    bidang: "BIDANG PEMBERDAYAAN MASYARAKAT",
    sub_bidang: "Sub Bidang Pertanian dan Peternakan",
  },
  {
    id: 11,
    bidang: "BIDANG PEMBERDAYAAN MASYARAKAT",
    sub_bidang: "Sub Bidang Peningkatan Kapasitas Aparatur Desa",
  },
  {
    id: 12,
    bidang: "BIDANG PEMBERDAYAAN MASYARAKAT",
    sub_bidang:
      "Sub Bidang Pemberdayaan Perempuan, Perlindungan Anak dan Keluarga",
  },
  {
    id: 13,
    bidang: "BIDANG PELAKSANAAN PEMBANGUNAN DESA",
    sub_bidang: "Sub Bidang Pendidikan",
  },
  {
    id: 14,
    bidang: "BIDANG PELAKSANAAN PEMBANGUNAN DESA",
    sub_bidang: "Sub Bidang Kesehatan",
  },
  {
    id: 15,
    bidang: "BIDANG PELAKSANAAN PEMBANGUNAN DESA",
    sub_bidang: "Sub Bidang Pekerjaan Umum dan Penataan Ruang",
  },
  {
    id: 16,
    bidang: "BIDANG PELAKSANAAN PEMBANGUNAN DESA",
    sub_bidang: "Sub Bidang Kawasan Pemukiman",
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
const Bidang = () => {
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
          <BreadcrumbItem href="/admin/realisasi/bidang">Bidang</BreadcrumbItem>
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
                  tambahBeritaURL={"/admin/realisasi/bidang/tambah"}
      
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

export default Bidang;
