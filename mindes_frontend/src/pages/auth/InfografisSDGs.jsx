import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import NavbarGrafis from "../../components/NavbarGrafis";
import CardSDGs from "../../components/CardSDGs";

const InfografisSDGs = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className=" lg:my-[30px] my-[10px]">
        <div className="md:flex justify-center items-center ">
          <h1 className="font-bold md:text-heading-1 text-heading-4 text-blue hover:text-bluenight hover:drop-shadow-2xl ml-70 leading-tight ">
            SDGs Desa Kalinyamat Kulon
          </h1>
          <div className="ml-auto">
          <NavbarGrafis />
          </div>
        </div>
      </div>

      <div className="mx-70">
        <div className="ml-3"></div>

        <CardSDGs />
      </div>

      <Footer />
    </div>
  );
};

export default InfografisSDGs;
