import React from "react";
import { Input, Button } from "@nextui-org/react";
import { Mail, Phone, MapPin } from "react-feather";
import NavbarMINDes from "../../components/NavbarMINDes";

const Mindes = () => {
  return (
    <div>
      <NavbarMINDes />
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="w-[613px] text-slate-50 text-[54px] font-bold font-['Open Sans'] leading-[64.80px]text-4xl font-bold text-gray-800">
            Ease Your Village Data Management with MINDes
          </h1>
          <p className="mt-4 text-gray-600">
            MINDes sebuah platform yang memungkinkan masyarakat desa menerima
            informasi dan mampu berpartisipasi aktif dalam pembangunan desa
            dengan pengelolaan dana desa yang efisien, transparan, dan responsif
            yang dilakukan oleh pemerintah desa, demi mewujudkan desa yang lebih
            sejahtera dan maju.
          </p>
          <div className="mt-6">
            <img
              src="/logo/icon_light.png"
              alt="MINDes Logo"
              className="mx-auto"
            />
          </div>
        </div>

        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Join 100+ Villages that are already growing with us
            </h2>
            <div className="flex justify-center items-center mt-6 space-x-4">
              <img src="/village-logo1.png" alt="Village 1" className="h-16" />
              <img src="/village-logo2.png" alt="Village 2" className="h-16" />
              <img src="/village-logo3.png" alt="Village 3" className="h-16" />
              <img src="/village-logo4.png" alt="Village 4" className="h-16" />
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800">
                Build Your Own Village Website
              </h2>
              <p className="mt-4 text-gray-600">
                You can organise what you want to display on your website with
                guaranteed data security. You can also add cloud storage or form
                that is still made manually in your village.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src="/village-website.png"
                alt="Village Website"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Our Portfolio</h2>
            <div className="flex justify-center items-center mt-6 space-x-4">
              <img src="/portfolio1.png" alt="Portfolio 1" className="h-48" />
              <img src="/portfolio2.png" alt="Portfolio 2" className="h-48" />
              <img src="/portfolio3.png" alt="Portfolio 3" className="h-48" />
            </div>
          </div>
        </section>

        <section className="mt-12 bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              Want to own the same app? Leave us a message
            </h2>
            <p className="mt-4">
              We'd love to hear from you. Please fill out the form below or
              email us directly at mindes@gmail.com
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
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
                Jl. Hang Lekiu, Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan
                Riau 29465
              </span>
            </div>
          </div>
          <div className="mt-6">
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
                labelPlaceholder="I have a project that*"
              />
              <Button color="success" auto>
                Send
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-blue-500 text-white text-center py-4">
        &copy; 2024 MINDes. All rights reserved.
      </footer>
    </div>
  );
};

export default Mindes;
