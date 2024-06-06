import React from "react";
import Sidebares from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
// import Tablenih from "../../../components/Table";
import TableProps from "../../../components/TableProps";

const statusColorMap = {
  publish: "success",
  proses: "secondary",
  gagal: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "id",
  "ktgberita",
  "actions",
];

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



const BeritaAdmin = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Berita</div>

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
                  tambahBeritaURL={"/admin/berita/tambah"}
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
