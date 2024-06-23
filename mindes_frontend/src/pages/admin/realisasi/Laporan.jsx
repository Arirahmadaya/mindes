import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import NavbarAdmin from "../../../components/NavbarAdmin";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

import {
  DocumentArrowUpIcon,
  ArrowPathIcon,
  PrinterIcon,
} from "@heroicons/react/20/solid";

const Laporan = () => {
  const [filter, setFilter] = useState("");
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [filterType, setFilterType] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setShowFilterForm(false); // Reset form visibility when filter changes
  };

  const handleProsesClick = () => {
    if (filter === "bulan" || filter === "tanggal" || filter === "tahun") {
      setFilterType(filter);
      setShowFilterForm(true);
    }
  };

  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebar />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <Breadcrumbs className="my-5">
          <BreadcrumbItem href="/admin/beranda">Beranda</BreadcrumbItem>
          <BreadcrumbItem href="/admin/laporan">Realisasi</BreadcrumbItem>
          <BreadcrumbItem href="/admin/laporan">
            Laporan
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="my-5 text-heading-6 font-semibold">
          Laporan Realisasi
        </div>
        <div className="flex gap-5 my-5">
          <div className="flex w-full bg-white rounded-lg shadow-md p-5">
            <div className="w-full">
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="filter"
                >
                  Jenis Filter Laporan
                </label>
                <select
                  id="filter"
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  value={filter}
                  onChange={handleFilterChange}
                >
                  <option value="">-Pilih Filter Laporan-</option>
                  <option value="tanggal">Tanggal</option>
                  <option value="bulan">Bulan</option>
                  <option value="tahun">Tahun</option>
                </select>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                  onClick={handleProsesClick}
                >
                  <span>Proses</span>
                  <DocumentArrowUpIcon className="w-5 h-5" />
                </button>

                <button
                  className="flex items-center gap-2 px-4 py-2 text-white transition duration-300 bg-red-500 rounded-lg hover:bg-red-600"
                  onClick={() => {
                    setFilter("");
                    setShowFilterForm(false);
                  }}
                >
                  <span>Reset</span>
                  <ArrowPathIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {showFilterForm && filterType === "bulan" && (
          <div className="my-5">
            <div className="flex w-full bg-white rounded-lg shadow-md p-5">
              <div className="w-full">
                <h2 className="mb-4 text-lg font-semibold">
                  Filter Berdasarkan Bulan
                </h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="tahun"
                  >
                    Pilih Tahun
                  </label>
                  <select
                    id="tahun"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">-PILIH-</option>
                    {/* Tambahkan opsi tahun di sini */}
                  </select>
                </div>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="dariBulan"
                    >
                      Dari Bulan
                    </label>
                    <select
                      id="dariBulan"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">-PILIH-</option>
                      <option value="01">Januari</option>
                      <option value="02">Februari</option>
                      <option value="03">Maret</option>
                      <option value="04">April</option>
                      <option value="05">Mei</option>
                      <option value="06">Juni</option>
                      <option value="07">Juli</option>
                      <option value="08">Agustus</option>
                      <option value="09">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </select>
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="sampaiBulan"
                    >
                      Sampai Bulan
                    </label>
                    <select
                      id="sampaiBulan"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">-PILIH-</option>
                      <option value="01">Januari</option>
                      <option value="02">Februari</option>
                      <option value="03">Maret</option>
                      <option value="04">April</option>
                      <option value="05">Mei</option>
                      <option value="06">Juni</option>
                      <option value="07">Juli</option>
                      <option value="08">Agustus</option>
                      <option value="09">September</option>
                      <option value="10">Oktober</option>
                      <option value="11">November</option>
                      <option value="12">Desember</option>
                    </select>
                  </div>
                </div>
                <button className="flex gap-2 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                  <span>Print</span>
                  <PrinterIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
        {showFilterForm && filterType === "tanggal" && (
          <div className="my-5">
            <div className="flex w-full bg-white rounded-lg shadow-md p-5">
              <div className="w-full">
                <h2 className="mb-4 text-lg font-semibold">
                  Filter Berdasarkan Tanggal
                </h2>
                <div className="flex space-x-4 mb-4">
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="dariTanggal"
                    >
                      Dari Tanggal
                    </label>
                    <input
                      type="date"
                      id="dariTanggal"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="sampaiTanggal"
                    >
                      Sampai Tanggal
                    </label>
                    <input
                      type="date"
                      id="sampaiTanggal"
                      className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <button className="flex items-center gap-2 transition duration-300 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
                  <span>Print</span>
                  <PrinterIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
        {showFilterForm && filterType === "tahun" && (
          <div className="my-5">
            <div className="flex w-full bg-white rounded-lg shadow-md p-5">
              <div className="w-full">
                <h2 className="mb-4 text-lg font-semibold">
                  Filter Berdasarkan Tahun
                </h2>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor="pilihTahun"
                  >
                    Pilih Tahun
                  </label>
                  <select
                    id="pilihTahun"
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">-PILIH-</option>
                    {/* Tambahkan opsi tahun di sini */}
                  </select>
                </div>
                <button className="flex gap-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
                  <span>Print</span>
                  <PrinterIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Laporan;
