import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import RelatedNews from "../../components/RelatedNews";
import CommentsSection from "../../components/CommentsSection";


const DeetailBerita = () => {
  return (
    <div>
      <NavbarUser />
      <div className="max-w-6xl mx-auto p-4">
        <article className="bg-white p-6 shadow-md">
        <div className="text-black text-[38px] font-bold font-['Open Sans'] leading-[45.60px]">Monitoring posyandu melati 2<br/>desa kalinyamat kulon </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span className="mr-2">5 Mei 2024, 16:53 WIB</span>
          <span className="mr-2">·</span>
          <span>3 Hari yang lalu</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span className="mr-2">Ditulis oleh - Ferianta</span>
        </div>
          <img src="/img_berita/berita3.jpg" alt="Posyandu Melati 2" className="w-full mb-4" />
          <div className="text-black text-xs font-light font-['Open Sans']">Kegiatan monitoring posyandu melati 2 kalinyamat kulon.</div>
          <br/>
          <p className="mb-4">
            Desa Kalinyamat Kulon, 12 Mei 2024 - Pemerintah Desa Kalinyamat Kulon telah sukses melaksanakan kegiatan monitoring terhadap Posyandu Melati 2 sebagai bagian dari upaya meningkatkan kesehatan dan kesejahteraan masyarakat lokal. Kegiatan ini dilakukan dengan tujuan memastikan bahwa layanan kesehatan dasar yang disediakan oleh Posyandu tersebut berjalan efektif dan berkualitas.
          </p>
          <p className="mb-4">
            Tim monitoring yang terdiri dari petugas kesehatan dan perwakilan pemerintah desa melakukan kunjungan langsung ke Posyandu Melati 2 untuk mengevaluasi berbagai aspek, termasuk pelayanan kesehatan, ketersediaan obat-obatan, dan partisipasi masyarakat. Selama kunjungan, dilakukan pemeriksaan terhadap kelengkapan dan kualitas pelayanan kesehatan yang diberikan kepada ibu hamil, balita, serta kelompok rentan lainnya.
          </p>
          <p className="mb-4">
            Hasil monitoring menunjukkan adanya capaian yang memuaskan dalam hal penyediaan pelayanan kesehatan dasar. Posyandu Melati 2 berhasil mencatat tingkat partisipasi yang baik dari masyarakat setempat, dengan kunjungan yang stabil dari ibu hamil dan balita. Selain itu, ketersediaan obat-obatan dan perlengkapan medis juga terjamin dengan baik, memastikan bahwa kebutuhan dasar dalam bidang kesehatan terpenuhi secara optimal.
          </p>
          <p className="mb-4">
            Pemerintah Desa Kalinyamat Kulon mengapresiasi kerja keras dan dedikasi para petugas Posyandu Melati 2. Diharapkan dengan adanya kegiatan monitoring ini, kualitas pelayanan kesehatan di desa Kalinyamat Kulon dapat terus ditingkatkan dan menjadi contoh bagi posyandu-posyandu lainnya.
          </p>
          <div className="flex space-x-4">
            <span>Bagikan ke:</span>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </article>
        <aside className="mt-8">
          <RelatedNews />
        </aside>
        <CommentsSection />
      </div>
      <Footer />
    </div>
  );
};

export default DeetailBerita;
