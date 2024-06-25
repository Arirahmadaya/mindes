import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Clock, Eye } from "react-feather";

const Beritalainnya = () => {
  const [beritaLainnya, setBeritaLainnya] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBeritaLainnya();
  }, []);

  const fetchBeritaLainnya = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/berita`
      );
      setBeritaLainnya(response.data.data);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
    }
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="w-[310px] bg-white p-6 rounded-lg shadow-md">
      <div className="text-black text-heading-6 font-bold font-['Open Sans'] leading-normal mb-4">
        Berita Lainnya
      </div>
      <div className="space-y-4">
        {beritaLainnya.map((item, index) => (
          <div
            key={index}
            className="flex items-start mb-4 cursor-pointer"
            onClick={() => navigate(`/berita/${item.id_berita}`)}
          >
            <img
              src={`${import.meta.env.VITE_API_URL}/public${item.img_berita}`}
              alt="berita lainnya"
              className="w-[75px] h-[75px] rounded-lg mr-4 object-cover"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-black text-caption2 font-bold font-['Open Sans'] leading-tight">
                {item.judul}
              </h3>
              <div className="flex gap-2 items-center text-gray-600 text-caption-2 ">
                <Clock className="w-3 h-3" />{" "}
                <span> {formatDate(item.tgl)} </span>
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-caption-2 ">
                <Eye className="w-3 h-3" />{" "}
                <span>{item.kunjungan} kali dilihat</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beritalainnya;
