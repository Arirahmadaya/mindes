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
          <div className="mb-0 font-bold text-start text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20">
            Berita Kalinyamat Kulon
          </div>
          <div className="mb-2 font-regular text-start text-heading-6 text-black">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan
            artikel-artikel jurnalistik dari Kalinyamat Kulon
          </div>
        </div>

        <div>
          <CardBerita />
        </div>
      </div>
      <div className="mx-auto -ml-14 my-20"><Timeline /></div>
      
      <Footer />
    </>
  );
};

export default Berita;
