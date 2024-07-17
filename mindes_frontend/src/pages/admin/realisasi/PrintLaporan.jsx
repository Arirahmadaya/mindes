import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ArrowUturnLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";

const PrintLaporan = ({ item, onClose }) => {
  const [pencatatanData, setPencatatanData] = useState([]);
  const [detailData, setDetailData] = useState({});
  const printContentRef = useRef(null);

  useEffect(() => {
    if (item && item.id_realisasi) {
      getPencatatanData(item.id_realisasi);
    }
  }, [item]);

  const getPencatatanData = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/pencatatan/${id}`
      );
      setPencatatanData(response.data.data);

      if (response.data.data.length > 0) {
        const detail = response.data.data[0];
        setDetailData({
          bidang: detail.bidang,
          sub_bidang: detail.sub_bidang,
          kegiatan: detail.kegiatan,
          tgl_mulai: detail.tgl_mulai,
          tgl_selesai: detail.tgl_selesai,
          output: detail.output,
        });
      }
    } catch (error) {
      console.log("Terjadi kesalahan", error);
    }
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handlePrint = useReactToPrint({
    content: () => printContentRef.current,
    onAfterPrint: () => console.log("Print berhasil!"),
  });

  if (!item) return null;

  const total = pencatatanData.reduce((sum, item) => sum + item.subtotal, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-4 relative">
        <section
          className="min-h-[85vh] p-4 lg:p-8 max-w-4xl mx-auto"
          ref={printContentRef}
        >
          <div className="relative flex justify-center items-center gap-7 -ml-12 mb-2">
            <div>
              <img
                src="/img/kota_tegal.png"
                alt="Logo Desa"
                className=" h-[70px] w-[70px]"
              />
            </div>
            <div>
              <h4 className="text-caption-1 font-semibold text-center">
                PEMERINTAH DESA KALINYAMAT KULON
                <br />
                PERUBAHAN RENCANA ANGGARAN BIAYA
                <br />
                TAHUN ANGGARAN 2024
              </h4>
            </div>
          </div>
          <table className="w-full mb-4 border-collapse text-caption-2">
            <tbody>
              <tr>
                <td className="border px-2 py-1">Bidang</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">{detailData.bidang}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Sub Bidang</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">{detailData.sub_bidang}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Kegiatan</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">{detailData.kegiatan}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Waktu Pelaksanaan</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">
                  {formatDate(detailData.tgl_mulai)} s/d {formatDate(detailData.tgl_selesai)}
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Output/Keluaran</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">{detailData.output}</td>
              </tr>
            </tbody>
          </table>
          <table className="w-full mb-4 border-collapse text-caption-2">
            <thead>
              <tr>
                <th className="border px-2 py-1">No</th>
                <th className="border px-2 py-1">Akun</th>
                <th className="border px-2 py-1">Uraian</th>
                <th className="border px-2 py-1">Volume</th>
                <th className="border px-2 py-1">Harga</th>
                <th className="border px-2 py-1">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {pencatatanData.length > 0 ? (
                pencatatanData.map((item, index) => (
                  <tr key={index}>
                    <td className="border px-2 py-1">{index + 1}</td>
                    <td className="border px-2 py-1">{item.kode}</td>
                    <td className="border px-2 py-1">{item.uraian}</td>
                    <td className="border px-2 py-1">{item.kuantitas}</td>
                    <td className="border px-2 py-1">
                      {item.nominal.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td className="border px-2 py-1">
                      {item.subtotal.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="border px-2 py-1 text-center">
                    N/A
                  </td>
                </tr>
              )}
              <tr>
                <td colSpan="5" className="border px-2 py-1 text-right">
                  Total
                </td>
                <td className="border px-2 py-1">
                  {total.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-between text-caption-2">
            <div className="text-center mt-4">
              <p>Mengetahui</p>
              <p className="font-bold mb-10">KEPALA DESA</p>
              <p className="font-bold">DEVI FERDIYA SUSANTO</p>
            </div>
            <div className="text-center mt-4">
              <p>Telah Diverifikasi</p>
              <p className="font-bold mb-10">KEPALA DESA</p>
              <p className="font-bold">DEVI FERDIYA SUSANTO</p>
            </div>
            <div className="text-center mt-4">
              <p>Kalinyamat Kulon</p>
              <p className="font-bold mb-10">KEPALA DESA</p>
              <p className="font-bold">DEVI FERDIYA SUSANTO</p>
            </div>
          </div>
        </section>
        <div className="print:hidden py-2 flex justify-between mx-8">
          <button
            onClick={handlePrint}
            className="flex gap-2 bg-green-500 hover:bg-green-700 font-semibold text-white py-2 px-4 rounded-md mb-3 w-auto my-6"
          >
            <span>Print Laporan</span>
            <PrinterIcon className="w-5 h-5" />
          </button>
          <button
            className="flex gap-2 bg-danger-600 px-6 py-2 text-white border-cyan-500 font-bold rounded-md mb-3 w-auto my-6"
            onClick={onClose}
          >
            <span>Batal</span>
            <ArrowUturnLeftIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintLaporan;
