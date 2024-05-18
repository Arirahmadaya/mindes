import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const CarouselPerangkatDesa = () => {
  const slides = [
    { url: "/img_desa/akhmad_ari.jpg" },
    { url: "/img_desa/bowo_leksono.jpg" },
    { url: "/img_desa/maksus.jpg" },
    { url: "/img_desa/sudirmo.jpg" },
    { url: "/img_desa/supriyatno.jpg" },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currIndex === 0 ? slides.length - 3 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currIndex === slides.length - 3 ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const getSlidesToShow = () => {
    const endIndex = currIndex + 3;
    if (endIndex > slides.length) {
      return slides.slice(currIndex).concat(slides.slice(0, endIndex - slides.length));
    }
    return slides.slice(currIndex, endIndex);
  };

  return (
    <div className="relative max-w-4xl p-4 mx-auto">
      <div className="flex overflow-hidden">
        {getSlidesToShow().map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.url})` }}
            className="mr-3 duration-500 bg-center bg-cover w-80 h-96"
          ></div>
        ))}
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