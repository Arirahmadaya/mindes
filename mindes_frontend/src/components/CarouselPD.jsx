import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const CarouselPerangkatDesa = () => {
  const initialSlides = [
    {
      url: "/img_desa/akhmad_ari.jpg",
      name: "Akhmad Ari M., A.Md",
      jabatan: "Staf",
    },
    {
      url: "/img_desa/bowo_leksono.jpg",
      name: "Bowo Leksono",
      jabatan: "Staf",
    },
    {
      url: "/img_desa/maksus.jpg",
      name: "Maksus",
      jabatan: "Kasi P2M",
    },
    {
      url: "/img_desa/sudirmo.jpg",
      name: "Sudirmo",
      jabatan: "Staf",
    },
    {
      url: "/img_desa/supriyatno.jpg",
      name: "Supriyatno, S.IP",
      jabatan: "Sekretaris Desa",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(1);
      }
    };

    window.addEventListener("resize", updateVisibleCount);
    updateVisibleCount();

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? initialSlides.length - visibleCount : prevIndex - visibleCount));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === initialSlides.length - visibleCount ? 0 : prevIndex + visibleCount));
  };

  const visibleSlides = (startIndex) => {
    const slides = [];
    for (let i = 0; i < visibleCount; i++) {
      slides.push(initialSlides[(startIndex + i) % initialSlides.length]);
    }
    return slides;
  };

  return (
    <div className="relative p-4 lg:mx-70 mx-5">
      <div className="flex overflow-hidden justify-evenly gap-5">
        {visibleSlides(currentIndex).map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
            className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 bg-center bg-cover w-full lg:w-[320px] h-[370px] rounded-2xl flex lg:mx-0 mx-10"
          >
            <div className="w-full lg:w-[320px] h-[80px] bg-primary-10 rounded-b-2xl flex flex-col justify-center items-center text-center self-end">
              <p className="text-heading-6">{slide.name}</p>
              <p className="text-caption-2">{slide.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute left-0 p-2 -translate-y-1/2 bg-opacity-50 rounded-full cursor-pointer top-1/2 text-heading-2 text-grayscale-50 bg-grayscale-20">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-0 p-2 -translate-y-1/2 bg-opacity-50 rounded-full cursor-pointer top-1/2 text-heading-2 text-grayscale-50 bg-grayscale-20">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center space-x-2 p-4 lg:hidden">
        {initialSlides.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselPerangkatDesa;
