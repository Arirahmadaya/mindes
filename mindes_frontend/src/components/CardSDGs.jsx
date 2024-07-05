import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";

const Card = ({ title, image, value, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500"
      onClick={onClick}
    >
      <div className="flex flex-col ">
        <div className="mb-2">
          <h3 className="font-bold lg:text-heading-3 text-body-1">{title}</h3>
        </div>
        <div>
          <img src={image} alt={title} className="lg:w-[120px] lg:h-[120px] w-[80px] h-[80px]" />
        </div>
      </div>
      <div className="text-right flex flex-col justify-center items-end self-end">
        <p className="lg:text-heading-4 text-heading-6 text-gray-500 lg:-mb-5 -mb-1">Nilai</p>
        <p className="lg:text-display-2  text-heading-4 font-bold">{value}</p>
      </div>
    </div>
  );
};

const TotalScoreCard = ({ score }) => {
  return (
    <div className="bg-gradient-20 rounded-lg p-4 flex flex-col justify-end md:w-2/3 w-full ml-auto transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500">
      <div>
        <h3 className="font-bold lg:text-heading-3 text-heading-5">Skor Total SDGs</h3>
        <p className=" lg:text-heading-3 text-heading-6 font-bold">Kalinyamat Kulon</p>
      </div>
      <div className="lg:text-left text-center">
        <p className="lg:text-display-1 text-heading-1 font-bold">{score}</p>
      </div>
    </div>
  );
};

const Judul = () => {
  return (
    <div className=" rounded-lg flex flex-col justify-between lg:w-[700px]">
      <div>
        <div className="font-bold md:text-heading-3 text-heading-6 mb-2 text-black hover:drop-shadow-xl">
          Sustainable Development Goals/Tujuan Pembangunan Berkelanjutan
        </div>
        <p className="text-caption-1 lg:text-body-2 text-justify">
          SDGs Desa adalah upaya terpadu mewujudkan Desa tanpa kemiskinan dan
          kelaparan, Desa ekonomi tumbuh merata, Desa peduli kesehatan, Desa
          peduli lingkungan, Desa peduli pendidikan, Desa ramah perempuan, Desa
          berjejaring, dan Desa tanggap budaya untuk percepatan pencapaian
          Tujuan Pembangunan Berkelanjutan. Dalam bahasa kerennya Sustainable
          Development Goals disingkat SDGs. SDGs Desa merupakan role pembangunan
          berkelanjutan yang akan masuk dalam program prioritas penggunaan Dana
          Desa Tahun 2024.
        </p>
      </div>
    </div>
  );
};

const CardSDgs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({});

  const cardsData = [
    {
      title: "Desa Tanpa Kemiskinan",
      image: "/sdgs/1.png",
      value: 89.71,
      description:
        "Mengakhiri kemiskinan dalam segala bentuk di manapun. Kemiskinan dipandang sebagai suatu situasi dimana seseorang tidak dapat memenuhi kebutuhan dasar minimum yang diperlukan untuk hidup layak dan bermartabat.",
    },
    {
      title: "Desa Tanpa Kelaparan",
      image: "/sdgs/2.png",
      value: 58.71,
      description:
        "Mengakhiri kelaparan, mencapai ketahanan pangan dan gizi yang baik, serta mendorong pertanian berkelanjutan.",
    },
    {
      title: "Desa Sehat dan Sejahtera",
      image: "/sdgs/3.png",
      value: 58.71,
      description:
        "Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan bagi semua usia.",
    },
    {
      title: "Pendidikan Desa Berkualitas",
      image: "/sdgs/4.png",
      value: 58.71,
      description:
        "Menjamin pendidikan yang inklusif dan berkualitas serta mendukung kesempatan belajar sepanjang hayat bagi semua orang.",
    },
    {
      title: "Keterlibatan Perempuan Desa",
      image: "/sdgs/5.png",
      value: 58.71,
      description:
        "Mencapai kesetaraan gender dan memberdayakan semua perempuan dan anak perempuan.",
    },
    {
      title: "Desa Layak Air Bersih dan Sanitasi",
      image: "/sdgs/6.png",
      value: 58.71,
      description:
        "Menjamin ketersediaan dan pengelolaan air bersih serta sanitasi yang berkelanjutan untuk semua.",
    },
    {
      title: "Desa Berenergi Bersih dan Terbarukan",
      image: "/sdgs/7.png",
      value: 58.71,
      description:
        "Menjamin akses energi yang terjangkau, andal, berkelanjutan, dan modern untuk semua.",
    },
    {
      title: "Pertumbuhan Ekonomi Desa Merata",
      image: "/sdgs/8.png",
      value: 58.71,
      description:
        "Mendorong pertumbuhan ekonomi yang inklusif dan berkelanjutan, kesempatan kerja penuh dan produktif, serta pekerjaan yang layak untuk semua.",
    },
    {
      title: "Infrastruktur dan Inovasi Desa Sesuai Kebutuhan",
      image: "/sdgs/9.png",
      value: 58.71,
      description:
        "Membangun infrastruktur yang tahan lama, mendukung industrialisasi inklusif dan berkelanjutan, serta mendorong inovasi.",
    },
    {
      title: "Desa Tanpa Kesenjangan",
      image: "/sdgs/10.png",
      value: 58.71,
      description: "Mengurangi ketimpangan di dalam dan antar negara.",
    },
    {
      title: "Kawasan Permukiman Desa Aman & Nyaman",
      image: "/sdgs/11.png",
      value: 58.71,
      description:
        "Menjadikan kota dan permukiman manusia inklusif, aman, tangguh, dan berkelanjutan.",
    },
    {
      title: "Konsumsi dan Produksi Desa Sadar Lingkungan",
      image: "/sdgs/12.png",
      value: 58.71,
      description: "Menjamin pola konsumsi dan produksi yang berkelanjutan.",
    },
    {
      title: "Desa Tanggap Perubahan Iklim",
      image: "/sdgs/13.png",
      value: 58.71,
      description:
        "Mengambil tindakan segera untuk memerangi perubahan iklim dan dampaknya.",
    },
    {
      title: "Desa Peduli Lingkungan Laut",
      image: "/sdgs/14.png",
      value: 58.71,
      description:
        "Melestarikan dan memanfaatkan secara berkelanjutan sumber daya laut, samudra, dan maritim untuk pembangunan berkelanjutan.",
    },
    {
      title: "Desa Peduli Lingkungan Darat",
      image: "/sdgs/15.png",
      value: 58.71,
      description:
        "Melindungi, merestorasi, dan mendukung pemanfaatan ekosistem darat secara berkelanjutan, mengelola hutan secara lestari, memerangi desertifikasi, menghentikan dan memulihkan kerusakan lahan, serta menghentikan kehilangan keanekaragaman hayati.",
    },
    {
      title: "Desa Damai Berkeadilan",
      image: "/sdgs/16.png",
      value: 58.71,
      description:
        "Mendukung masyarakat yang damai dan inklusif untuk pembangunan berkelanjutan, menyediakan akses keadilan untuk semua, dan membangun institusi yang efektif, akuntabel, dan inklusif di semua tingkatan.",
    },
    {
      title: "Kemitraan untuk Pembangunan Desa",
      image: "/sdgs/17.png",
      value: 58.71,
      description:
        "Menguatkan sarana pelaksanaan dan merevitalisasi kemitraan global untuk pembangunan berkelanjutan.",
    },
  ];

  const handleCardClick = (card) => {
    setModalContent(card);
    onOpen();
  };

  //   const handleClose = () => {
  //     onOpenChange(false);
  //   };

  const totalScore =
    cardsData.reduce((total, card) => total + card.value, 0) / cardsData.length;
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 lg:text-start text-center">
      <Judul />
      <TotalScoreCard
        score={totalScore.toFixed(2)}
        className="justify-center"
      />
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          image={card.image}
          value={card.value}
          onClick={() => handleCardClick(card)}
        />
      ))}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "py-6",

          header: "border-b-[1px] border-grayscale-20",

          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">
                <p className=" lg:text-heading-3 text-heading-6">{modalContent.title}</p>
              </ModalHeader>
              <ModalBody>
                <p>{modalContent.description}</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CardSDgs;
