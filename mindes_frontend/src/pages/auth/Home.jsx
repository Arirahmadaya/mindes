import React, { useState, useEffect } from "react";
import axios from "axios";
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
import useAuthRedirect from "../../hooks/useAuthRedirect";

const Home = () => {
  useAuthRedirect();

  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    fetchBerita();
  }, []);

  const fetchBerita = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/berita`);
      const dataWithImgUrls = response.data.data.map((item) => {
        if (item.img_berita) {
          item.img_berita_url = `${import.meta.env.VITE_API_URL}/public${item.img_berita}`;
        } else {
          item.img_berita_url = null;
        }
        return item;
      });
      setBeritaList(dataWithImgUrls.slice(0, 6)); // Mengambil maksimal 6 berita terbaru
    } catch (error) {
      console.error("Terjadi kesalahan saat memuat data berita", error);
    }
  };
  
  return (
    <>
      <NavbarUser />
      <Carousel />
      <br />

      <div className="lg:mb-24 mb-16">
        <div className="font-bold text-center text-heading-5 lg:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl lg:mx-70 mx-5">
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

          <div className="mb-2 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
            Sambutan Kepala Desa
          </div>
          <div className="font-bold lg:text-heading-2 text-heading-6 md:text-display-2 relative z-20">
            ARIANTO, S.AP.
          </div>
          <p className="lg:text-body-1 text-caption-2 lg:text-normal text-justify relative z-20 font-medium lg:mx-70 mx-5">
            Selamat datang di website resmi Desa Kalinyamat Kulon. Kami
            berkomitmen untuk transparansi, akuntabilitas, dan partisipasi aktif
            masyarakat dalam pembangunan desa melalui platform ini. Temukan
            informasi lengkap tentang desa, program unggulan, kegiatan sosial,
            dan pelayanan publik. Kami berharap website ini menjadi jembatan
            informasi yang bermanfaat bagi warga Desa Kalinyamat Kulon.
            Partisipasi aktif dan kritik membangun dari warga sangat kami
            harapkan untuk meningkatkan pelayanan dan kualitas informasi.
            Bersama-sama, kita bisa membangun Desa Kalinyamat Kulon yang lebih
            baik dan maju. Terima kasih atas kunjungan Anda. Semoga Anda
            menemukan semua informasi yang Anda cari di sini.
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

        <div className="lg:mb-24 mb-10 lg:mx-70 mx-5">
          <div className="mb-2 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 ">
            Demografi Kalinyamat Kulon
          </div>
          <div>
            <MapsMain />
          </div>
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-2 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Perangkat Desa Kalinyamat Kulon
        </div>
        <div>
          <CarouselPerangkatDesa />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="mb-5 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5">
          Penduduk Kalinyamat Kulon
        </div>
        <div>
          <PendudukHome />
        </div>
      </div>

      <div className="lg:mb-24 mb-10 lg:mx-70 mx-5">
        <div className="mb-5 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 ">
          Berita Terhangat di Kalinyamat Kulon
        </div>
        <div>
        <CardBerita list={beritaList} />
        </div>
      </div>

      <div className="lg:mb-24 mb-10 lg:mx-70 mx-5">
        <div className="mb-5 font-bold text-center text-heading-5 md:text-display-2 text-blue hover:text-bluenight hover:drop-shadow-2xl relative z-20 ">
          Galeri Kalinyamat Kulon
        </div>
        <div>
          <Galery />
        </div>
      </div>

      <div className="lg:mb-24 mb-10">
        <div className="p-5 mb-5 md:text-display-2 hover:drop-shadow-2xl relative z-20 lg:mx-70 mx-5 bg-gradient-10 background-animate rounded-xl">
          <div className="flex lg:flex-row flex-col w-full h-auto lg:mb-5">
            <div className="w-full">
              <h1 className="lg:text-heading-2 text-center text-heading-4 lg:text-left font-bold text-blue hover:text-bluenight ">
                Miliki Website Desamu Sekarang
              </h1>
              <p className="lg:text-body-1  text-justify text-caption-1 ">
                Tingkatkan partisipasi aktif masyarakat dengan meningkatkan
                transparansi informasi serta melacak realisasi penggunaan dana
                desa secara digital. Pencatatan digital ini akan memudahkan
                pengelolaan data dan informasi desa dengan lebih efektif dan
                efisien. Mulailah transformasi digital desamu bersama
                <strong className="text-[#1F308B]"> MINDES</strong>, solusi
                digital yang andal dan terpercaya untuk kemajuan desamu.
              </p>
            </div>

            <div className="flex items-center lg:w-[550px] justify-center">
              <img
                src="/img/world.png"
                className="lg:w-auto h-40 "
                alt="world"
              />
            </div>
          </div>
          <div className="flex items-center mt-4 lg:mt-0 lg:gap-5">
            <Button
              as={Link}
              className="bg-primary-30 text-white rounded-md"
              href="/about/mindes"
              variant="flat"
            >
              Pelajari Lebih Lanjut <LogIn />
            </Button>
            <span className="flex w-1/2 lg:justify-normal justify-center">
              <img
                src="/logo/mindes.png"
                className="w-20 h-6 inline"
                alt="logo mindes"
              />
            </span>
          </div>
        </div>
      </div>
      <div>

      <Footer />
      </div>

    </>
  );
};

export default Home;
