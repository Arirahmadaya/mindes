import React, { useState } from "react";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap justify-between bg-primary-40 text-white rounded-t-3xl py-5 px-8 md:px-70">
        <div className="w-full xl:w-auto flex-shrink-0 mb-4 xl:mb-0">
          <Logo />
          <div className="hidden xl:block">
            <Medsos />
          </div>
        </div>
        <div className="w-full md:hidden text-body-2 ">
          <Dropdown title="Kontak Kelurahan">
            <KontakKelurahan />
          </Dropdown>
          <Dropdown title="Kontak Penting">
            <KontakPenting />
          </Dropdown>
          <Dropdown title="Jelajahi">
            <Jelajahi />
          </Dropdown>
          <div className="md:block">
            <Medsos />
          </div>
        </div>
        <div className="hidden md:flex w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
          <KontakKelurahan />
        </div>
        <div className="hidden md:flex w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
          <KontakPenting />
        </div>
        <div className="hidden md:flex w-full md:w-auto flex-shrink-0 mb-4 md:mb-0">
          <Jelajahi />
        </div>
      </footer>
      <div className="bg-primary-10 text-center py-2">
      © 2024 Madilog. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;

export const Logo = () => {
  return (
    <div className="flex items-center xl:mb-5">
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
    <div className="text-center xl:text-left mt-4 xl:mt-0">
      <p className="text-xl font-bold mb-2">Media Sosial</p>
      <div className="flex justify-center xl:justify-start space-x-4">
        <Link
          to="https://facebook.com"
          target="_blank "
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50"
        >
          <Icon.Facebook className="text-white w-6 h-6 " />
        </Link>
        <Link to="https://twitter.com" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50">
          <Icon.Twitter className="text-white w-6 h-6" />
        </Link>
        <Link to="https://instagram.com" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50">
          <Icon.Instagram className="text-white w-6 h-6 " />
        </Link>
        <Link to="https://youtube.com" target="_blank" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 hover:border-primary-20 hover:bg-gradient-50">
          <Icon.Youtube className="text-white w-6 h-6 " />
        </Link>
      </div>
    </div>
  );
};

export const KontakKelurahan = () => {
  return (
    <div>
      <p className="text-body-1 font-bold mb-4 hidden md:block">
        Kontak Kelurahan
      </p>
      <div className="text-body-2">
        <div className="flex items-center space-x-2 py-2">
          <Icon.Phone className="text-white w-6 h-6" />
          <p>+62283 311354</p>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <Icon.Mail className="text-white w-6 h-6" />
          <p>kelkalinyamatkulon@tegalkota.go.id</p>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <Icon.Calendar className="text-white w-6 h-6" />
          <p>
            Senin - Jumat
            <br />
            07:00 - 15:00
          </p>
        </div>
        <div className="flex items-center space-x-2 py-2">
          <Icon.Briefcase className="text-white w-6 h-6" />
          <p>
            Jalan Ki Hajar Dewantoro <br />
            No. 109, Tegal 52144
          </p>
        </div>
      </div>
    </div>
  );
};
const ListKontak = [
  {
    icon: "/src/assets/icon/flame.svg",
    title: "Pemadam Kebakaran",
    number: "(0283) 325429",
  },
  {
    icon: "/src/assets/icon/police.svg",
    title: "Polsek Sumur Panggang",
    number: "(0283) 353453",
  },
  {
    icon: "/src/assets/icon/hospital.svg",
    title: "Puskesmas Margadana",
    number: "(0283) 358604",
  },
  {
    icon: "/src/assets/icon/tuyul.svg",
    title: "KPAI",
    number: "021-319015",
  },
  {
    icon: "/src/assets/icon/pregnant.svg",
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
    <div>
      <p className="text-body-1 font-bold mb-4 hidden md:block ">
        Kontak Penting
      </p>
      <div className="space-y-4">
        {ListKontak.map((kontak, index) => (
          <div key={index} className="flex items-center space-x-2">
            <img src={kontak.icon} alt={kontak.title} className="w-6 h-6" />
            <div>
              <p className="text-body-2 font-semibold">{kontak.title}</p>
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
      <p className="text-body-1 font-bold mb-4 hidden md:block">Jelajahi</p>
      <div className="space-y-2 text-body-2">
        <Link to="/" className="hover:font-bold hover:underline">Beranda</Link><br />
        <Link to="/profil" className="hover:font-bold hover:underline">Profil Desa</Link><br />
        <Link to="/berita" className="hover:font-bold hover:underline">Berita</Link><br />
        <Link to="/infografis/penduduk" className="hover:font-bold hover:underline">Infografis</Link><br />
        <Link to="/infografis/cekdata" className="hover:font-bold hover:underline">Cek Data</Link><br />
        <Link to="/login" className="hover:font-bold hover:underline">Masuk</Link><br />
      </div>
    </div>
  );
};

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 bg-primary-30 rounded-lg text-left focus:outline-none"
      >
        <span className="font-bold">{title}</span>
        <Icon.ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 bg-primary-30 rounded-md mb-4 mt-2">{children}</div>
      )}
    </div>
  );
};
