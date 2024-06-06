import React from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
// import Tablenih from "../../../components/Table";
import TableProps from "../../../components/TableProps";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "tgl",
  "agenda",
  "tempat",
  "status",
  "actions",
];

const columns = [
  { name: "ID", uid: "id" },
  { name: "Tanggal", uid: "tgl" },
  { name: "Agenda", uid: "agenda" },
  { name: "Tempat", uid: "tempat" },
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
    id: 6,
    tgl: "10 Juni 2024",
    agenda: "Berita 6",
    tempat: "Masyarakat",
    status: "publish",
  },
  {
    id: 5,
    tgl: "5 Juni 2024",
    agenda: "berita 5",
    tempat: "Masyarakat",
    status: "publish",
  },
  {
    id: 4,
    tgl: "3 Juni 2024",
    agenda: "berita 4",
    tempat: "Masyarakat",
    status: "publish",
  },
  {
    id: 3,
    tgl: "2 Juni 2024",
    agenda: "Posyandu Melati 2",
    tempat: "Masyarakat",
    status: "publish",
  },
  {
    id: 2,
    tgl: "29 Mei 2024",
    agenda: "Pencairan Dana Operasional RT/RW",
    tempat: "Masyarakat",
    status: "publish",
  },
  {
    id: 1,
    tgl: "28 Mei 2024",
    agenda: "Pencairan Dana Operasional RT/RW",
    tempat: "Masyarakat",
    status: "publish",
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
          <BreadcrumbItem href="/admin/agenda">Agenda</BreadcrumbItem>
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
                  tambahBeritaURL={"/admin/agenda/tambah"}
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
