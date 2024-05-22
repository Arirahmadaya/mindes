import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import ChartAPBDes from "../../components/ChartAPBDes";
import ChartBelanja from "../../components/ChartBelanja";

import ChartApanih from "../../components/ChartAPBDes";
import ChartStunting from "../../components/ChartStunting";
import ChartRealisasi from "../../components/ChartRealisasi";

const InfografisAPBDes = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <ChartAPBDes />
      <ChartBelanja />
      <ChartStunting />
      <ChartRealisasi />

      <Footer />
    </div>
  );
};

export default InfografisAPBDes;
