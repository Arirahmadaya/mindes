import React from "react";
import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import NavbarGrafis from "../../components/NavbarGrafis";
import { ExternalLink } from "react-feather";
import { Link, Button } from "@nextui-org/react";

const cekData = [
  {
    imgSrc: "/cek_data/bansos.png",
    imgAlt: "logo",
    title: "Cek Penerima Bansos",
    link: "https://simpbb.tegalkota.go.id/",
    linkText: "Cek Bansos",
    description:
      "Cek penerima bantuan sosial di desa Anda melalui layanan online yang memudahkan akses informasi secara cepat dan akurat. Temukan siapa saja yang berhak menerima bantuan serta jenis bantuan yang tersedia.",
  },
  {
    imgSrc: "/cek_data/pendudukan.png",
    imgAlt: "logo",
    title: "Cek Data Kependudukan",
    link: "https://disdukcapil.tegalkab.go.id/data/jumlah_penduduk",
    linkText: "Cek Penduduk",
    description:
      "Periksa data kependudukan di wilayah Anda. Informasi lengkap mengenai jumlah penduduk, distribusi usia, dan status ekonomi tersedia untuk analisis dan perencanaan pembangunan desa.",
  },
  {
    imgSrc: "/cek_data/pajakbangunan.png",
    imgAlt: "logo",
    title: "Cek Pajak PBB",
    link: "https://cekpajak.com/jawa-tengah/tegal",
    linkText: "Cek Pajak PBB",
    description:
      "Lihat informasi lengkap mengenai Pajak Bumi dan Bangunan (PBB) di desa Anda. Fitur ini membantu warga untuk memeriksa status pembayaran dan jumlah pajak yang harus dibayar setiap tahunnya.",
  },
  {
    imgSrc: "/cek_data/samsat.png",
    imgAlt: "logo",
    title: "Cek Pajak Kendaraan",
    link: "https://cekpajak.com/jawa-tengah/tegal",
    linkText: "Cek Pajak Kendaraan",
    description:
      "Pantau status pajak kendaraan Anda secara online. Pastikan kendaraan Anda terdaftar dan semua pajak terbayar tepat waktu untuk menghindari denda dan masalah hukum lainnya.",
  },
];

const InfografisCekData = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className=" lg:my-[30px] my-[10px]">
        <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center lg:mx-70 mx-5 ">
          <h1 className="font-bold text-center lg:text-start md:text-heading-1 text-heading-5 text-blue hover:text-bluenight hover:drop-shadow-2xl leading-tight mb-5 md:mb-0">
            Cek Data Masyarakat Desa
          </h1>
          <div className="flex justify-center">
            <NavbarGrafis />
          </div>
        </div>
      </div>
      {cekData.map((data, index) => (
        <div
          key={index}
          className="bg-primary-30/10 w-auto h-auto lg:mx-70 mx-5 mt-10 mb-5 lg:mb-10 lg:p-10 p-5 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500"
        >
          <div>
            <div>
              <img
                src={data.imgSrc}
                alt={data.imgAlt}
                className={`lg:w-auto lg:h-[60px] w-auto h-[40px]`}
              />
            </div>
            <div className="flex justify-between items-center lg:mt-1 mt-4">
              <div className=" lg:text-heading-2 text-heading- font-bold text-blue hover:text-bluenight hover:drop-shadow-xl">
                {data.title}
              </div>
              <Button
                as={Link}
                className="bg-primary-30 lg:text-body-2 text-caption-1 font-semibold text-white rounded-md px-5 lg:py-7 py-5 hover:underline"
                href={data.link}
                variant="flat"
                target="_blank"
              >
                {data.linkText} <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
            <div className="lg:w-2/3 w-full text-justify lg:mt-1 mt-4">{data.description}</div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default InfografisCekData;
