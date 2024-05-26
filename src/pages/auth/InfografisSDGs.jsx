import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import NavbarGrafis from "../../components/NavbarGrafis";


const InfografisSDGs = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className="md:flex justify-center items-center">
        <h1 className="font-bold md:text-heading-1 text-heading-4 text-blue hover:text-bluenight ml-70 leading-tight ">
          INFOGRAFIS DESA KALINYAMAT KULON
        </h1>
        <NavbarGrafis />
      </div>
      

      <Footer />
    </div>
  );
};

export default InfografisSDGs;
