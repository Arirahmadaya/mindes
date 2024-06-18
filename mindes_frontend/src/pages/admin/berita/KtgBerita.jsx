import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import TableProps from "../../../components/TableProps";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Edit, Trash2 } from "react-feather";
import { useNavigate } from "react-router-dom";

const KtgBerita = () => {
  const [kategori, setKategori] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchKategori();
  }, []);

  const fetchKategori = async () => {
    try {
      const response = await axios.get("http://localhost:3000/kategori");
      setKategori(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const deleteKategori = async (id) => {
    console.log("Deleting category with id:", id); // Debugging log
    try {
      await axios.delete(`http://localhost:3000/kategori/${id}`);
      fetchKategori();
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const statusColorMap = {
    publish: "success",
    proses: "secondary",
    gagal: "danger",
  };

  const INITIAL_VISIBLE_COLUMNS = ["id", "nama", "actions"];

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "Kategori", uid: "nama" },
    { name: "Aksi", uid: "actions" },
  ];

  const statusOptions = [
    { name: "Publish", uid: "publish" },
    { name: "Proses", uid: "proses" },
    { name: "Gagal", uid: "gagal" },
  ];

  const actionButtons = [
    {
      icon: <Edit className="w-4 h-4 text-warning" />,
      onClick: (kategori) => {
        navigate("/admin/berita/kategori/${id_kategori}", { state: kategori });
        console.log("Edit kategori:", kategori);
      },
    },
    {
      icon: <Trash2 className="w-4 h-4 text-danger" />,
      onClick: (kategori) => {
        deleteKategori(kategori.id);
      },
    },
  ];

  //isi sesuai dengan struktur table
  const isi = kategori.map((kategori) => ({
    id: kategori.id_kategori,
    nama: kategori.nama,
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

          <BreadcrumbItem href="/admin/datamaster/ktgberita">Data Master</BreadcrumbItem>
          <BreadcrumbItem href="/admin/datamaster/ktgberita">Kategori Berita</BreadcrumbItem>

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
                  tambahKegiatanURL="/admin/berita/kategori/tambah"
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

export default KtgBerita;
