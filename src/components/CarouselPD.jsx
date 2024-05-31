import React, { useState } from "react";
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

  const [slides, setSlides] = useState(initialSlides);

  const prevSlide = () => {
    // Rotate to the previous slide by moving the last item to the front
    const lastSlide = slides.pop(); // Remove the last slide
    setSlides([lastSlide, ...slides]); // Add it to the front
  };

  const nextSlide = () => {
    // Rotate to the next slide by moving the first item to the end
    const [firstSlide, ...remainingSlides] = slides; // Remove the first slide
    setSlides([...remainingSlides, firstSlide]); // Add it to the end
  };

  return (
    <div className="relative p-4 mx-70">
      <div className="flex overflow-hidden justify-evenly">
        {slides.slice(0, 3).map(
          (
            slide,
            index // Only display the first three slides
          ) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${slide.url})` }}
              className="transition duration-300 ease-in-out shadow-md hover:shadow-lg hover:shadow-gray-500 bg-center bg-cover w-[320px] h-[370px] rounded-2xl flex"
            >
              <div className="w-[320px] h-[80px] bg-primary-10 rounded-b-2xl flex flex-col justify-center items-center text-center self-end">
                <p className="text-heading-6">{slide.name}</p>
                <p className="text-caption-2">{slide.jabatan}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="absolute left-0 p-2 -translate-y-1/2 bg-opacity-50 rounded-full cursor-pointer top-1/2 text-heading-2 text-grayscale-50 bg-grayscale-20">
        <ChevronLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-0 p-2 -translate-y-1/2 bg-opacity-50 rounded-full cursor-pointer top-1/2 text-heading-2 text-grayscale-50 bg-grayscale-20">
        <ChevronRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default CarouselPerangkatDesa;
