import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import { ArrowUturnLeftIcon, PrinterIcon } from "@heroicons/react/20/solid";

const PrintLaporan = ({ item, onClose }) => {
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
        `${process.env.API_URL}/${id_realisasi}`
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
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto p-4  relative">
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
                <td className="border px-2 py-1">
                  2. BIDANG PELAKSANAAN PEMBANGUNAN DESA
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Sub Bidang</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">5. Sub Bidang Pendidikan</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Kegiatan</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">
                  2505. Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal
                  Milik Desa (Honor, Pakaian dll)
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Waktu Pelaksanaan</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">
                  2505. Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal
                  Milik Desa (Honor, Pakaian dll)
                </td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Output/Keluaran</td>
                <td className="border px-2 py-1">:</td>
                <td className="border px-2 py-1">
                  2505. Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal
                  Milik Desa (Honor, Pakaian dll)
                </td>
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
              <tr>
                <td className="border px-2 py-1">1</td>
                <td className="border px-2 py-1">5221</td>
                <td className="border px-2 py-1">
                  Belanja Jasa Honorarium Lainnya
                </td>
                <td className="border px-2 py-1">3 Bulan</td>
                <td className="border px-2 py-1">Rp. 3,500,000.00</td>
                <td className="border px-2 py-1">Rp. 10,500,000.00</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">2</td>
                <td className="border px-2 py-1">5212</td>
                <td className="border px-2 py-1">
                  Belanja Pakaian Dinas/Seragam/Atribut
                </td>
                <td className="border px-2 py-1">4 Bulan</td>
                <td className="border px-2 py-1">Rp. 300,000.00</td>
                <td className="border px-2 py-1">Rp. 1,200,000.00</td>
              </tr>
              <tr>
                <td colSpan="5" className="border px-2 py-1 text-right">
                  Total
                </td>
                <td className="border px-2 py-1">Rp. 11,700,000.00</td>
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
            <div className="text-center mt-4 ">
              <p>Kalinyamat Kulon</p>
              <p className="font-bold mb-10">KEPALA DESA</p>
              <p className="font-bold">DEVI FERDIYA SUSANTO</p>
            </div>
          </div>
        </section>
        <div className="print:hidden py-2 flex justify-between mx-8">
          <button
            onClick={handlePrint}
            className="flex gap-2 bg-green-500 hover:bg-green-700 font-semibold text-white py-2 px-4 rounded-md mb-3 w-auto my-6 "
          >
            <span>Print Laporan</span>
            <PrinterIcon className="w-5 h-5" />
          </button>
          <button
            className="flex gap-2 bg-danger-600 px-6 py-2 text-white border-cyan-500 font-bold rounded-md mb-3 w-auto my-6 "
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
