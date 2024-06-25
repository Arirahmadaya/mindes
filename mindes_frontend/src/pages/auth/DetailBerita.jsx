import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import Beritalainnya from "../../components/Beritalainnya";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Textarea } from "@nextui-org/react";
import * as Icon from "react-feather";

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
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/berita/${id_berita}`
      );
      setBerita(response.data.data[0]);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
      setError("Gagal memuat data berita.");
    }
  };

  const incrementKunjungan = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/berita/kunjungan/${id_berita}`
      );
    } catch (error) {
      console.error(
        "Terjadi kesalahan saat meningkatkan jumlah kunjungan",
        error
      );
    }
  };

  const timeSince = (date) => {
    const now = new Date();
    const secondsPast = Math.floor((now - date) / 1000);

    if (secondsPast < 60) {
      return `${secondsPast} detik yang lalu`;
    }
    if (secondsPast < 3600) {
      const minutes = Math.floor(secondsPast / 60);
      return `${minutes} menit yang lalu`;
    }
    if (secondsPast < 86400) {
      const hours = Math.floor(secondsPast / 3600);
      return `${hours} jam yang lalu`;
    }
    const days = Math.floor(secondsPast / 86400);
    return `${days} hari yang lalu`;
  };

  const formatBeritaDate = (dateString) => {
    const beritaDate = new Date(dateString);
    const formattedDate = beritaDate.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const timeSincePosted = timeSince(beritaDate);

    return `${formattedDate} - ${timeSincePosted}`;
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
      <div className="flex justify-between lg:mx-70 mx-5 flex-col md:flex-row gap-4">
        <div className="w-full">
          <article className="bg-white p-6 rounded-lg shadow-md mb-8">
            <Breadcrumbs className="my-5">
              <BreadcrumbItem href="/">Beranda</BreadcrumbItem>
              <BreadcrumbItem href="/berita">Berita</BreadcrumbItem>
              <BreadcrumbItem href="/berita/">{berita.judul}</BreadcrumbItem>
            </Breadcrumbs>
            <div className="text-black text-heading-3 font-bold leading-[40px] mb-2">
              {berita.judul}
            </div>
            <div className="flex items-center text-gray-600 text-caption-1 mb-2">
              <div className="flex gap-2 text-black/caption-2 text-xs font-light">
                <Icon.Clock className="w-5 h-5" />{" "}
                <span>{formatBeritaDate(berita.tgl)}</span>
              </div>
            </div>

            <div className="flex justify-between text-gray-600 text-caption-1 ">
              <div className="flex gap-2 text-black/caption-2 text-xs font-light mb-2">
                <Icon.User className="w-5 h-5" />
                <span className="mr-4">Ditulis oleh - Ferianta</span>
              </div>

              <div className="flex gap-2 items-center text-gray-600 text-caption-1 mb-2">
               <Icon.Eye className="w-5 h-5" /> <span >{berita.kunjungan} kali dilihat</span>
              </div>
            </div>

            <img
              className="w-full h-auto rounded-lg mb-4"
              src={`${import.meta.env.VITE_API_URL}/public${berita.img_berita}`}
              alt="Kegiatan monitoring"
            />
            <div className="text-black text-xs font-light mb-4 text-body-2">
              {berita.judul}
            </div>
            <p
              className="text-body-2"
              dangerouslySetInnerHTML={{
                __html: berita.artikel,
              }}
            ></p>
            <div className="flex space-x-4 mb-8 mt-4">
              <p>Bagikan ke:</p>
              <div className="flex justify-center xl:justify-start space-x-4">
                <Link
                  to="https://facebook.com"
                  target="_blank "
                  className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50"
                >
                  <Icon.Facebook className="text-black w-4 h-4 " />
                </Link>
                <Link
                  to="https://twitter.com"
                  target="_blank"
                  className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50"
                >
                  <Icon.Twitter className="text-black w-4 h-4" />
                </Link>
                <Link
                  to="https://instagram.com"
                  target="_blank"
                  className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50"
                >
                  <Icon.Instagram className="text-black w-4 h-4 " />
                </Link>
                <Link
                  to="https://youtube.com"
                  target="_blank"
                  className="flex h-6 w-8 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50"
                >
                  <Icon.Youtube className="text-black w-4 h-4 " />
                </Link>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-semibold mb-4">Komentar</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <p className="text-gray-800">
                  <strong>Iwan RX</strong> - 2 jam yang lalu
                </p>
                <p>Terima kasih atas informasinya.</p>
              </div>
            </div>
            <div className="mt-6">
              <form>
                <Textarea
                  label="Komentar"
                  variant="bordered"
                  placeholder="Tulis komentar/masukan mu disini"
                  disableAnimation
                  disableAutosize
                  classNames={{
                    base: "w-full",
                    input: "resize-y min-h-[100px]",
                  }}
                />
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
        <aside className="lg:w-1/3">
          <Beritalainnya />
        </aside>
      </div>
      <Footer />
    </div>
  );
};

export default DetailBerita;
