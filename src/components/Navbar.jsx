import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between w-auto px-[70px] py-4 bg-primary-40">
            <div className="flex items-center space-x-10 ">
                <img src="logo/logo_light.png" alt="Logo" className="h-12 " />
                <div>
                    <p className="font-bold text-white">Desaaaaaa Kalinyamat Kulon</p>
                    <p className="text-white">Kota Tegal</p>
                </div>
               
            </div>
            <div className="space-x-10"> 
            <Link to="/" className="text-white hover:text-gray-300">
                    Beranda
                </Link>
                <Link to="/profil/kalinyamat-kulon" className="text-white hover:text-gray-300">
                    Profile
                </Link>
                <Link to="/infografis" className="text-white hover:text-gray-300">
                    Infografis
                </Link> 
                
                <Link to="/berita" className="text-white hover:text-gray-300">
                    Berita
                </Link>
            </div>
            <button className="px-4 py-2 rounded-md bg-primary-30 text-grayscale-10 hover:bg-primary-50">
                Login
            </button>
        </div>
    );
}

export default Navbar;

