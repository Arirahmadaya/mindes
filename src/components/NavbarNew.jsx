import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-col-reverse w-screen h-screen bg-primary-40 md:flex-row">
            <div className="sticky flex flex-col bg-whtie md:h-screen md:w-1/4 md:items-center md:justify-between md:pt-14">
            <div className="flex flex-col md:items-center md:justify-start">
                <img className="hidden w-2/5 h-auto md:block" src="logo/logo_light.png" alt="logo mindes"/>
                    <p className="hidden mt-5 text-4xl font-bold text-white md:block">Desa Kalinyamat Kulon</p>
                    <p className="hidden mt-5 text-xl font-bold text-white md:block">Kota Tegal</p>
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
        </div>
    );
}

export default Navbar;

