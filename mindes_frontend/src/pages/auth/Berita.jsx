import React from "react";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import CardBerita from "../../components/CardBerita";

import Agenda from "../../components/Agenda";

const Berita = () => {
  return (
    <>
      <NavbarUser className="absolute" />

      <div className="mb-28 mt-5">
        <div className="lg:mx-70 mx-10">
          <div className="mb-0 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20">
            Berita Kalinyamat Kulon
          </div>
          <div className="mb-5 font-regular text-center text-heading-6 text-black relative z-20">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
            artikel-artikel jurnalistik dari Kalinyamat Kulon
          </div>
        </div>

        <div>
          <CardBerita />
        </div>
      </div>
      <div className="lg:mx-70 mx-10">

        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
        Agenda Desa Kalinyamat Kulon
        </div>
        <div className="mb-0  text-center text-heading-6 text-black">
          Lihat Agenda Desa yang bisa anda ketahui lebih lanjut di sini
        </div>

        <div className="my-10 relative z-20 lg:mx-70 mx-[20px] ">
          <div className="w-4/5"><Agenda /></div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Berita;