import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full bg-primary-40 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-10 ">
                <img src="logo_light.png" alt="Logo" className="h-8" />
                <div>
                    <p className="text-white font-bold">Desa Kalinyamat Kulon</p>
                    <p className="text-white">Kota Tegal</p>
                </div>
                <Link to="/" className="text-white hover:text-gray-300">
                    Beranda
                </Link>
                <Link to="/profile" className="text-white hover:text-gray-300">
                    Profile
                </Link>
                <Link to="/infografis" className="text-white hover:text-gray-300">
                    Infografis
                </Link>
                <Link to="/berita" className="text-white hover:text-gray-300">
                    Berita
                </Link>
            </div>
            <button className="bg-primary-30 text-grayscale-10 px-4 py-2 rounded-md hover:bg-primary-50">
                Login
            </button>
        </div>
    );
}

export default Navbar;

