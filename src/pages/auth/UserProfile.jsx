import React from "react";
import NavbarUser from "../../components/NavbarUser";
import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/20/solid";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarUser />
      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <div className="">
          <div className="flex flex-col items-center">
            <img
              src="/logo/person1.png"
              alt="Person"
              className="w-24 h-24 rounded-full mb-2"
            />
            <h1 className="text-[30px] font-bold">Kofipah Armaatus</h1>
          </div>
          <form className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Nama Depan</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  value="Kofipah"
                  readOnly
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Nama Belakang</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  value="Armaatus"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 p-2 rounded-md"
                  value="kofipah78@gmail.com"
                  readOnly
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Nomor Telepon</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md"
                  value="08123123123"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 p-2 rounded-md"
                  value="********"
                  readOnly
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-1 font-normal">Ulangi Password</label>
                <input
                  type="password"
                  className="border border-gray-300 p-2 rounded-md"
                  value="********"
                  readOnly
                />
              </div>
            </div>
            <div className="flex mt-4">
              <button
                type="submit"
                className="flex items-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                <span>Batal</span>
                <XMarkIcon className="w-5 h-5" />
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ml-auto"
              >
                <span>Simpan</span>
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
