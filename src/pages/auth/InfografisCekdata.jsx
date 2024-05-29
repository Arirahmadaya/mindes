import React from "react";

import Footer from "../../components/Footer";
import NavbarUser from "../../components/NavbarUser";
import NavbarGrafis from "../../components/NavbarGrafis";
import { ExternalLink } from "react-feather";
import { Link, Button } from "@nextui-org/react";


const InfografisCekData = () => {
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
      <div className="bg-primary-30/10 w-auto h-auto mx-70 my-10 p-10 rounded-lg">
        <div>
          <div>
            
            <img
              src="/cek_data/bansos.png"
              alt="logo"
              className="w-auto h-[60px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" text-heading-2 font-bold text-blue">
              Cek Penerima Bansos
            </div>

            <Button
              as={Link}
              className="bg-primary-30  text-heading-5 font-semibold text-white rounded-md px-5 py-7"
              href="https://simpbb.tegalkota.go.id/"
              variant="flat"
            >
              Cek Bansos <ExternalLink />
            </Button>
          </div>
          <div className=" w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, optio? Eius consequatur libero harum, quod asperiores
            minima quasi, ut doloribus facere magni, atque excepturi vel non
            unde fuga animi? Aperiam.
          </div>
        </div>
      </div>

      <div className="bg-primary-30/10 w-auto h-auto mx-70 my-10 p-10 rounded-lg">
        <div>
          <div>
            <img
              src="/cek_data/pendudukan.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" text-heading-2 font-bold text-blue">
              Cek Data Kependudukan
            </div>

            <Button
              as={Link}
              className="bg-primary-30  text-heading-5 font-semibold text-white rounded-md px-5 py-7"
              href="https://disdukcapil.tegalkab.go.id/data/jumlah_penduduk"
              variant="flat"
            >
              Cek Penduduk <ExternalLink />
            </Button>
          </div>
          <div className=" w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, optio? Eius consequatur libero harum, quod asperiores
            minima quasi, ut doloribus facere magni, atque excepturi vel non
            unde fuga animi? Aperiam.
          </div>
        </div>
      </div>

      <div className="bg-primary-30/10 w-auto h-auto mx-70 my-10 p-10 rounded-lg">
        <div>
          <div>
            
            <img
              src="/cek_data/pajakbangunan.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" text-heading-2 font-bold text-blue">
              Cek Pajak PBB
            </div>

            <Button
              as={Link}
              className="bg-primary-30  text-heading-5 font-semibold text-white rounded-md px-5 py-7"
              href="https://cekpajak.com/jawa-tengah/tegal"
              variant="flat"
            >
              Cek Pajak PBB <ExternalLink />
            </Button>
          </div>
          <div className=" w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, optio? Eius consequatur libero harum, quod asperiores
            minima quasi, ut doloribus facere magni, atque excepturi vel non
            unde fuga animi? Aperiam.
          </div>
        </div>
      </div>

      <div className="bg-primary-30/10 w-auto h-auto mx-70 my-10 p-10 rounded-lg">
        <div>
          <div>
            
            <img
              src="/cek_data/samsat.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" text-heading-2 font-bold text-blue">
              Cek Pajak Kendaraan 
            </div>

            <Button
              as={Link}
              className="bg-primary-30  text-heading-5 font-semibold text-white rounded-md px-5 py-7"
              href="https://cekpajak.com/jawa-tengah/tegal"
              variant="flat"
            >
              Cek Pajak Kendaraan  <ExternalLink />
            </Button>
          </div>
          <div className=" w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, optio? Eius consequatur libero harum, quod asperiores
            minima quasi, ut doloribus facere magni, atque excepturi vel non
            unde fuga animi? Aperiam.
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};

export default InfografisCekData;
