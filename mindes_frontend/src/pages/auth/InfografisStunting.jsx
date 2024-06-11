import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";

import ChartStunting from "../../components/ChartStunting";
import NavbarGrafis from "../../components/NavbarGrafis";

const InfografisStunting = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className=" lg:my-[30px] my-[10px]">
        <div className="md:flex justify-center items-center ">
          <h1 className="font-bold md:text-heading-1 text-heading-4 text-blue hover:text-bluenight hover:drop-shadow-2xl ml-70 leading-tight ">
            Infografis Tingkat Stunting Desa
          </h1>
          <div className="ml-auto">
          <NavbarGrafis />
          </div>
        </div>
      </div>

      <ChartStunting />

      <Footer />
    </div>
  );
};

export default InfografisStunting;
