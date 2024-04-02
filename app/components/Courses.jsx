"use client"
import React, { useRef, useEffect, useState } from "react";
import CourseCard from "../(static)/CourseCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Courses = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const courseCardWidth = useRef(null);
  const courseCards = useRef([]);
  const intervalId = useRef(null);

  useEffect(() => {
    const cards = Array.from(carouselRef.current.querySelectorAll(".courseCard"));
    courseCards.current = cards;

    if (cards.length > 0) {
      courseCardWidth.current = cards[0].offsetWidth;
    }

    // Start the automatic carousel
    intervalId.current = setInterval(() => {
      scrollToIndex((currentIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(intervalId.current);
  }, []);

  const scrollToIndex = (index) => {
    const scrollDistance = index * courseCardWidth.current;
    carouselRef.current.scrollTo({
      left: scrollDistance,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <div className="w-full flex flex-col justify-between items-center py-8 md:py-16 overflow-hidden mx-auto">
      <h2 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10 text-center">Our Courses</h2>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          className="overflow-x-hidden flex scrollbar-none w-full justify-center"
          ref={carouselRef}
        >
          {/* Grade 1, 2 & 3 */}
          <motion.div
            className="flex flex-col items-center px-2 md:px-4 courseCard"
            initial={{ opacity: 0.5, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-lg md:text-xl text-center">For Grade 1, 2 & 3</p>
            <div className="flex justify-center items-center align-middle my-4 md:my-8">
              <Image src="/lines.svg" height={120} width={80} alt="Lines" />
            </div>
            <div className="flex flex-row justify-center gap-4 md:gap-8">
              <CourseCard
                image="/css.jpeg"
                title="HTML"
                paragraph="Learn to make websites"
              />
              <CourseCard
                image="/css.jpeg"
                title="CSS"
                paragraph="Style your websites"
              />
            </div>
          </motion.div>

          {/* Grade 4, 5 & 6 */}
          <motion.div
            className="flex flex-col items-center px-2 md:px-4 courseCard"
            initial={{ opacity: 0.5, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-lg md:text-xl text-center">For Grade 4, 5 & 6</p>
            <div className="flex justify-center items-center align-middle my-4 md:my-8">
              <Image src="/lines.svg" height={120} width={80} alt="Lines" />
            </div>
            <div className="flex flex-row justify-center">
              <CourseCard
                image="/css.jpeg"
                title="Android Development"
                paragraph="Make mobile applications"
              />
            </div>
          </motion.div>

          {/* Grade 7 & 8 */}
          <motion.div
            className="flex flex-col items-center px-2 md:px-4 courseCard"
            initial={{ opacity: 0.5, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-lg md:text-xl text-center">For Grade 7 & 8</p>
            <div className="flex justify-center items-center align-middle my-4 md:my-8">
              <Image src="/lines.svg" height={120} width={80} alt="Lines" />
            </div>
            <div className="flex flex-row justify-center">
              <CourseCard
                image="/css.jpeg"
                title="Robotics"
                paragraph="Make your own robots"
              />
            </div>
          </motion.div>
        </motion.div>
        <div className="flex mt-4 md:hidden">
          {courseCards.current.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
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