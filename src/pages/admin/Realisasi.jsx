import React from 'react'
import Sidebares from "../../components/Sidebar";
import NavbarAdmin from "../../components/NavbarAdmin";
import Tablenih from "../../components/Table";
const Realisasi = () => {
  return (
    <div className="flex flex-row bg-secondary-10 h-screen w-screen overflow-y-auto">
      <Sidebares />
      <div className="flex-1 mx-5">
        <div className="">
          <NavbarAdmin />
        </div>

        <div className="my-5 text-heading-6 font-semibold">Realisasi</div>

        <div className="flex gap-5 my-5">
          <div className=" flex bg-gray-100 w-full border-2 border-purple-500">
            <div className="bg-white rounded-lg w-full h-[550px] transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 mx-10 border-2 border-purple-500">
              <div className="bg-blue-100/20  rounded-b-[20px] w-auto ">
                <p className="text-heading-4 font-semibold text-center text-black p-5">
                  Tabel ....
                </p>
              </div>
              <div className="p-4 border-2 border-purple-500">
                <Tablenih />
              </div>
            </div>

            <div className="flex justify-between "></div>
          </div>
        </div>

       
       
      </div>
    </div>
  )
}

export default Realisasi