import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="col-span-2 lg:col-span-1">
          <img src="https://via.placeholder.com/100x100" alt="Logo" className="w-24 h-24 mb-4" />
          <div>
            <p className="text-xl font-bold">Kalinyamat Kulon</p>
            <p>Kecamatan Margadana<br />Kota Tegal<br />Provinsi Jawa Tengah</p>
          </div>
        </div>
        {/* Media Sosial */}
        <div className="col-span-2 lg:col-span-1">
          <p className="text-xl font-bold mb-2">Media Sosial</p>
          <div className="flex space-x-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-10 h-10 bg-white" />
            ))}
          </div>
        </div>
        {/* Kontak Penting */}
        <div className="lg:col-span-2">
          <p className="text-xl font-bold mb-2">Kontak Penting</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-white" />
                <p>Pemadam Kebakaran<br />(0283) 325429</p>
              </div>
            ))}
          </div>
        </div>
        {/* Kontak Kelurahan */}
        <div className="lg:col-span-2">
          <p className="text-xl font-bold mb-2">Kontak Kelurahan</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white" />
              <p>+62283 311354</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white" />
              <p>kelkalinyamatkulon@tegalkota.go.id</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white" />
              <p>Senin - Jumat<br />07:00 - 15:00</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-white" />
              <p>Jalan Ki Hajar Dewantoro <br />No. 109, Tegal 52144 </p>
            </div>
          </div>
        </div>
        {/* Jelajahi */}
        <div className="col-span-2 lg:col-span-1 flex flex-col items-end">
          <p className="text-xl font-bold mb-2">Jelajahi</p>
          <div className="flex flex-col space-y-2">
            <p>Beranda</p>
            <p>Profil Desa</p>
            <p>Infografis</p>
            <p>Berita</p>
            <p>Link *</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



// import React from 'react';

// const Footer = () => {
//   return (
//     <>
//     <footer className="bg-primary text-white py-10">


//     </footer>
    
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
