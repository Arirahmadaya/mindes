import React from "react";
import { Typography } from "@material-tailwind/react";

const religions = [
  { icon: "☪️", name: "Islam", count: "8.840" },
  { icon: "✝️", name: "Kristen Katolik", count: "-" },
  { icon: "✝️", name: "Kristen Protestan", count: "4" },
  { icon: "☸️", name: "Buddha", count: "-" },
  { icon: "🕉️", name: "Hindu", count: "-" },
  { icon: "🕎", name: "Konghucu", count: "-" },
  { icon: "➕", name: "Lainnya", count: "-" },
];

const ReligionCard = ({ icon, name, count }) => (
  <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-4 flex flex-col items-center justify-center h-40 w-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
    <div className="text-4xl text-blue-700">{icon}</div>
    <Typography className="text-lg font-semibold mt-2 text-blue-700">{name}</Typography>
    <Typography className="text-md mt-1 text-blue-700">{count}</Typography>
  </div>
);

const PemelukAgama = () => (
  <div className="flex justify-center mx-5 md:mx-10 lg:mx-20 my-5">
    <div className="bg-white rounded-lg w-full transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div className="bg-blue-100 rounded-tl-lg rounded-br-[20px] inline-block min-w-max">
        <Typography className="text-heading-4 font-semibold text-center text-blue p-5">
          Pemeluk Agama
        </Typography>
      </div>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {religions.slice().map((religion, index) => (
          <ReligionCard
            key={index}
            icon={religion.icon}
            name={religion.name}
            count={religion.count}
          />
        ))}
        

      </div>
    </div>
  </div>
);

export default PemelukAgama;
