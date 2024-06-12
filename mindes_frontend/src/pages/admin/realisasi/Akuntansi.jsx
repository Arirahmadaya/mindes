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

const isi = [
  {
    id: 1,
    kode: 534,
    uraian: "Belanja Modal Gedung, Bangunan dan Taman",
  },
  {
    id: 2,
    kode: 533,
    uraian: "Belanja Modal Kendaraan",
  },
  {
    id: 3,
    kode: 532,
    uraian: "Belanja Modal Pengadaan Peralatan, Mesin dan Alat Berat",
  },
  {
    id: 4,
    kode: 525,
    uraian: "Belanja Operasional Perkantoran",
  },
  {
    id: 5,
    kode: 524,
    uraian: "Belanja Jasa Sewa",
  },
  {
    id: 6,
    kode: 522,
    uraian: "Belanja Jasa Honorarium",
  },
  {
    id: 7,
    kode: 521,
    uraian: "Belanja Barang Perlengkapan",
  },
  {
    id: 8,
    kode: 514,
    uraian: "Tunjangan BPD",
  },
  {
    id: 9,
    kode: 513,
    uraian: "Jaminan Sosial Kepala Desa dan Perangkat Desa",
  },
  {
    id: 10,
    kode: 512,
    uraian: "Penghasilan Tetap dan Tunjangan Perangkat Desa",
  },
  {
    id: 11,
    kode: 511,
    uraian: "Penghasilan Tetap dan Tunjangan Kepala Desa",
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

const Agenda = () => {
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
          <BreadcrumbItem href="/admin/realisasi/akuntansi">
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
                  tambahBeritaURL={"/admin/realisasi/akuntansi/tambah"}
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

export default Agenda;
