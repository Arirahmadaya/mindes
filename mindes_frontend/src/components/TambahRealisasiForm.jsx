import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";
import {
  ArrowUturnLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/20/solid";

const TambahRealisasiForm = () => {
  const [formData, setFormData] = useState({
    // id_realisasi: "", //foreign
    id_akun: "", //foreign
    no: "",
    nominal: "",
    subtotal: "",
    uraian: "",
    kuantitas: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [akun, setAkun] = useState([]);
  const [selectedKey, setSelectedKey] = useState(new Set());

  const { id_realisasi } = location.state || {};

  useEffect(() => {
    const fetchAkun = async () => {
      try {
        const response = await axios.get(`${process.env.API_URL}/akun`);
        setAkun(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAkun();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Akun
  const selectedAkunValue = React.useMemo(() => {
    const key = [...selectedKey].join(", ");
    return key
      ? key.charAt(0).toUpperCase() + key.slice(1).replaceAll("_", " ")
      : "Rekening";
  }, [selectedKey]);

  const handleSelectionChange = (keys) => {
    setSelectedKey(keys);
    const id_akun = [...keys].join(", ");
    setFormData((prevData) => ({
      ...prevData,
      id_akun: id_akun,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.API_URL}/pencatatan/create`, {
        ...formData,
        id_realisasi,
      });
      navigate(`/admin/realisasi/pencatatan`, { state: { id_realisasi } });
    } catch (error) {
      console.log("Terjadi kesalahan", error);
    }
  };

  return (
    <div className="container mx-auto my-5 p-5 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-3">Tambah Pencatatan</h3>

      {/* Form Start */}
      <form onSubmit={handleSubmit}>
        <div className="relative w-full mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Nama Kegiatan/Program
          </p>
          <Input
            type="text"
            variant="bordered"
            label="Nama Kegiatan"
            name="kegiatan"
            readOnly
            value={formData.kegiatan}
            onChange={handleChange}
          />
        </div>
        <div className="relative w-1/2 mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Masukkan Nomor Urut
          </p>
          <Input
            type="number"
            variant="bordered"
            label="Nomor"
            name="no"
            value={formData.no}
          />
        </div>
        <div className="relative w-full mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
          Masukkan Uraian
          </p>
          <Input
            type="text"
            variant="bordered"
            label="Uraian"
            name="uraian"
            value={formData.uraian}
            onChange={handleChange}
          />
        </div>
        {/* Ganti supaya review pilihnya bukan id melainkan akun.kode TETAPI yang tersimpan tetap id_akun nya */}
        <div className="relative w-1/2 mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Pilih Akun Rekening
          </p>
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize text-left w-50%">
                {selectedAkunValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Pilih Akun Rekening"
              variant="flat"
              closeOnSelect={false}
              disallowEmptySelection
              selectionMode="multiple"
              selectedKeys={selectedKey}
              onSelectionChange={handleSelectionChange}
            >
              {akun.map((akun) => (
                <DropdownItem key={akun.id_akun}>{akun.uraian}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="relative w-1/2 mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Masukkan Besar Volume/Kuantitas
          </p>
          <Input
            type="number"
            variant="bordered"
            label="Kuantitas"
            name="kuantitas"
            value={formData.kuantitas}
          />
        </div>
        <div className="relative w-1/2 mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Masukkan Besar Nominal
          </p>
          <Input
            type="number"
            variant="bordered"
            label="Nominal"
            name="nominal"
            value={formData.nominal}
          />
        </div>
        {/* sub total otomatis */}
        <div className="relative w-1/2 mb-0">
          <p className="mt-1 mb-2 text-caption-2 text-gray">
            Sub Total
          </p>
          <Input
            type="number"
            variant="bordered"
            label="Sub Total"
            name="subtotal"
            onlyRead
            value={formData.subtotal}
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
//           <Input
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
//           <Input
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
//           <Input
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
//           <Input
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
//           <Input
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
//           <Input
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
