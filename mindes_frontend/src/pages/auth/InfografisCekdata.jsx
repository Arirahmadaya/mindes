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
        <div className="flex flex-col md:flex-row lg:justify-between justify-center items-center lg:mx-70 mx-5 ">
          <h1 className="font-bold text-center lg:text-start md:text-heading-1 text-heading-4 text-blue hover:text-bluenight hover:drop-shadow-2xl leading-tight mb-5 md:mb-0">
            Cek Data Masyarakat Desa
          </h1>
          <div className="flex justify-center">
            <NavbarGrafis />
          </div>
        </div>
      </div>
      <div className="bg-primary-30/10 w-auto h-auto lg:mx-70 mx-5 my-10 p-10 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div>
          <div>
            <img
              src="/cek_data/bansos.png"
              alt="logo"
              className="w-auto h-[60px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" lg:text-heading-2 text-heading-5 font-bold text-blue hover:text-bluenight hover:drop-shadow-xl">
              Cek Penerima Bansos
            </div>

            <Button
              as={Link}
              className="bg-primary-30 lg:text-heading-5 text-body-2 font-semibold text-white rounded-md px-5 lg:py-7 py-5 hover:underline"
              href="https://simpbb.tegalkota.go.id/"
              variant="flat"
              target="_blank"
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

      <div className="bg-primary-30/10 w-auto h-auto lg:mx-70 mx-5 my-10 p-10 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div>
          <div>
            <img
              src="/cek_data/pendudukan.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" lg:text-heading-2 text-heading-5 font-bold text-blue hover:text-bluenight hover:drop-shadow-xl">
              Cek Data Kependudukan
            </div>

            <Button
              as={Link}
              className="bg-primary-30 lg:text-heading-5 text-body-2 font-semibold text-white rounded-md px-5 lg:py-7 hover:underline"
              href="https://disdukcapil.tegalkab.go.id/data/jumlah_penduduk"
              variant="flat"
              target="_blank"
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

      <div className="bg-primary-30/10 w-auto h-auto lg:mx-70 mx-5 my-10 p-10 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div>
          <div>
            <img
              src="/cek_data/pajakbangunan.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" lg:text-heading-2 text-heading-5 font-bold text-blue hover:text-bluenight hover:drop-shadow-xl">
              Cek Pajak PBB
            </div>

            <Button
              as={Link}
              className="bg-primary-30 lg:text-heading-5 text-body-2 font-semibold text-white rounded-md px-5 lg:py-7 hover:underline"
              href="https://cekpajak.com/jawa-tengah/tegal"
              variant="flat"
              target="_blank"
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

      <div className="bg-primary-30/10 w-auto h-auto lg:mx-70 mx-5 my-10 p-10 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
        <div>
          <div>
            <img
              src="/cek_data/samsat.png"
              alt="logo"
              className="w-auto h-[70px]"
            />
          </div>
          <div className="flex justify-between">
            <div className=" lg:text-heading-2 text-heading-5 font-bold text-blue hover:text-bluenight hover:drop-shadow-xl">
              Cek Pajak Kendaraan
            </div>

            <Button
              as={Link}
              className="bg-primary-30 text-heading-5 font-semibold text-white rounded-md px-5 lg:py-7 hover:underline"
              href="https://cekpajak.com/jawa-tengah/tegal"
              variant="flat"
              target="_blank"
            >
              Cek Pajak Kendaraan <ExternalLink />
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
