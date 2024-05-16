import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />


      <Carousel />

      <div>
        <div>
          <img src="" alt="" />
          <h1 className="text-center">Selamat datang di halaman Beranda</h1>
        </div>

        <div className="mb-80">
          <h1 className="text-heading-1 font-semibold">
            {" "}
            Jelajahi Kalinyamat Kulon{" "}
          </h1>
        </div>

        <section className="text-center">
          <h1 className="text-display-2 font-semibold text-secondary-50 ">
            Sambutan Kepala Desa
          </h1>
          <div className="text-display-2 font-semibold">ARIANTO, S.AP.</div>
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

        <div className="text-center font-semibold text-display-2 text-secondary-50 mb-80">
          Demografi Kalinyamat Kulon
        </div>

        <div className="text-center font-semibold text-display-2 text-secondary-50 mb-80">
          Perangkat Desa Kalinyamat Kulon
        </div>
        <div className="text-center font-semibold text-display-2 text-secondary-50 mb-80">
          Penduduk Kalinyamat Kulon
        </div>
        <div className="text-center font-semibold text-display-2 text-secondary-50 mb-80">
          Berita Terhangat di Kalinyamat Kulon
        </div>
        <div className="text-center font-semibold text-display-2 text-secondary-50 mb-80">
          Galeri Kalinyamat Kulon
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
