import React from "react";


import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import ChartAPBDes from "../../components/Chart";
import ChartBelanja from "../../components/ChartBelanja";

const InfografisAPBDes = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <ChartAPBDes />
      <ChartBelanja />

      <Footer />
    </div>
  );
};

export default InfografisAPBDes;


