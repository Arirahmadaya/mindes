import React from "react";
import TableAsli from "../../components/TableAsli";

const BeritaAdmin = () => {
  return (
    <div>
      <div className="flex justify-center mx-5 md:mx-10 lg:mx-70 my-5 ">
        <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
          <div className="bg-blue-100/20  rounded-b-[20px] w-auto  ">
            <p className="text-heading-4 font-semibold text-center text-black p-5">
              Tabel ....
            </p>
          </div>
          <div className="p-4">
            <Tablenih />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaAdmin;
