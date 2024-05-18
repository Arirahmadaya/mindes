import React from "react";
import {Card, CardBody, Image} from "@nextui-org/react";

export default function Galery() {
  const list = [
    {
      img: "/img_berita/berita1.jpg",
    },
    {
      title: "Tangerine",
      img: "/img_berita/berita2.jpg",
    },
    {
      title: "Raspberry",
      img: "/img_berita/berita3.jpg",
    },
    {
      title: "Lemon",
      img: "/img_berita/berita4.jpg",
    },
    {
      title: "Avocado",
      img: "/img_berita/berita5.jpg",
    },
    {
      title: "Lemon 2",
      img: "/img_berita/berita6.jpg",
    },
    ];

  return (
    <div className="mx-16">
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="p-0 overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              className="w-full object-cover h-[280px]"
              src={item.img}
            />
          </CardBody>
        </Card>
      ))}
    </div>
    </div>
  );
}

