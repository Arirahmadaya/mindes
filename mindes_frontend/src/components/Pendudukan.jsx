import React from "react";

export default function PendudukHome() {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mx-70 sm:grid-cols-1">
        <div className="flex items-center justify-between">
          <div className="w-1/2 h-full bg-secondary-40 rounded-s-xl p-4 text-white text-heading-1 flex items-center justify-center">
            6.844
          </div>
          <div className="w-full h-full font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-xl p-4 flex items-center justify-center">
            Penduduk
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 h-full bg-secondary-40 rounded-s-xl p-4 text-white text-heading-1 flex items-center justify-center">
            3.489
          </div>
          <div className="w-full h-full font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-xl p-4 flex items-center justify-center">
            Penduduk Laki-Laki
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 h-full bg-secondary-40 rounded-s-xl p-4 text-white text-heading-1 flex items-center justify-center">
            2.094
          </div>
          <div className="w-full h-full font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-xl p-4 flex items-center justify-center">
            Kepala Keluarga
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-1/2 h-full bg-secondary-40 rounded-s-xl p-4 text-white text-heading-1 flex items-center justify-center">
          3.355
          </div>
          <div className="w-full h-full font-semibold text-black text-heading-3 bg-secondary-10 rounded-e-xl p-4 flex items-center justify-center">
            Penduduk Perempuan
          </div>
        </div>
      </div>
    </>
  );
}
