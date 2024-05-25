import React from "react";

import NavbarUser from "../../components/NavbarUser";
import Footer from "../../components/Footer";
import CardBerita from "../../components/CardBerita";

const Berita = () => {
  return (
    <>
      <NavbarUser className="absolute" />

      <div className="mb-28 ">
        <div className="mx-70">
          <div className="mb-2 font-bold text-start text-heading-2 text-secondary-50">
            Berita Terhangat di Kalinyamat Kulon
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
      <Footer />
    </>
  );
};

export default Berita;
