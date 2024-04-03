"use client"
import React, { useRef } from "react";
import CourseCard from "../(static)/CourseCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col justify-between items-center py-8 md:py-16 overflow-x-hidden mx-auto">
      <h2 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10 text-center">Our Courses</h2>
      <div className="w-full flex flex-col items-center justify-center">
        <Slider {...settings} ref={sliderRef} className="w-full">
          <div className="px-2 md:px-4 courseCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-semibold text-lg md:text-xl text-center">For Grade 1, 2 & 3</p>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <div className="flex flex-row justify-center gap-4 md:gap-8">
                <CourseCard image="/html.jpg" title="HTML" paragraph="Learn to make websites" />
                <CourseCard image="/css.jpeg" title="CSS" paragraph="Style your websites" />
              </div>
            </motion.div>
          </div>

          <div className="px-2 md:px-4 courseCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-semibold text-lg md:text-xl text-center">For Grade 4, 5 & 6</p>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <div className="flex flex-row justify-center">
                <CourseCard
                  image="/android.jpeg"
                  title="Android Development"
                  paragraph="Make mobile applications"
                />
              </div>
            </motion.div>
          </div>

          <div className="px-2 md:px-4 courseCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-semibold text-lg md:text-xl text-center">For Grade 7 & 8</p>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <div className="flex flex-row justify-center">
                <CourseCard
                  image="/robotics.jpeg"
                  title="Robotics"
                  paragraph="Make your own robots"
                />
              </div>
            </motion.div>
          </div>
        </Slider>
      </div>
      <div className="pt-8 md:pt-10">
        <Button variant="destructive" size="lg">
          Join Us
        </Button>
      </div>
    </div>
  );
};

export default Courses;