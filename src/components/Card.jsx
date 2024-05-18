import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function CardBerita() {
  const list = [
    {
      title: "KANTOR PELAYANAN MASYARAKAT",
      artikel:
        "Senin, 06 Mei 2024. Kantor Pelayanan Masyarakat Kalinyamat Kulon telah beroperasi kembali seperti pada hari biasanya, kembali dibukanya ini masyarakat dapat melakukan administrasi seperti biasanya ...",
      img: "/img_berita/berita1.jpg",
      kunjungan: "1.000",
      penulis: "ferianta",
      tanggal: "6 Mei 2025",
    },
    {
      title: "KANTOR PELAYANAN MASYARAKAT",
      artikel:
        "Senin, 06 Mei 2024. Kantor Pelayanan Masyarakat Kalinyamat Kulon telah beroperasi kembali seperti pada hari biasanya, kembali dibukanya ini masyarakat dapat melakukan administrasi seperti biasanya ...",
      img: "/img_berita/berita2.jpg",
      kunjungan: "1.000",
      penulis: "ferianta",
      tanggal: "6 Mei 2025",
    },
    {
      title: "KANTOR PELAYANAN MASYARAKAT",
      artikel:
        "Senin, 06 Mei 2024. Kantor Pelayanan Masyarakat Kalinyamat Kulon telah beroperasi kembali seperti pada hari biasanya, kembali dibukanya ini masyarakat dapat melakukan administrasi seperti biasanya ...",
      img: "/img_berita/berita3.jpg",
      kunjungan: "1.000",
      penulis: "ferianta",
      tanggal: "6 Mei 2025",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 mx-16 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="p-0 overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px]"
              src={item.img}
            />
            <div className="px-3 py-5">
              <b className="py-12">{item.title}</b>
              <div className="py-2">
                <p className="text-default-500">{item.artikel}</p>
              </div>
            </div>
          </CardBody>
          <CardFooter>
            <div className="items-center flex-grow ">
              <div className="flex gap-2">
                <Image
                  alt="Breathing app icon"
                  className="w-4 h-4"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-black text-tiny">{item.penulis}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Image
                  alt="Breathing app icon"
                  className="w-4 h-4"
                  src="https://nextui.org/images/breathing-app-icon.jpeg"
                />
                <div className="flex flex-col">
                  <p className="text-black text-tiny">{item.kunjungan}</p>
                </div>
              </div>
            </div>

            <Button size="sm" className="bg-primary-30" rounded="">
              {item.tanggal}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
