import React from "react";
import NavbarUser from "../../components/NavbarUser";
import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/20/solid";

const UserProfile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <NavbarUser />
      <div className="flex-grow flex flex-col items-center py-12">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <div className="flex flex-col items-center mb-6">
            <img
              src="/img/opi.png"
              alt="Opi"
              className="w-24 h-24 rounded-full mb-2"
            />
            <h1 className="text-[30px] font-bold">Kofipah Armaatus</h1>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Nama Depan</label>
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Kofipah"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Nama Belakang</label>
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="Armaatus"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="kofipah78@gmail.com"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Nomor Telepon</label>
                <input
                  type="text"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="08123123123"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="********"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-medium">Ulangi Password</label>
                <input
                  type="password"
                  className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value="********"
                  readOnly
                />
              </div>
            </div>
            <div className="flex mt-6 space-x-4">
              <button
                type="button"
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
