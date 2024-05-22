import React from "react";

import Footer from "../../components/Footer";
import Carousel from "../../components/CarouselHome";
import CardBerita from "../../components/CardBerita";
import CarouselPerangkatDesa from "../../components/CarouselPD";
import Maps, { MapsKecil } from "../../components/Maps";
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

      <div>
        <section className="relative text-center mb-28">
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-blue-10 rounded-t-full"
            style={{
              top: "50%",
              height: "120%",
              zIndex: -1,
            }}
          ></div>

          <h1 className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight relative z-20">
            Sambutan Kepala Desa
          </h1>
          <div className="font-bold text-display-2 relative z-20">
            ARIANTO, S.AP.
          </div>
          <p className="text-body-1 relative z-20 font-medium">
            Website ini merupakan wujud komitmen kami untuk meningkatkan 
            transparansi, akuntabilitas, dan <br />partisipasi masyarakat dalam
            membangun desa. Di sini, Anda dapat menemukan informasi <br /> lengkap
            
            tentang desa, program, kegiatan, pelayanan publik, dan lain
            sebagainya. <br /> Kami harap website ini dapat bermanfaat bagi seluruh
           
            warga Desa  <br />Kalinyamat Kulon. Kritik dan saran membangun demi 
            <br />
          </p>
          <div className="flex justify-center mb-4 relative z-20">
            <img src="/img/lurah_img.png" alt="Image Kepala Desa" />
          </div>
        </section>

        <div className="mb-28 z-20 ">
          <div className="mb-2 font-bold text-center text-display-2 text-blue hover:text-bluenight">
            Demografi Kalinyamat Kulon
          </div>
          <div>
            <Maps />
          </div>
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
