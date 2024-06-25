import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Calendar, Monitor, User } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function CardBerita({ list = [] }) {
  const navigate = useNavigate();

  const formatDate = (datetime) => {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
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
    <div className="gap-6 grid md:grid-cols-2 lg:grid-cols-3">
      {list.length > 0 ? list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => navigate(`/berita/${item.id_berita}`)}
          className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 justify-center"
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
            <div className="px-3 pt-5">
              <b className="text-body-2">{item.judul}</b>
              <div className="py-2">
                <p
                  className="text-caption-1"
                  dangerouslySetInnerHTML={{ __html: truncateText(item.artikel, 25) }}
                ></p>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pr-0 pb-0">
            <div className="items-center flex-grow -mt-2">
              <div className="flex gap-2">
                <User size={15} />
                <div className="flex flex-col">
                  <p className="text-black text-caption-2">{item.nama}</p>
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
      )) : (
        <p className="text-center w-full">No news available.</p>
      )}
    </div>
  );
}
