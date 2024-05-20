import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/img/logo.png"; // Sesuaikan path dengan lokasi logo Anda

function Footer() {
  return (
    <>
    <footer className="px-40 py-10 text-white bg-primary">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div>
          <h1 className="mb-4 text-lg font-bold">Tentang Spotix</h1>
          <ul>
            <li className="mb-2">
              <Link to="/about" className="text-white">
                Masuk
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/pricing" className="text-white">
                Biaya
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="text-white">
                FAQ
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/terms" className="text-white">
                Syarat dan Ketentuan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-lg font-bold">Kategori</h1>
          <ul>
            <li className="mb-2">
              <Link to="/category/concerts" className="text-white">
                Konser
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/category/sports" className="text-white">
                Olahraga
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/category/festivals" className="text-white">
                Festival
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/category/workshops" className="text-white">
                Workshop dan Seminar
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-lg font-bold">Lokasi Event</h1>
          <ul>
            <li className="mb-2">
              <Link to="/locations/jakarta" className="text-white">
                Jakarta
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/bandung" className="text-white">
                Bandung
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/yogyakarta" className="text-white">
                Yogyakarta
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/surabaya" className="text-white">
                Surabaya
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/medan" className="text-white">
                Medan
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/bali" className="text-white">
                Bali
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/locations/all" className="text-white">
                Semua Kota
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="mb-4 text-lg font-bold">Spotix Support</h1>
          <ul>
            <li className="mb-2">
              <Link to="/contact" className="text-white">
                Email
              </Link>
            </li>
            <li className="mb-2">
              <Link to="mailto:Spotix01@gmail.com" className="text-white">
                Spotix01@gmail.com
              </Link>
            </li>
          </ul>
          <div className="mt-4">
            <img src={logo} alt="Spotix Logo" className="w-64" />
            <ul className="flex justify-start w-64 mt-5 space-x-3">
              <li>
                <Link to="#">
                  <img
                    src="/src/assets/img/social/Instagram.png"
                    alt="Instagram"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/src/assets/img/social/TwitterX.png"
                    alt="TwitterX"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/src/assets/img/social/LinkedIn.png"
                    alt="LinkedIn"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/src/assets/img/social/YouTube.png" alt="YouTube" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/src/assets/img/social/Facebook.png"
                    alt="Facebook"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/src/assets/img/social/TikTok.png" alt="TikTok" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/src/assets/img/social/Link.png" alt="Link" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <footer>
      <div className="py-4 text-center text-white border-t-2 border-white bg-primary">
        <p>© 2024 Spotix. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
