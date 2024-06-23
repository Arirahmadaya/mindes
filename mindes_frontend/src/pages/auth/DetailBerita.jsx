import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import RelatedNews from "../../components/RelatedNews";

const DetailBerita = () => {
  const { id_berita } = useParams();
  const [berita, setBerita] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBerita();
    incrementKunjungan(); // Tambahkan ini untuk meningkatkan kunjungan setiap kali halaman berita dibuka
  }, [id_berita]);

  const fetchBerita = async () => {
    try {
      const response = await axios.get(`http://data.mindes.my.id/berita/${id_berita}`);
      setBerita(response.data.data[0]);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
      setError("Gagal memuat data berita.");
    }
  };

  const incrementKunjungan = async () => {
    try {
      await axios.put(`http://data.mindes.my.id/berita/kunjungan/${id_berita}`);
    } catch (error) {
      console.error("Terjadi kesalahan saat meningkatkan jumlah kunjungan", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!berita) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavbarUser />
      <div className="flex justify-between mx-70 flex-col md:flex-row gap-4">
        <div className="w-full">
          <article className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="text-neutral-900 text-base font-semibold leading-[13px] tracking-tight mb-2">
              / Berita Desa
            </div>
            <div className="text-black text-[30px] font-bold leading-[40px]">
              {berita.judul}
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <div className="text-black/caption-2 text-xs font-light">
                {new Date(berita.tgl).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                - {berita.kunjungan} kali dilihat
              </div>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-4">
              <span className="mr-4">Ditulis oleh - {berita.penulis}</span>
            </div>
            <img
              className="w-full h-auto rounded-lg mb-4"
              src={`http://data.mindes.my.id/public${berita.img_berita}`}
              alt="Kegiatan monitoring"
            />
            <div className="text-black text-xs font-light text-center mb-4">
              {berita.judul}
            </div>
            <p className="mb-4">{berita.artikel}</p>
            <div className="flex space-x-4 mb-8">
              <span>Bagikan ke:</span>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </article>

          {/* Comments Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Komentar</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-gray-800"><strong>John Doe</strong> - 1 jam yang lalu</p>
                <p>Artikel yang sangat informatif!</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-gray-800"><strong>Jane Smith</strong> - 2 jam yang lalu</p>
                <p>Terima kasih atas informasinya.</p>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Tulis Komentar</h3>
              <form>
                <textarea
                  className="w-full p-3 border rounded-md"
                  rows="4"
                  placeholder="Tulis komentar Anda di sini..."
                ></textarea>
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Kirim
                </button>
              </form>
            </div>
          </div>
        </div>
        <aside className="w-1/3">
          <RelatedNews />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBerita;
