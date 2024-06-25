import React from "react";

import Footer from "../../components/Footer";
import Carousel from "../../components/CarouselHome";
import CardBerita from "../../components/CardBerita";
import CarouselPerangkatDesa from "../../components/CarouselPD";

import Galery from "../../components/CardGalery";
import PendudukHome from "../../components/Pendudukan";
import Jelajahi from "../../components/Jelajahi";
import NavbarUser from "../../components/NavbarUser";
import { Button, Link } from "@nextui-org/react";
import { LogIn } from "react-feather";
import { MapsMain } from "../../components/Maps";

const Home = () => {
  return (
    <>
      <NavbarUser className="absolute" />
      <Carousel />
      <br />

      <div className="lg:mb-24 mb-16">
        <div className="font-bold text-center text-heading-2 lg:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl lg:mx-70 mx-5">
          Jelajahi Kalinyamat Kulon
        </div>
        <Jelajahi />
      </div>

      <div className="lg:mb-24 mb-10">
        <section className="relative text-center mb-28">
          <div
            className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-50/70 to-blue-10 rounded-t-full"
            style={{
              top: "50%",
              height: "120%",
              zIndex: -1,
            }}
          ></div>

          <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
            Sambutan Kepala Desa
          </div>
          <div className="font-bold lg:text-heading-2 text-heading-4 md:text-display-2 relative z-20">
            ARIANTO, S.AP.
          </div>
          <p className="lg:text-body-1 text-caption-1 relative z-20 font-medium lg:mx-70 mx-5">
            Website ini adalah komitmen kami untuk transparansi, akuntabilitas,
            dan partisipasi masyarakat dalam pembangunan desa. Temukan informasi
            lengkap tentang desa, program, kegiatan, pelayanan publik, dan
            lainnya di sini. Kami harap website ini bermanfaat bagi warga Desa
            Kalinyamat Kulon. Kritik dan saran sangat kami harapkan.
          </p>
          <br />
          <div className="flex justify-center mb-4 relative z-20">
            <img
              src="/img/lurah_img.png"
              alt="Image Kepala Desa"
              className="max-w-full h-auto"
            />
          </div>
        </section>

        <div className="lg:mb-24 mb-10">
          <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
            Demografi Kalinyamat Kulon
          </div>
          <div>
            <MapsMain />
          </div>
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-2 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Perangkat Desa Kalinyamat Kulon
        </div>
        <div>
          <CarouselPerangkatDesa />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-5 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Penduduk Kalinyamat Kulon
        </div>
        <div>
          <PendudukHome />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-5 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Berita Terhangat di Kalinyamat Kulon
        </div>
        <div>
          <CardBerita />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-5 font-bold text-center text-heading-2 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Galeri Kalinyamat Kulon
        </div>
        <div>
          <Galery />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-5 flex text-heading-2 md:text-display-2 hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5 bg-gradient-10 background-animate rounded-xl">
          <div className="w-full h-auto p-5">
            <h1 className="lg:text-display-2 text-heading-4 text-left font-bold text-blue hover:text-bluenight ">
              Miliki Web Desamu
            </h1>
            <p className="text-body-1 lg:w-4/5">
              Tingkatkan partisipasi aktif masyarakat dengan transparansi
              informasi dan tracking realisasi penggunaan dana desa dalam
              pencatatan digital dengan 
              <img
                src="/logo/mindes.png"
                className="w-20 h-6 inline ml-2 "
                alt="Image Kepala Desa"
              />
            </p>
            <div>
              {" "}
              <Button
                as={Link}
                className="bg-primary-30 text-white rounded-md"
                href="/about/mindes"
                variant="flat"
              >
                Pelajarin Lebih Lanjut <LogIn />
              </Button>
            </div>
          </div>
          <div className=" flex items-center lg:items-start">
            <img src="/img/world.png" alt="world" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
