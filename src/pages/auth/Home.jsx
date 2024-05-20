import React from "react";

import Footer from "../../components/Footer";
import Carousel from "../../components/CarouselHome";
import CardBerita from "../../components/CardBerita";
import CarouselPerangkatDesa from "../../components/CarouselPD";
import Maps from "../../components/Maps";
import Galery from "../../components/CardGalery";
import PendudukHome from "../../components/Pendudukan";
import Jelajahi from "../../components/Jelajahi";
import NavbarUser from "../../components/NavbarUser";

const Home = () => {
  return (
    <>
      <NavbarUser className="absolute" />
      <Carousel />
      <br />

      <div className="">
        <h1 className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Jelajahi Kalinyamat Kulon
        </h1>
        <Jelajahi />
      </div>

      <section className="text-center mb-28">
        <h1 className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Sambutan Kepala Desa
        </h1>
        <img src="/img/lurah_img.png" alt="Image Kepala Desa" />
        <div className="font-bold text-display-2">ARIANTO, S.AP.</div>
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

      <div className="mb-28">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Demografi Kalinyamat Kulon
        </div>
        <div className=" border-red-500">
          <Maps />
        </div>
      </div>

      <div>
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Perangkat Desa Kalinyamat Kulon
        </div>
        <div>
          <CarouselPerangkatDesa />
        </div>
      </div>

      <div className="mb-28">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Penduduk Kalinyamat Kulon
        </div>
        <div>
          <PendudukHome />
        </div>
      </div>

      <div className="mb-28">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Berita Terhangat di Kalinyamat Kulon
        </div>
        <div>
          <CardBerita />
        </div>
      </div>

      <div className="mb-28">
        <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
          Galeri Kalinyamat Kulon
        </div>
        <div>
          <Galery />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
