import React from "react";
import Sidebares from "../../components/Sidebar2";
import NavbarAdmin from "../../components/NavbarAdmin";
import ChartAdmin from "../../components/ChartAdmin";
import ChartAPBDes from "../../components/Chart";
import ChartBelanja from "../../components/ChartBelanja";

const Beranda = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex min-h-screen">
        <Sidebares />
        <div className=" flex bg-gray-100 ">
          <div className="flex justify-between -ml-10 ">
            <ChartAPBDes title="Chart 1"  />
            <ChartAPBDes title="Chart 2" className="ml-18"/>
            <ChartAPBDes title="Chart 3" className="ml-10"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
