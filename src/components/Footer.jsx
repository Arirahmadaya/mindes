import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-between bg-primary-40 text-white rounded-t-md py-5 px-16">
        <div>
          <Logo />
          <br />
          <Medsos />
        </div>
        <KontakKelurahan />
        <KontakPenting />
        <Jelajahi />
      </footer>
      <div className="bg-primary-10 text-center py-2">
        🚀 2024 Madilog. All rights reserved
      </div>
    </>
  );
};

export default Footer;

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="logo_light.png" alt="Logo" className="w-24 h-24 pr-3"  />
      <div className="-space-y-2">
        <p className="text-heading-3 font-bold">Kalinyamat Kulon</p>
        <p className="text-body-2" >
          Kecamatan Margadana
          <br />
          Kota Tegal
          <br />
          Provinsi Jawa Tengah
        </p>
      </div>
    </div>
  );
};

export const Medsos = () => {
  return (
    <div className="">
      <p className="text-xl font-bold mb-2">Media Sosial</p>
      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-white" />
        <div className="w-10 h-10 bg-white" />
        <div className="w-10 h-10 bg-white" />
        <div className="w-10 h-10 bg-white" />
        <div className="w-10 h-10 bg-white" />
      </div>
    </div>
  );
};
export const KontakPenting = () => {
  return (
    <div className="">
      <p className="text-body-1 font-bold">Kontak Penting</p>
      <div className="text-body-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            Pemadam Kebakaran
            <br />
            (0283) 325429
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            Polsek Sumurpanggang
            <br />
            (0283) 353453
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            Puskesmas Margadana
            <br />
            (0283) 358604
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            KPAI
            <br />
            021-319015
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            KOMNAS Perempuan
            <br />
            021-3903963
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            KOMNAS HAM
            <br />
            021-3925230
          </p>
        </div>
      </div>
    </div>
  );
};

export const KontakKelurahan = () => {
  return (
    <div className="">
      <p className="text-body-1 font-bold">Kontak Kelurahan</p>
      <div className="text-body-2">
        <div className="flex items-center space-x-2 py-1">
          <div className="w-6 h-6 bg-white" />
          <p>+62283 311354</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>kelkalinyamatkulon@tegalkota.go.id</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            Senin - Jumat
            <br />
            07:00 - 15:00
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white" />
          <p>
            Jalan Ki Hajar Dewantoro <br />
            No. 109, Tegal 52144{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Jelajahi = () => {
  return (
    <div>
      <p className="text-body-1 font-bold">Jelajahi</p>
      <div className="space-y-2 text-body-2">
        <p>Beranda</p>
        <p>Profil Desa</p>
        <p>Infografis</p>
        <p>Berita</p>
        <p>Link *</p>
      </div>
    </div>
  );
};

// </>
// <footer className="bg-blue-800 text-white py-10">
//   <div className="container mx-auto px-6">
//     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
//       {/* Logo dan Kontak Kelurahan */}
//       <div className="flex items-center mb-8 lg:mb-0">
//         <div>
//           <img src="https://via.placeholder.com/100x100" alt="Logo" className="w-24 h-24 mr-4" />
//         </div>
//         <div className="ml-4">
//           <p className="text-xl font-bold">Kalinyamat Kulon</p>
//           <p>Kecamatan Margadana<br />Kota Tegal<br />Provinsi Jawa Tengah</p>
//         </div>
//       </div>
//       {/* Media Sosial */}
//       <div className="mb-8 lg:mb-0">
//         <p className="text-xl font-bold mb-2">Media Sosial</p>
//         <div className="flex space-x-4">
//           {[...Array(5)].map((_, index) => (
//             <div key={index} className="w-10 h-10 bg-white" />
//           ))}
//         </div>
//       </div>
//       {/* Kontak Penting */}
//       <div className="mb-8 lg:mb-0">
//         <p className="text-xl font-bold mb-2">Kontak Penting</p>
//         <div className="space-y-2">
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-2">
//               <div className="w-6 h-6 bg-white" />
//               <p>Pemadam Kebakaran<br />(0283) 325429</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Jelajahi */}
//       <div className="flex flex-col items-end">
//         <p className="text-xl font-bold mb-2">Jelajahi</p>
//         <div className="flex flex-col space-y-2">
//           <p>Beranda</p>
//           <p>Profil Desa</p>
//           <p>Infografis</p>
//           <p>Berita</p>
//           <p>Link *</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//   );
// }

// export default Footer;
