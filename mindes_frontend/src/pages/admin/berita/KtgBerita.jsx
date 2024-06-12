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

const INITIAL_VISIBLE_COLUMNS = ["id", "ktgberita", "actions"];

const columns = [
  { name: "ID", uid: "id" },
  { name: "Kategori", uid: "ktgberita" },
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
    ktgberita: "Pengumuman Desa",
  },
  {
    id: 2,
    ktgberita: "Pembangunan Infrastruktur Desa",
  },
  {
    id: 3,
    ktgberita: "Program Sosial dan Kesejahteraan Masyarakat Desa",
  },
  {
    id: 4,
    ktgberita: "Kegiatan Budaya dan Tradisi Desa",
  },
  {
    id: 5,
    ktgberita: "Kegiatan Ekonomi Masyarakat Desa",
  },
  {
    id: 6,
    ktgberita: "Pendidikan dan Pelatihan di Desa",
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
          <BreadcrumbItem href="/admin/berita">Berita</BreadcrumbItem>
          <BreadcrumbItem href="/admin/ktgberita">Kategori Berita</BreadcrumbItem>
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
                  tambahBeritaURL={"/admin/berita/kategori/tambah"}
                  
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
