import React from "react";

import Footer from "../../components/Footer";
import Carousel from "../../components/CarouselHome";
import CardBerita from "../../components/CardBerita";
import CarouselPerangkatDesa from "../../components/CarouselPD";
import Maps, { } from "../../components/Maps";
import Galery from "../../components/CardGalery";
import PendudukHome from "../../components/Pendudukan";
import Jelajahi from "../../components/Jelajahi";
import NavbarUser from "../../components/NavbarUser";
import { Button, Link } from "@nextui-org/react";
import { LogIn } from "react-feather";

const Home = () => {
  return (
    <>
      <NavbarUser className="absolute" />
      <Carousel />
      <br />

      <div>
        <h1 className="mb-2 font-bold text-center text-heading-2 lg:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl lg:mx-70 mx-[20px]">
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

          <h1 className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl  lg:mx-70 mx-[20px]">
            Sambutan Kepala Desa
          </h1>
          <div className="font-bold lg:text-heading-2 text-heading-4 md:text-display-2 relative z-20">
            ARIANTO, S.AP.
          </div>
          <p className="lg:text-body-1 text-caption-1 relative z-20 font-medium lg:mx-70 mx-[20px]">
            Website ini merupakan wujud komitmen kami untuk meningkatkan
            transparansi, akuntabilitas, dan <br />
            partisipasi masyarakat dalam membangun desa. Di sini, Anda dapat
            menemukan informasi <br /> lengkap tentang desa, program, kegiatan,
            pelayanan publik, dan lain sebagainya. <br /> Kami harap website ini
            dapat bermanfaat bagi seluruh warga Desa <br />
            Kalinyamat Kulon. Kritik dan saran membangun demi
            <br />
          </p>

          <div className="flex justify-center mb-4 relative z-20">
            <img src="/img/lurah_img.png" alt="Image Kepala Desa" />
          </div>
        </section>

        <div className="my-20 ">
          <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
            Demografi Kalinyamat Kulon
          </div>
          <div>
            <Maps />
          </div>
        </div>
      </div>

      <div className="my-20">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
          Perangkat Desa Kalinyamat Kulon
        </div>
        <div>
          <CarouselPerangkatDesa />
        </div>
      </div>

      <div className="my-28">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
          Penduduk Kalinyamat Kulon
        </div>
        <div>
          <PendudukHome />
        </div>
      </div>

      <div className="my-28">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[20px]">
          Berita Terhangat di Kalinyamat Kulon
        </div>
        <div>
          <CardBerita />
        </div>
      </div>

      <div className="mb-28">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[30px]">
          Galeri Kalinyamat Kulon
        </div>
        <div>
          <Galery />
        </div>
      </div>

      <div className="mb-28">
        <div className="mb-2 font-bold flex text-heading-2 md:text-display-2 hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-[30px] bg-gradient-10 background-animate rounded-xl">
          <div className="w-full h-auto p-5">
            <h1 className="text-display-2 text-left  text-blue hover:text-bluenight ">Miliki Web Desamu</h1>
            <p className="text-body-1">
              Tingkatkan partisipasi aktif masyarakat dengan transparansi
              informasi dan tracking realisasi penggunaan dana desa dalam
              pencatatan digital dengan <img src="/logo/mindes.png" className="w-12 h-5 inline" alt="Image Kepala Desa" />
              
            </p>
            <div>
              {" "}
              <Button
                as={Link}
                className="bg-primary-30 text-white rounded-md"
                href="/login"
                variant="flat"
              >
                Pelajarin Lebih Lanjut <LogIn />
              </Button>
            </div>
          </div>
          <div>
            <img src="/img/world.png" alt="world"/>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
