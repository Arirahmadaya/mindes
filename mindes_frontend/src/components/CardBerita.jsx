import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Monitor, User } from "react-feather";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardBerita() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://data.mindes.my.id/berita");
      const dataWithBlobUrls = await Promise.all(response.data.data.map(async item => {
        if (item.img_berita) {
          try {
            const imgResponse = await axios.get(`http://data.mindes.my.id/berita/img/${item.id_berita}`, {
              responseType: 'blob'
            });
            item.img_berita_url = URL.createObjectURL(imgResponse.data);
          } catch (error) {
            console.error("Error loading image for item", item.id_berita, error);
            item.img_berita_url = null; // Set to null if image fetch fails
          }
        }
        return item;
      }));
      setList(dataWithBlobUrls);
    } catch (error) {
      console.error("Terjadi kesalahan", error);
      toast.error("Gagal memuat data berita.");
    }
  };

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const truncateText = (text, maxWords) => {
    const wordsArray = text.split(" ");
    if (wordsArray.length > maxWords) {
      return wordsArray.slice(0, maxWords).join(" ") + " <strong>Lihat selengkapnya...</strong>";
    }
    return text;
  };

  return (
    <div className="gap-6 mx-16 grid md:grid-cols-2 lg:grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => navigate(`/berita/${item.id_berita}`)}
          className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500"
        >
          <CardBody className="p-0 overflow-visible">
            {item.img_berita_url ? (
              <Image
                shadow="sm"
                radius="top-lg"
                width="100%"
                alt={item.judul}
                className="w-full object-cover h-[240px]"
                src={item.img_berita_url}
              />
            ) : (
              <div className="w-full h-[240px] flex items-center justify-center bg-gray-200 text-gray-500">
                No Image
              </div>
            )}
            <div className="px-3 py-5">
              <b className="py-12">{item.judul}</b>
              <div className="py-2">
                <p
                  className="text-default-500"
                  dangerouslySetInnerHTML={{ __html: truncateText(item.artikel, 20) }}
                ></p>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pr-0 pb-0">
            <div className="items-center flex-grow -mt-2">
              <div className="flex gap-2">
                <User size={15} />
                <div className="flex flex-col">
                  <p className="text-black text-caption-2">{item.penulis}</p>
                </div>
              </div>
              <div className="flex gap-2 mt-1">
                <Monitor size={15} />
                <div className="flex flex-col">
                  <p className="text-black text-caption-2">{item.kunjungan}</p>
                </div>
              </div>
            </div>
            <div className="bg-primary-30 text-center text-body-2 font-semibold p-2 w-[80px] h-[60px] text-white rounded-tl-3xl">
              {formatDate(item.tgl)}
            </div>
          </CardFooter>
        </Card>
      ))}
      <ToastContainer />
    </div>
  );
}
