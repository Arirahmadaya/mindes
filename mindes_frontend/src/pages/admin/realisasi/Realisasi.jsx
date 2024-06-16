
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";

const Realisasi = () => {
  const [realisasitable, setRealisasi] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getRealisasi();
  }, []);

  const getRealisasi = async () => {
    try {
      const response = await axios.get("http://localhost:3000/realisasi");
      setRealisasi(response.data.data);
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
    "id",
    "nama",
    "tgl_mulai",
    "kode_kegiatan",
    "kegiatan",
    "lokasi",
    "pembiayaan",
    "status",
    "actions",
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
    status: "proses",  // Make sure status matches the keys in statusColorMap
  },
];

const Realisasi = () => {
  const navigate = useNavigate();  // Ensure navigate is initialized

  const columns = [
    { name: "ID", uid: "id" },
    { name: "Kode", uid: "kode_kegiatan" },
    { name: "Bidang", uid: "nama" },
    { name: "Output", uid: "output" },
    { name: "Kegiatan", uid: "kegiatan" },
    { name: "Lokasi", uid: "lokasi" },
    { name: "Sumber", uid: "sumber" },
    { name: "Biaya", uid: "pembiayaan" },
    { name: "Status", uid: "status" },
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

        navigate("/admin/realisasi/pencatatan", { state: item });

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

  const isi = realisasitable.map((realisasi) => ({
    id: realisasi.id_realisasi,
    kode_kegiatan: realisasi.kode_kegiatan,
    nama: realisasi.nama,
    kegiatan: realisasi.kegiatan,
    output: realisasi.output,
    status: realisasi.status,
    lokasi: realisasi.lokasi,
    sumber: realisasi.sumber,
    pembiayaan: realisasi.pembiayaan,
    tgl_mulai: realisasi.tgl_mulai,
    tgl_selesai: realisasi.tgl_selesai,
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
          <BreadcrumbItem href="/admin/realisasi">Realisasi</BreadcrumbItem>
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
                  tambahKegiatanURL="/admin/realisasi/tambah"
                  showPrintAction={true}
                  actionButtons={actionButtons}
                />
              </div>
            </div>

            <div className="flex justify-between"></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Realisasi;
