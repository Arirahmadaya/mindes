import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, MapPin } from "react-feather";

const Agenda = () => {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/agenda`
        );
        setAgenda(response.data.data);
      } catch (error) {
        console.error("Terjadi kesalahan", error);
      }
    };

    fetchAgenda();
  }, []);

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = String(date.getDate()).padStart(2, "0");
    return { day, month, year };
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <ul className="timeline timeline-vertical lg:w-auto lg:m-0 -ml-28">
        {agenda.map((item, index) => {
          const { day, month, year } = formatDate(item.tgl);
          const isLastItem = index === agenda.length - 1;

          return (
            <li className={`gap-x-5 ${!isLastItem ? "mb-3" : ""}`} key={index}>
              <div className="text-center timeline-start">
                <p className="font-bold lg:text-heading-5 text-body-1">{day}</p>
                <p className="lg:text-heading-5 text-body-1">
                  {month} {year}
                </p>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end text-white bg-primary-40 rounded-xl w-full min-h-[210px] p-4 mb-3">
                <div className="flex items-center justify-between gap-10 text-center">
                  <h1 className="font-semibold lg:text-heading-3 text-heading-6">
                    {item.kegiatan}
                  </h1>
                  <p className="font-bold lg:text-caption-1 text-caption-2">
                    {item.jam} WIB - Selesai
                  </p>
                </div>

                <p className="caption-2">{item.deskripsi}</p>
                <div className="flex gap-5 mt-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} /> {item.tempat}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={20} /> {item.hari}
                  </div>
                </div>
              </div>
              {!isLastItem && (
                <hr className="w-full my-1 border-t-2 border-gray-300" />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Agenda;
