import React from "react";

export default function PendudukHome() {
  return (
    <>
      <div className="flex justify-center m-16">
        <div className="flex">
          <div className="p-8 text-white bg-secondary-40 text-heading-1 rounded-s-3xl">
            {" "}
            1000
          </div>
          <div className="font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-3xl">
            {" "}
            Penduduk
          </div>
        </div>
        <div className="flex">
          <div className="p-8 text-white bg-secondary-40 text-heading-1 rounded-s-3xl">
            {" "}
            1000
          </div>
          <div className="font-semibold text-black w-[269px] h-[141px] text-heading-3 bg-secondary-10 rounded-e-3xl">
            {" "}
            Penduduk Laki-Laki
          </div>
        </div>
      </div>

      <div className="flex justify-center m-16">
        <div className="flex">
          <div className="p-8 text-white bg-secondary-40 text-heading-1 rounded-s-3xl">
            {" "}
            1000
          </div>
          <div className="font-semibold text-black w-[269px] h-[141px] text-heading-3 bg-secondary-10 rounded-e-3xl">
            {" "}
            Penduduk Perempuan
          </div>
        </div>
        <div className="flex">
          <div className="p-8 text-white bg-secondary-40 text-heading-1 rounded-s-3xl">
            {" "}
            1000
          </div>
          <div className="font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-3xl">
            {" "}
            Kepala Keluarga
          </div>
        </div>
      </div>
    </>
  );
}
