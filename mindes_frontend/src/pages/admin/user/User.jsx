import React from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
// import Tablenih from "../../../components/Table";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

const statusColorMap = {
  active: "success",
  paused: "secondary",
  vacation: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "tgl",
  "nama",
  "umur",
  "role",
  "status",
  "actions",
];

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAMA", uid: "nama", sortable: true },
  { name: "UMUR", uid: "umur", sortable: true },
  { name: "ROLE", uid: "role", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "EMAIL", uid: "email" },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const isi = [
  {
    id: 1,
    nama: "Budi Santoso",
    role: "superadmin",
    status: "active",
    umur: "45",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024a",
    email: "budi.santoso@example.com",
  },
  {
    id: 2,
    nama: "Ani Yulianti",
    role: "admin",
    status: "paused",
    umur: "35",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b",
    email: "ani.yulianti@example.com",
  },
  {
    id: 3,
    nama: "Tono Sutrisno",
    role: "admin",
    status: "active",
    umur: "40",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702c",
    email: "tono.sutrisno@example.com",
  },
  {
    id: 4,
    nama: "Rina Wijaya",
    role: "umum",
    status: "vacation",
    umur: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "rina.wijaya@example.com",
  },
  {
    id: 5,
    nama: "Siti Nurhaliza",
    role: "umum",
    status: "active",
    umur: "32",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700e",
    email: "siti.nurhaliza@example.com",
  },
  {
    id: 6,
    nama: "Andi Saputra",
    role: "umum",
    status: "active",
    umur: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "andi.saputra@example.com",
  },
  {
    id: 7,
    nama: "Dewi Kartika",
    role: "umum",
    status: "paused",
    umur: "27",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007e",
    email: "dewi.kartika@example.com",
  },
  {
    id: 8,
    nama: "Eka Prasetyo",
    role: "umum",
    status: "active",
    umur: "31",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008f",
    email: "eka.prasetyo@example.com",
  },
  {
    id: 9,
    nama: "Farida Susanti",
    role: "umum",
    status: "vacation",
    umur: "33",
    avatar: "https://i.pravatar.cc/150?img=4",
    email: "farida.susanti@example.com",
  },
  {
    id: 10,
    nama: "Gunawan Hidayat",
    role: "umum",
    status: "active",
    umur: "35",
    avatar: "https://i.pravatar.cc/150?img=5",
    email: "gunawan.hidayat@example.com",
  },
  {
    id: 11,
    nama: "Hanafi Putra",
    role: "umum",
    status: "active",
    umur: "22",
    avatar: "https://i.pravatar.cc/150?img=8",
    email: "hanafi.putra@example.com",
  },
  {
    id: 12,
    nama: "Intan Maharani",
    role: "umum",
    status: "paused",
    umur: "28",
    avatar: "https://i.pravatar.cc/150?img=10",
    email: "intan.maharani@example.com",
  },
  {
    id: 13,
    nama: "Joko Susanto",
    role: "umum",
    status: "active",
    umur: "37",
    avatar: "https://i.pravatar.cc/150?img=12",
    email: "joko.susanto@example.com",
  },
];

const User = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
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
                  tambahBeritaURL={"/admin/user/tambah"}
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

export default User;
