import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import Typical from "react-typical";

const Carousel = () => {
  const slides = [
    { url: "/img/carousel1.png" },
    { url: "/img/carousel2.png" },
    { url: "/img/carousel3.png" },
    
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
    }, 5000);
    return () => clearInterval(interval);
  }, [currIndex]);

  return (
    <div className="relative m-auto group ">
      <div
        style={{
          backgroundImage: `url(${slides[currIndex].url}) `,
          filter: "blur(1.5px)"
        }}
        className="w-full h-96 md:h-[580px] duration-500 bg-center bg-cover"
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <h1 className="text-center font-bold lg:text-display-2 md:text-heading-4 text-heading-6 text-white md:px-16 lg:px-40 px-5">
          <Typical
            steps={["Selamat Datang di Website Resmi Kalinyamat Kulon", 500]}
            wrapper="span"
          />
        </h1>
      </motion.div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-heading-2 rounded-s-full lg:p-2 text-white/70 cursor-pointer">
        <ChevronLeft onClick={prevSlide} size={40} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-heading-2 rounded-s-full lg:p-2 text-white/70 cursor-pointer">
        <ChevronRight onClick={nextSlide} size={40} />
      </div>
    </div>
  );
};

export default Carousel;
// filter: "blur(5px)", Untuk Blur
