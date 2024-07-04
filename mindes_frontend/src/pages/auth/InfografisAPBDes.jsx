import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import ChartAPBDes from "../../components/ChartAPBDes";
import ChartBelanja from "../../components/ChartBelanja";
import ChartRealisasi from "../../components/ChartRealisasi";
import NavbarGrafis from "../../components/NavbarGrafis";

const InfografisAPBDes = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className=" lg:my-[30px] my-[10px]">
        <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center lg:mx-70 mx-5 ">
          <h1 className="font-bold text-center lg:text-start md:text-heading-1 text-heading-5 text-blue hover:text-bluenight hover:drop-shadow-2xl leading-tight mb-5 md:mb-0">
            Infografis Realisasi Anggaran Pendapatan dan Belanja Desa
          </h1>
          <div className="flex justify-center">
            <NavbarGrafis />
          </div>
        </div>
      </div>
      <div className="mx-5 md:mx-10 lg:mx-70 my-5">
        <ChartAPBDes />
      </div>

      <ChartBelanja />

      <ChartRealisasi />

      <Footer />
    </div>
  );
};

export default InfografisAPBDes;
