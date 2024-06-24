import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ArrowUturnLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";

const PrintModal = ({ item, onClose }) => {
  const [pencatatanData, setPencatatanData] = useState([]);
  const printContentRef = useRef(null);

  useEffect(() => {
    if (item) {
      getPencatatanData(item.id_realisasi);
    }
  }, [item]);

  const getPencatatanData = async (id_realisasi) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/pencatatan/${id_realisasi}`
      );
      console.log("Data Pencatatan Diterima:", response.data.data);
      setPencatatanData(response.data.data[id_realisasi] || []);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current,
    onAfterPrint: () => window.location.reload(),
  });

  if (!item) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-4 lg:p-8 relative">
        <section
          className="min-h-[85vh] p-4 lg:p-8 max-w-4xl mx-auto"
          ref={printContentRef}
        >
          <div
            key={item.id}
            className="bg-white rounded-md p-3 lg:p-8 relative print:mt-12"
          >
            <div className="relative print:mt-12">
              <h4 className="text-lg font-semibold mb-8 mt-12 lg:mt-0 print:text-3xl">
                Laporan Kegiatan
              </h4>
            </div>
            <div className="info p-4 border border-zinc-200 rounded-md">
              <p className="mb-4">
                <span className="font-bold">ID:</span>{" "}
                <span className="text-zinc-500 text-sm">{item.id}</span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Nama:</span>{" "}
                <span className="text-zinc-500 text-sm capitalize">
                  {item.nama}
                </span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Kegiatan:</span>{" "}
                <span className="text-zinc-500 text-sm capitalize">
                  {item.kegiatan}
                </span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Lokasi:</span>{" "}
                <span className="text-zinc-500 text-sm capitalize">
                  {item.lokasi}
                </span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Sumber:</span>{" "}
                <span className="text-zinc-500 text-sm capitalize">
                  {item.sumber}
                </span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Biaya:</span>{" "}
                <span className="text-zinc-500 text-sm">{item.pembiayaan}</span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Status:</span>{" "}
                <span className="text-zinc-500 text-sm capitalize">
                  {item.status}
                </span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Tgl Mulai:</span>{" "}
                <span className="text-zinc-500 text-sm">{item.tgl_mulai}</span>
              </p>
              <p className="mb-4">
                <span className="font-bold">Tgl Selesai:</span>{" "}
                <span className="text-zinc-500 text-sm">
                  {item.tgl_selesai}
                </span>
              </p>
              <h5 className="font-semibold mt-2">Pencatatan:</h5>
              {pencatatanData.length > 0 ? (
                pencatatanData.map((pencatatan, index) => (
                  <div key={index} className="border-t mt-2 pt-2">
                    <p>
                      <span className="font-bold">No:</span> {pencatatan.no}
                    </p>
                    <p>
                      <span className="font-bold">Kode:</span> {pencatatan.kode}
                    </p>
                    <p>
                      <span className="font-bold">Nominal:</span>{" "}
                      {pencatatan.nominal}
                    </p>
                    <p>
                      <span className="font-bold">Total:</span>{" "}
                      {pencatatan.total}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-zinc-500 text-sm">Data tidak tersedia</p>
              )}
            </div>
            <div className="print:hidden py-2 flex justify-between">
              <button
                onClick={handlePrint}
                className="flex gap-2 bg-green-500 hover:bg-green-700 font-semibold text-white py-2 px-4 rounded-md mb-3 w-full lg:w-fit my-6 max-w-sm"
              >
                <span>Print Laporan</span>
                <PrinterIcon className="w-5 h-5" />
              </button>
              <button
                className="flex gap-2 bg-danger-600 px-6 py-2 text-white border-cyan-500 font-bold rounded-md mb-3 w-full lg:w-fit my-6 max-w-sm"
                onClick={onClose}
              >
                <span>Batal</span>
                <ArrowUturnLeftIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrintModal;
