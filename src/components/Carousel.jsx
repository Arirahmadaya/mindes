import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather"

const Carousel = () => {
  const slides = [
    { url: "http://source.unsplash.com/random" },
    { url: "http://source.unsplash.com/education" },
    { url: "http://source.unsplash.com/random"},
    { url: "http://source.unsplash.com/education" },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currIndex]);
  


  return (
 
      <div className="max-lg[1400px] h-[780px] w-full m-auto relative group">
        <div
          style={{ backgroundImage: `url(${slides[currIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500"
        ></div>

        <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-heading-2 rounded-s-full p-2  text-grayscale-10  cursor-pointer ">
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-heading-2 rounded-s-full p-2 text-grayscale-10  cursor-pointer ">
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
      </div>

  );
};

export default Carousel;
