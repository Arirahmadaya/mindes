import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import ChartAPBDes from "../../components/ChartAPBDes";
import ChartBelanja from "../../components/ChartBelanja";
import ChartStunting from "../../components/ChartStunting";
import ChartRealisasi from "../../components/ChartRealisasi";
import NavbarGrafis from "../../components/NavbarGrafis";

const InfografisAPBDes = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className="md:flex justify-center items-center bg-gradient-10">
        <h1 className="font-bold md:text-heading-1 text-heading-4 text-blue hover:text-bluenight ml-70 leading-tight ">
          INFOGRAFIS DESA KALINYAMAT KULON
        </h1>
        <NavbarGrafis />
      </div>

      <ChartAPBDes />
      <ChartBelanja />
      <ChartStunting />
      <ChartRealisasi />

      <Footer />
    </div>
  );
};

export default InfografisAPBDes;
