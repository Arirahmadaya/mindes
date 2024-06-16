import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Mail, Phone, MapPin } from "react-feather";
import NavbarMINDes from "../../components/NavbarMINDes";


const Mindes = () => {
  return (
    <div className="bg-white">
      <NavbarMINDes />
      <main className="">
        <div className="">
          <div className="flex items-center justify-between w-full gap-10 ">
            <div className=" flex w-1/2  justify-center ">
              <img
                src="/img/MindesA.png"
                alt="Logo"
                className="w-2/3 lg:h-[307px] "
              />
            </div>
            <div className="w-1/2 lg:h-[410px] h-auto bg-blue-900 rounded-bl-[20px] flex items-center justify-end p-16">
              <div className="text-left text-white">
                <div className="w-full lg:text-display-2 text-heading-4 font-bold lg:leading-[64.80px] lg:mt-12 mt-5">
                  Ease Your Village Data Management with MINDes
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center lg:text-left ">
          <div className="flex justify-start items-center">
            <img
              className="lg:w-[250px] lg:h-[450px] w-[150px] h-1/2 rounded-r-lg"
              src="/img/MindesC.png"
              alt="MINDes"
            />
            <div className="flex items-center justify-evenly lg:-ml-28 -ml-20">
              <p className="lg:text-heading-6 text-caption-1 bg-blue-900 text-white p-10 rounded-lg lg:w-1/2 h-auto">
                <strong>MINDes</strong> sebuah platform yang memungkinkan
                masyarakat desa menerima informasi dan mampu berpartisipasi
                aktif dalam pembangunan desa dengan pengelolaan dana desa yang
                efisien, transparan, dan responsif yang dilakukan oleh
                pemerintah desa, demi mewujudkan desa yang lebih sejahtera dan
                maju.
              </p>
              <img
                className="lg:w-[400px] lg:h-[150px] hidden lg:block"
                src="/img/MindesB.png"
                alt="MINDes"
              />
            </div>
          </div>

          <section className="mt-20 bg-blue-900 text-white p-12 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold">
                Join 100+ Villages that are already growing with us
              </h2>
              <div className="flex justify-evenly items-center mt-6 space-x-4">
                <div className="flex flex-col items-center">
                  <img
                    src="/img/kota_tegal.png"
                    alt="Desa 1"
                    className="lg:h-28 h-20"
                  />
                  <div className="text-center lg:text-caption-1 text-caption-2 font-normal lg:leading-[28.80px]">
                    Kalinyamat Kulon
                    <br />
                    Kota Tegal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/img/kota_tegal.png"
                    alt="Desa 2"
                    className="lg:h-28 h-20"
                  />
                  <div className="text-center lg:text-caption-1 text-caption-2 font-normal lg:leading-[28.80px]">
                    Kalinyamat Kulon
                    <br />
                    Kota Tegal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/img/kota_tegal.png"
                    alt="Desa 3"
                    className="lg:h-28 h-20"
                  />
                  <div className="text-center lg:text-caption-1 text-caption-2 font-normal lg:leading-[28.80px]">
                    Kalinyamat Kulon
                    <br />
                    Kota Tegal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/img/kota_tegal.png"
                    alt="Desa 4"
                    className="lg:h-28 h-20"
                  />
                  <div className="text-center lg:text-caption-1 text-caption-2 font-normal lg:leading-[28.80px]">
                    Kalinyamat Kulon
                    <br />
                    Kota Tegal
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/img/kota_tegal.png"
                    alt="Desa 1"
                    className="lg:h-28 h-20"
                  />
                  <div className="text-center lg:text-caption-1 text-caption-2 font-normal lg:leading-[28.80px]">
                    Kalinyamat Kulon
                    <br />
                    Kota Tegal
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="">
            <div className="flex items-center justify-between">
              <div className="w-1/2 text-center lg:p-16">
              <div className=" lg:text-display-2 text-heading-6 font-bold lg:leading-[64.80px] lg:-mt-36 lg:mb-8 mb-2">
                  Build Your Own Village Website
                </div>
                <div className=" lg:text-heading-6 text-caption-2 font-normal lg:leading-[28.80px]">
                  You can organise what you want to display on your website with
                  guaranteed data security. You can also do cloud storage for
                  data that is still made manually in your village.
                </div>
              </div>
              <div className="w-1/2 mt-6 md:mt-0">
                <img
                  src="/img/MindesX.png"
                  alt="Website Desa"
                  className="w-full h-full "
                />
              </div>
            </div>
          </section>
          <section>
            <div className="flex justify-start ">
              <div className="lg:w-[150px] lg:h-[450px] w-[150px] h-[300px] rounded-r-lg bg-primary-50"></div>

              <div className="flex items-center justify-evenly lg:gap-10 gap-5 lg:-ml-20 -ml-5 overflow-hidden">
                <img
                  className="rounded-lg lg:w-[250px] w-[180px] h-4/5"
                  src="/img_berita/berita1.jpg"
                  alt="MINDes"
                />

                <img
                  className="rounded-lg lg:w-[250px] w-[180px] h-4/5"
                  src="/img_berita/berita2.jpg"
                  alt="MINDes"
                />

                <img
                  className="rounded-lg lg:w-[250px] w-[180px] h-4/5"
                  src="/img_berita/berita3.jpg"
                  alt="MINDes"
                />

                <img
                  className="rounded-lg lg:w-[250px] w-[180px] h-4/5"
                  src="/img_berita/berita4.jpg"
                  alt="MINDes"
                />
                 <img
                  className="rounded-lg lg:w-[250px] w-[180px] h-4/5"
                  src="/img_berita/berita5.jpg"
                  alt="MINDes"
                />
              </div>
            </div>
          </section>

          <section id="contact" className="mt-12 text-black p-6 rounded-lg flex flex-col lg:flex-row items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold">
                Want to own the same app? Leave us a message
              </h2>
              <p className="mt-4">
                We'd love to hear from you. Please fill out this form or shoot
                us an email.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6" />
                  <span className="ml-2">mindes@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6" />
                  <span className="ml-2">0878-7577-0909</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6" />
                  <span className="ml-2">
                    Jl. Hang Lekiu, Sambau, Kecamatan Nongsa, Kota Batam,
                    Kepulauan Riau 29465
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-lg mt-8 lg:mt-0 lg:ml-8 flex-1">
              <form className="flex flex-col space-y-4">
                <Input
                  clearable
                  underlined
                  fullWidth
                  labelPlaceholder="My name is*"
                />
                <Input
                  clearable
                  underlined
                  fullWidth
                  labelPlaceholder="Reach out to me at*"
                />
                <Input
                  clearable
                  underlined
                  fullWidth
                  labelPlaceholder="and whatsapp me at"
                />
                <Input
                  clearable
                  underlined
                  fullWidth
                  labelPlaceholder="I have a project that"
                />
                <Button color="success" auto>
                  Send
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-blue-500 text-white text-center py-4">
        &copy; 2024 MINDes. Semua hak dilindungi.
      </footer>
    </div>
  );
};

export default Mindes;
