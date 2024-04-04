import React, { useRef } from "react";
import PerksCard from "../shared/PerksCard";
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
    ],
  };

  const handleClick = () => {
    // Dispatch the 'openChat' event
    window.dispatchEvent(new Event('openChat'));
  };

  return (
    <div className="w-full flex flex-col justify-between items-center py-8 md:py-16 overflow-x-hidden mx-auto">
      <h2 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10 text-center">Why Parents and Schools Choose Our Coding Program in Kenya</h2>
      <div className="w-full flex flex-col items-center md:items-start md:flex-row md:justify-between">
        {/* For Mobile and Small Screens (< 768px) */}
        <div className="w-full md:hidden">
          <Slider {...settings} ref={sliderRef} className="w-full">
            <div className="px-2 md:px-4 PerksCard">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.5, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-row justify-center gap-4 md:gap-8">
                  <PerksCard image="/kids1.jpg" 
                  
                  //  title="We provide Laptops to every Child" paragraph="Our coding program ensures that every child has access to a laptop, enabling them to engage actively in learning and practice coding skills effectively."
                   />
                </div>
                <div className="flex justify-center items-center align-middle my-4 md:my-8">
                  <Image src="/lines.svg" height={120} width={80} alt="Lines" />
                </div>
                <p className="font-semibold text-lg md:text-xl text-center">Comprehensive Curriculum</p>
              </motion.div>
            </div>

            <div className="px-2 md:px-4 PerksCard">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.5, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-row justify-center">
                  <PerksCard
                    image="/kids-coding.jpg"
                    // title="We provide a collaboration environment"
                    // paragraph="Our coding program fosters collaboration among students by providing a supportive environment where they can share ideas, work together on projects, and learn from each other's experiences."
                  />
                </div>
                <div className="flex justify-center items-center align-middle my-4 md:my-8">
                  <Image src="/lines.svg" height={120} width={80} alt="Lines" />
                </div>
                <p className="font-semibold text-lg md:text-xl text-center">Engaging Learning Environment</p>
              </motion.div>
            </div>

            <div className="px-2 md:px-4 PerksCard">
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0.5, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex flex-row justify-center">
                  <PerksCard
                    image="/teacher.jpg"
                    // title="Adequate and well-trained teachers"
                    // paragraph="Our coding program is led by experienced and well-trained teachers who are dedicated to providing quality education and support to every child, ensuring effective learning outcomes."
                  />
                </div>
                <div className="flex justify-center items-center align-middle my-4 md:my-8">
                  <Image src="/lines.svg" height={120} width={80} alt="Lines" />
                </div>
                <p className="font-semibold text-lg md:text-xl text-center">Supportive Community</p>
              </motion.div>
            </div>
          </Slider>
        </div>

        {/* For Desktop and Larger Screens (>= 768px) */}
        <div className="hidden md:flex md:flex-row md:justify-center md:w-full">
          <div className="px-2 md:px-4 PerksCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-row justify-center gap-4 md:gap-8">
                <PerksCard image="/kids1.jpg" 
                // title="We provide Laptops to every Child" paragraph="Our coding program ensures that every child has access to a laptop, enabling them to engage actively in learning and practice coding skills effectively."
                 />
              </div>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <p className="font-semibold text-lg md:text-xl text-center">Professional Instructors</p>
            </motion.div>
          </div>

          <div className="px-2 md:px-4 PerksCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-row justify-center">
                <PerksCard
                  image="/kids-coding.jpg"
                  // title="We provide a collaboration environment"
                  // paragraph="Our coding program fosters collaboration among students by providing a supportive environment. "
                />
              </div>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <p className="font-semibold text-lg md:text-xl text-center">Interactive Learning Materials</p>
            </motion.div>
          </div>

          <div className="px-2 md:px-4 PerksCard">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0.5, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-row justify-center">
                <PerksCard
                  image="/teacher.jpg"
                  // title="Adequate and well-trained teachers"
                  // paragraph="Our coding program is led by experienced and well-trained teachers who are dedicated to providing quality education and support to every child, ensuring effective learning outcomes."
                />
              </div>
              <div className="flex justify-center items-center align-middle my-4 md:my-8">
                <Image src="/lines.svg" height={120} width={80} alt="Lines" />
              </div>
              <p className="font-semibold text-lg md:text-xl text-center">Individualized Progress Tracking</p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="pt-8 md:pt-4">
          <Button variant="destructive" size="xxl" onClick={handleClick}>
            Join Us 
          </Button>
        </div>
    </div>
  );
};

export default Courses;
