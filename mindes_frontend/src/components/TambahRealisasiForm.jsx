import React from "react";
import { Link } from "react-router-dom";
import { ArrowUturnLeftIcon, PaperAirplaneIcon } from "@heroicons/react/20/solid";

const TambahRealisasiForm = () => {
  return (
    <div className="container mx-auto my-5 p-5 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-3">Tambah Data Realisasi</h3>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kodeKegiatan"
          >
            Kode Kegiatan
          </label>
          <input
            id="kodeKegiatan"
            type="text"
            readOnly
            value="2505"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="namaKegiatan"
          >
            Nama Kegiatan
          </label>
          <input
            id="namaKegiatan"
            type="text"
            readOnly
            value="Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal Milik Desa (Honor, Pakaian dll)"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="akun">
            Akun
          </label>
          <select
            id="akun"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">- Pilih Akun -</option>
            <option value="5221">5221 - Belanja Jasa Honorarium Lainnya</option>
            <option value="5212">5212 - Belanja Pakaian Dinas/Seragam/Atribut</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uraian">
            Uraian
          </label>
          <input
            id="uraian"
            type="text"
            placeholder="Masukkan Uraian Pembelanjaan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jumlah">
            Jumlah
          </label>
          <input
            id="jumlah"
            type="text"
            placeholder="Masukkan Jumlah Pembelian"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="satuan">
            Satuan
          </label>
          <input
            id="satuan"
            type="text"
            placeholder="Masukkan Satuan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
            Harga
          </label>
          <input
            id="harga"
            type="text"
            placeholder="Masukkan Harga Kegiatan"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex justify-between w-full mt-4">
          <Link
            to="/admin/realisasi/pencatatan"
            className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <ArrowUturnLeftIcon className="w-5 h-5" />
            Batal
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            <span>Simpan</span>
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahRealisasiForm;


// OLD
// import React from "react";

// const TambahRealisasiForm = () => {
//   return (
//     <div className="container mx-auto my-5 p-5 bg-white rounded-lg shadow-lg">
//       <h3 className="text-xl font-semibold mb-3">Tambah Data Realisasi</h3>
//       <form>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="kodeKegiatan">
//             Kode Kegiatan
//           </label>
//           <input
//             id="kodeKegiatan"
//             type="text"
//             readOnly
//             value="2505"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="namaKegiatan">
//             Nama Kegiatan
//           </label>
//           <input
//             id="namaKegiatan"
//             type="text"
//             readOnly
//             value="Penyelenggaraan PAUD/TK/TPA/TKA/TPQ/Madrasah NonFormal Milik Desa (Honor, Pakaian dll)"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="akun">
//             Akun
//           </label>
//           <select
//             id="akun"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           >
//             <option value="">- Pilih Akun -</option>
//             <option value="5221">5221 - Belanja Jasa Honorarium Lainnya</option>
//             <option value="5212">5212 - Belanja Pakaian Dinas/Seragam/Atribut</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="uraian">
//             Uraian
//           </label>
//           <input
//             id="uraian"
//             type="text"
//             placeholder="Masukkan Uraian Pembelanjaan"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jumlah">
//             Jumlah
//           </label>
//           <input
//             id="jumlah"
//             type="text"
//             placeholder="Masukkan Jumlah Pembelian"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="satuan">
//             Satuan
//           </label>
//           <input
//             id="satuan"
//             type="text"
//             placeholder="Masukkan Satuan"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="harga">
//             Harga
//           </label>
//           <input
//             id="harga"
//             type="text"
//             placeholder="Masukkan Harga Kegiatan"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="flex justify-between w-full mt-4">
//               <Link
//                 to="/admin/realisasi/pencatatan"
//                 className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
//               >
//                 <ArrowUturnLeftIcon className="w-5 h-5" />
//                 Batal
//               </Link>
//               <button
//                 type="submit"
//                 className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//               >
//                 <span>Simpan</span>
//                 <PaperAirplaneIcon className="w-5 h-5" />
//               </button>
//             </div>
//       </form>
//     </div>
//   );
// };

// export default TambahRealisasiForm;
