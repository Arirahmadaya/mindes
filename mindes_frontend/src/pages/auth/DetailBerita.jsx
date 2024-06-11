import React from "react";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import RelatedNews from "../../components/RelatedNews";
import CommentsSection from "../../components/CommentsSection";

const DetailBerita = () => {
  return (
    <div>
      <NavbarUser />
      <div className="flex justify-between mx-70  flex-col md:flex-row gap-4 ">
        <div className="w-full">
          <article className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="text-neutral-900 text-base font-semibold  leading-[13px] tracking-tight mb-2">
              / Berita Desa
            </div>
            <div className="text-black text-[30px] font-bold  leading-[40px]">Monitoring posyandu melati 2<br/>desa kalinyamat kulon </div>
            <div className="flex items-center text-gray-600 text-sm mb-2">
            <div className="text-black/caption-2 text-xs font-light ">5 Mei 2024, 16:53 WIB - 3 Hari yang lalu</div>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span className="mr-4">Ditulis oleh - Ferianta</span>
            </div>
            <img className="w-full h-auto rounded-lg mb-4" src="/img_berita/berita3.jpg" alt="Kegiatan monitoring" />
            <div className="text-black text-xs font-light text-center mb-4">
              Kegiatan monitoring posyandu melati 2 kalinyamat kulon.
            </div>
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
            <div className="flex space-x-4 mb-8">
              <span>Bagikan ke:</span>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </article>
          <CommentsSection />
        </div>
        <aside className="w-1/3 ">
          <RelatedNews />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBerita;