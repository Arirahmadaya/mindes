import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function Galery() {
  const list = [
    {
      img: "/img_berita/berita1.jpg",
    },
    {
      img: "/img_berita/berita2.jpg",
    },
    {
      img: "/img_berita/berita3.jpg",
    },
    {
      img: "/img_berita/berita4.jpg",
    },
    {
      img: "/img_berita/berita5.jpg",
    },
    {
      img: "/img_berita/berita6.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 lg:gap-6 gap-2 sm:grid-cols-3 ">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500"
          >
            <CardBody className="p-0 overflow-visible ">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                width="100%"
                className="w-full lg:h-72 sm:h-52 object-cover "
                src={item.img}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}
