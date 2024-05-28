import React from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Monitor, User } from "react-feather";

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
    {
      title: "KANTOR PELAYANAN MASYARAKAT",
      artikel:
        "Senin, 06 Mei 2024. Kantor Pelayanan Masyarakat Kalinyamat Kulon telah beroperasi kembali seperti pada hari biasanya, kembali dibukanya ini masyarakat dapat melakukan administrasi seperti biasanya ...",
      img: "/img_berita/berita1.jpg",
      kunjungan: "1.000",
      penulis: "ferianta",
      tanggal: "4 Mei 2025",
    },
    {
      title: "KANTOR PELAYANAN MASYARAKAT",
      artikel:
        "Senin, 06 Mei 2024. Kantor Pelayanan Masyarakat Kalinyamat Kulon telah beroperasi kembali seperti pada hari biasanya, kembali dibukanya ini masyarakat dapat melakukan administrasi seperti biasanya ...",
      img: "/img_berita/berita2.jpg",
      kunjungan: "1.000",
      penulis: "ferianta",
      tanggal: "5 Mei 2025",
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
    <div className=" gap-6 mx-16 grid md:grid-cols-2 lg:grid-cols-3 ">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className="transition duration-300 ease-in-out hover:bg-primary-30 hover:bg-opacity-15"
          
        >
          <CardBody className="p-0 overflow-visible ">
            <Image
              shadow="sm"
              radius="top-lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[240px] "
              src={item.img}
            />
            <div className="px-3 py-5">
              <b className="py-12">{item.title}</b>
              <div className="py-2">
                <p className="text-default-500">{item.artikel}</p>
              </div>
            </div>
          </CardBody>
          <CardFooter className=" pr-0 pb-0">
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
            <div className="bg-primary-30 text-center text-body-2 font-semibold p-2 w-[80px] h-[60x] text-white rounded-tl-2xl rounded-br-2xl">{item.tanggal}</div>
     
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
