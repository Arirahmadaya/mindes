import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import NavbarGrafis from "../../components/NavbarGrafis";
import TableAsli from "../../components/TableAsli";

const InfografisSDGs = () => {
  return (
    <div className="bg-grayscale-90">
      <NavbarUser />
      <div className=" lg:my-[30px] my-[10px]">
        <div className="md:flex justify-center items-center ">
          <h1 className="font-bold md:text-heading-1 text-heading-4 text-blue hover:text-bluenight ml-70 leading-tight ">
            INFOGRAFIS DESA KALINYAMAT KULON
          </h1>
          <NavbarGrafis />
        </div>
      </div>
      <div className="bg-secondary-20 w-auto h-[325px] m-70 p-10 rounded-lg">
        <div>
          <div>
            {" "}
            <img
              src="/sdgs/1.png"
              alt="dddddd"
              className="w-[250px] h-[75px]"
            />
          </div>
          <div className="flex">
            <div className=" text-heading-1 font-bold text-blue">
              Cek Penerima Bansos
            </div>
            <div className="bg-primary-30 w-[150px] h-[50px] text-center text-white items-center justify-center p-2">
              Cek bansos 🚀
            </div>
            
          </div>
          <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit, optio? Eius consequatur libero harum, quod
              asperiores minima quasi, ut doloribus facere magni, atque
              excepturi vel non unde fuga animi? Aperiam.
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InfografisSDGs;
