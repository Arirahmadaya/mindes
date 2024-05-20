import React from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="flex justify-between bg-primary-40 text-black rounded-t-3xl py-5 px-16">
        <div>
          <Logo />
          <br />
          <Medsos />
        </div>
        <KontakKelurahan />
        <KontakPenting />
        <Jelajahi />
      </footer>
      <div className="bg-primary-10 text-center py-2">
        🚀 2024 Madilog. All rights reserved
      </div>
    </>
  );
};

export default Footer;

export const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="logo/logo_light.png" alt="Logo" className="w-24 h-24 pr-3" />
      <div className="-space-y-2">
        <p className="text-heading-3 font-bold">Kalinyamat Kulon</p>
        <p className="text-body-2">
          Kecamatan Margadana
          <br />
          Kota Tegal
          <br />
          Provinsi Jawa Tengah
        </p>
      </div>
    </div>
  );
};

export const Medsos = () => {
  return (
    <div className="">
      <p className="text-xl font-bold mb-2">Media Sosial</p>
      <div className="flex space-x-4">
        <Link to="facebook.com">
          <Icon.Facebook className="text-white w-10 h-10" />
        </Link>
        <Icon.Twitter className="text-white w-10 h-10" />
        <Icon.Instagram className="text-white w-10 h-10" />
        <Icon.Youtube className="text-white w-10 h-10" />
      </div>
    </div>
  );
};

export const KontakKelurahan = () => {
  return (
    <div className="">
      <p className="text-body-1 font-bold">Kontak Kelurahan</p>

      <div className="text-body-2">
        <div className="flex items-center space-x-2 py-1">
          <Icon.Phone className="text-white w-6 h-6" />
          <p>+62283 311354</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon.Mail className="text-white w-6 h-6" />
          <p>kelkalinyamatkulon@tegalkota.go.id</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon.Calendar className="text-white w-6 h-6" />
          <p>
            Senin - Jumat
            <br />
            07:00 - 15:00
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon.Briefcase className="text-white w-6 h-6" />
          <p>
            Jalan Ki Hajar Dewantoro <br />
            No. 109, Tegal 52144{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

const ListKontak = [
  {
    icon: "src/assets/icon/flame.svg",
    title: "Pemadam Kebakaran",
    number: "(0283) 325429",
  },
  {
    icon: "src/assets/icon/police.svg",
    title: "Polsek Sumur Panggang",
    number: "(0283) 353453",
  },
  {
    icon: "src/assets/icon/hospital.svg",
    title: "Puskesmas Margadana",
    number: "(0283) 358604",
  },
  {
    icon: "src/assets/icon/tuyul.svg",
    title: "KPAI",
    number: "021-319015",
  },
  {
    icon: "src/assets/icon/pregnant.svg",
    title: "KOMNAS Perempuan",
    number: "021-3903963",
  },
  {
    icon: "/src/assets/icon/ham.svg",
    title: "KOMNAS HAM",
    number: "021-3925230",
  },
];

export const KontakPenting = () => {
  return (
    <div className="p-4">
      <p className="text-body-1 font-bold mb-4">Kontak Penting</p>
      <div className="space-y-4">
        {ListKontak.map((kontak, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img src={kontak.icon} alt={kontak.title} className="w-6 h-6" />
            <div>
              <p className="font-semibold">{kontak.title}</p>
              <p>{kontak.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const Jelajahi = () => {
  return (
    <div>
      <p className="text-body-1 font-bold">Jelajahi</p>
      <div className="space-y-2 text-body-2">
        <p>Beranda</p>
        <p>Profil Desa</p>
        <p>Infografis</p>
        <p>Berita</p>
        <p>Link *</p>
      </div>
    </div>
  );
};
