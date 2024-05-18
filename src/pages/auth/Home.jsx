import React from "react";

import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import CardBerita from "../../components/Card";
import CarouselPerangkatDesa from "../../components/CarouselPD";
import Maps from "../../components/Maps";
import NavbarDai from "../../components/Navbardaisy";


const Home = () => {
  return (
    <>
  
    <NavbarDai />
      <Carousel />

      <div>
        <div>
          <img src="" alt="" />
          <h1 className="text-center text-display-1 text-blue">Selamat datang di halaman Beranda</h1>
        </div>

        <div className="mb-80">
          <h1 className="font-semibold text-heading-1">
            {" "}
            Jelajahi Kalinyamat Kulon{" "}
          </h1>
        </div>

        <section className="text-center">
          <h1 className="font-semibold text-display-2 text-secondary-50 ">
            Sambutan Kepala Desa
          </h1>
          <div className="font-semibold text-display-2">ARIANTO, S.AP.</div>
          <p className="text-body-1 ">
            Website ini merupakan wujud komitmen kami untuk meningkatkan <br />
            transparansi, akuntabilitas, dan partisipasi masyarakat dalam
            <br />
            membangun desa. Di sini, Anda dapat menemukan informasi lengkap
            <br />
            tentang desa, program, kegiatan, pelayanan publik, dan lain
            <br />
            sebagainya. Kami harap website ini dapat bermanfaat bagi seluruh
            <br />
            warga Desa Kalinyamat Kulon. Kritik dan saran membangun demi
            <br />
            kemajuan website dan desa kami persilahkan.
            <br />
          </p>
        </section>

        <div className="font-semibold text-center text-display-2 text-secondary-50 mb-80">
          Demografi Kalinyamat Kulon
        </div>
        <div> <Maps /></div>

        <div>
          <div className="mb-2 font-semibold text-center text-display-2 text-secondary-50">
          Perangkat Desa Kalinyamat Kulon
          </div>
          <div>
            <CarouselPerangkatDesa/>
          </div>
        </div>

        <div className="font-semibold text-center text-display-2 text-secondary-50 mb-80">
          Penduduk Kalinyamat Kulon
        </div>
        <div>
          <div className="mb-2 font-semibold text-center text-display-2 text-secondary-50">
            Berita Terhangat di Kalinyamat Kulon
          </div>
          <div className="flex justify-center mx-3">
          <CardBerita />  <CardBerita />  <CardBerita />
          </div>
        
        </div>
        <div className="font-semibold text-center text-display-2 text-secondary-50 mb-80">
          Galeri Kalinyamat Kulon
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
