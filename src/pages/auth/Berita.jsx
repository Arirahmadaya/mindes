import React from "react";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import CardBerita from "../../components/CardBerita";
import Timeline from "../../components/Timeline";

const Berita = () => {
  return (
    <>
      <NavbarUser className="absolute" />

      <div className="mb-28 ">
        <div className="mx-70">
          <div className="mb-0 font-bold text-start text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20">
            Berita Kalinyamat Kulon
          </div>
          <div className="mb-2 font-regular text-start text-heading-6 text-black relative z-20">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
            artikel-artikel jurnalistik dari Kalinyamat Kulon
          </div>
        </div>

        <div>
          <CardBerita />
        </div>
      </div>
      <div className="mx-70">
        <div className="mb-0 font-bold text-start text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20">
          Agenda Desa Kalinyamat Kulon
        </div>
        <div className="mb-0 font-regular text-start text-heading-6 text-black">
          Lihat Agenda Desa yang bisa anda ketahui lebih lanjut di sini
        </div>

        <div className="my-16 relative z-20 font-medium lg:mx-70 mx-[20px]">
          <Timeline />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Berita;
