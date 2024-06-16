import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2, Printer } from "react-feather";
import TableProps from "../../../components/TableProps";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "@nextui-org/react";

// Komponen PrintModal
const PrintModal = ({ item, onClose }) => {
  const [pencatatanData, setPencatatanData] = useState([]);

  useEffect(() => {
    if (item) {
      getPencatatanData(item.id_realisasi);
    }
  }, [item]);

  const getPencatatanData = async (id_realisasi) => {
    try {
      const response = await axios.get(`http://localhost:3000/pencatatan/${id_realisasi}`);
      setPencatatanData(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  return (
    <Modal
      closeButton
      aria-labelledby="modal-title"
      open={!!item}
      onClose={onClose}
    >
      <Modal.Header>
        <h4>Laporan Kegiatan</h4>
      </Modal.Header>
      <Modal.Body>
        {item && (
          <div>
            <p>ID: {item.id}</p>
            <p>Nama: {item.nama}</p>
            <p>Kegiatan: {item.kegiatan}</p>
            <p>Lokasi: {item.lokasi}</p>
            <p>Sumber: {item.sumber}</p>
            <p>Biaya: {item.pembiayaan}</p>
            <p>Status: {item.status}</p>
            <p>Tgl Mulai: {item.tgl_mulai}</p>
            <p>Tgl Selesai: {item.tgl_selesai}</p>
            <h5>Pencatatan:</h5>
            {pencatatanData.map((pencatatan, index) => (
              <div key={index}>
                <p>No: {pencatatan.no}</p>
                <p>Kode: {pencatatan.kode}</p>
                <p>Nominal: {pencatatan.nominal}</p>
                <p>Total: {pencatatan.total}</p>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat onClick={() => window.print()}>
          Print
        </Button>
        <Button auto flat onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

// Komponen Realisasi
const Realisasi = () => {
  const [realisasitable, setRealisasi] = useState([]);
  const [printItem, setPrintItem] = useState(null);
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
    {
      icon: <Printer className="w-4 h-4 text-blue" />,
      onClick: (item) => {
        setPrintItem(item);
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
                  tambahBeritaURL={"/admin/realisasi/tambah"}
                  actionButtons={actionButtons}
                />
              </div>
            </div>
            <div className="flex justify-between"></div>
          </div>
        </div>
      </div>
      {printItem && (
        <PrintModal item={printItem} onClose={() => setPrintItem(null)} />
      )}
    </div>
  );
};

export default Realisasi;
