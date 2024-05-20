import React from "react";
import Sidebares from "../../components/Sidebar2";
import NavbarAdmin from "../../components/NavbarAdmin";
import Tablenih from "../../components/Table";

const Beranda = () => {
  return (
    <div className="bg-grayscale-90 w-full h-auto">
      <NavbarAdmin />

      <Sidebares />

      <Tablenih />
    </div>
  );
};

export default Beranda;
