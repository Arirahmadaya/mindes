import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Button variant="primary">Simpan</Button>
      <Button />
      <div className="bg-indigo-100">
            <img src="" alt="" />
            <h1>Selamat datang di halaman Beranda</h1>
        </div>
        <div>
            
        </div>

        <section>
            <div>Sambutan Kepala Desa</div>
            <div>ARIANTO, S.AP.</div>
            <p className='text-caption-2 text-greyscale-10 bg-primary-50 '>Website ini merupakan wujud komitmen kami untuk meningkatkan transparansi, akuntabilitas, dan partisipasi masyarakat dalam membangun desa. Di sini, Anda dapat menemukan informasi lengkap tentang desa, program, kegiatan, pelayanan publik, dan lain sebagainya. Kami harap website ini dapat bermanfaat bagi seluruh warga Desa Kalinyamat Kulon. Kritik dan saran membangun demi kemajuan website dan desa kami persilahkan.</p>

        </section> 

        <Footer />
    </>
  );
};

export default Home;
