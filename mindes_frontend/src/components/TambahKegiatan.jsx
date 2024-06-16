import React, { useState } from "react";
import { Link } from "react-router-dom";

const TambahKegiatan = () => {
  // State untuk menyimpan pilihan bidang, status, dan sumber
  const [selectedBidang, setSelectedBidang] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSumber, setSelectedSumber] = useState("");

  // Opsi bidang yang tersedia
  const bidangOptions = [
    "- Pilih Bidang -",
    "Bidang 1",
    "Bidang 2",
    // Tambahkan opsi bidang lainnya sesuai kebutuhan
  ];

  // Opsi status yang tersedia
  const statusOptions = [
    "- Pilih Status -",
    "Status 1",
    "Status 2",
    // Tambahkan opsi status lainnya sesuai kebutuhan
  ];

  // Opsi sumber yang tersedia
  const sumberOptions = [
    "- Pilih Sumber -",
    "Sumber 1",
    "Sumber 2",
    // Tambahkan opsi sumber lainnya sesuai kebutuhan
  ];

  return (
    <div className="container mx-auto my-5 p-5 bg-white rounded-lg shadow-lg mt-20 ">
      <h2 className="text-3xl font-bold mb-5 text-left text-blue-600">REALISASI</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Pilih Bidang</label>
            <select
              value={selectedBidang}
              onChange={(e) => setSelectedBidang(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              {bidangOptions.map((bidang, index) => (
                <option key={index} value={bidang}>
                  {bidang}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Lokasi</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Lokasi"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">ID Kegiatan</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukkan ID Kegiatan"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Sumber</label>
            <select
              value={selectedSumber}
              onChange={(e) => setSelectedSumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              {sumberOptions.map((sumber, index) => (
                <option key={index} value={sumber}>
                  {sumber}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Kegiatan</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Kegiatan"
            ></textarea>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Biaya</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Biaya"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Output</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              placeholder="Masukkan Output Kegiatan"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Tanggal Mulai</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Status</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              {statusOptions.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">Tanggal Selesai</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Simpan
          </button>
          <Link to="/admin/realisasi" className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400">
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
};

export default TambahKegiatan;
