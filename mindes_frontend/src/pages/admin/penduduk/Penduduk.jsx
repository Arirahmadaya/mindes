import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Eye, Edit, Trash2 } from "react-feather";
import { useNavigate } from "react-router-dom";

const Penduduk = () => {
  const [penduduk, setPenduduk] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPenduduk();
  }, []);

  const fetchPenduduk = async () => {
    try {
      const response = await axios.get("http://localhost:3000/penduduk");
      setPenduduk(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const deletePenduduk = async (id) => {
    console.log("Deleting mutasi with id:", id); // Debugging log
    try {
      await axios.delete(`http://localhost:3000/penduduk/${id}`);
      fetchPenduduk();
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

  const actionButtons = [
    {
      icon: <Eye className="w-4 h-4 text-black" />,
      onClick: (penduduk) => {
        console.log("View penduduk:", penduduk);
      },
    },
    {
      icon: <Edit className="w-4 h-4 text-warning" />,
      onClick: (penduduk) => {
        navigate(`/admin/penduduk/${penduduk.id}`, { state: penduduk });
        console.log("Edit penduduk:", penduduk);
      },
    },
    {
      icon: <Trash2 className="w-4 h-4 text-danger" />,
      onClick: (penduduk) => {
        deletePenduduk(penduduk.id);
        console.log("Delete penduduk:", penduduk);
      },
    },
  ];

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const isi = penduduk.map((item) => ({
    id: item.id_penduduk,
    tgl: formatDate(item.tgl),
    mutasi: item.mutasi,
    jumlah: item.jumlah,
    keterangan: item.keterangan,
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
          <BreadcrumbItem href="/admin/penduduk">Penduduk</BreadcrumbItem>
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
                  filterKeys={["tgl", "mutasi", "keterangan"]}
                  tambahKegiatanURL="/admin/penduduk/mutasi"
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

export default Penduduk;
