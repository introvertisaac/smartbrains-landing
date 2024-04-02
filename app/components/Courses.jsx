"use client"
import React, { useRef, useEffect } from "react";
import Coursecard from "../(static)/CourseCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const Courses = () => {
  const carouselRef = useRef(null);
  const isAnimating = useRef(false);
  const courseCardWidth = useRef(null);
  const courseCards = useRef([]);

  useEffect(() => {
    const cards = Array.from(carouselRef.current.querySelectorAll(".courseCard"));
    courseCards.current = cards;

    if (cards.length > 0) {
      courseCardWidth.current = cards[0].offsetWidth;
    }

    const interval = setInterval(() => {
      if (!isAnimating.current) {
        isAnimating.current = true;
        handleRightScroll();
      }
    }, 5000); // Change the interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const handleLeftScroll = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex - 1 + courseCards.current.length) % courseCards.current.length;
    scrollToIndex(nextIndex);
    isAnimating.current = false;
  };

  const handleRightScroll = () => {
    const currentIndex = getCurrentIndex();
    const nextIndex = (currentIndex + 1) % courseCards.current.length;
    scrollToIndex(nextIndex);
    isAnimating.current = false;
  };

  const scrollToIndex = (index) => {
    const scrollDistance = index * courseCardWidth.current;
    carouselRef.current.scrollTo({
      left: scrollDistance,
      behavior: "smooth",
    });
  };

  const getCurrentIndex = () => {
    const currentScrollLeft = carouselRef.current.scrollLeft;
    return Math.round(currentScrollLeft / courseCardWidth.current);
  };

  return (
    <div className="w-full h-auto flex flex-col justify-between items-center pt-24">
      <div className="font-bold text-3xl mb-10">Our Courses</div>
      <div className="w-full flex items-center justify-center">
        <button
          className="bg-gray-300 p-2 rounded-full lg:hidden"
          onClick={handleLeftScroll}
        >
          &lt;
        </button>
        <motion.div className="overflow-x-hidden flex scrollbar-none" ref={carouselRef}>
          {/* Grade 1, 2 & 3 */}
          <motion.div
            className="flex flex-col items-center px-4 courseCard"
            initial={{ opacity: 0.5, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-xl">For Grade 1, 2 & 3</p>
            <div className="flex justify-center items-center align-middle">
              <Image src="/lines.svg" height={120} width={80} />
            </div>
            <div className="flex flex-row justify-center mt-5 gap-8">
              <Coursecard
                image="/html.png"
                title="HTML"
                paragraph="learn to make websites"
              />
              <Coursecard
                image="/css.png"
                title="CSS"
                paragraph="Style your websites"
              />
            </div>
          </motion.div>

          {/* Grade 4, 5 & 6 */}
          <motion.div
            className="flex flex-col items-center px-4 courseCard"
            initial={{ opacity: 0.5, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-xl">For Grade 4, 5 & 6</p>
            <div className="flex justify-center items-center align-middle">
              <Image src="/lines.svg" height={120} width={80} />
            </div>
            <div className="flex flex-row justify-center mt-5">
              <Coursecard
                image="/android.png"
                title="Android Development"
                paragraph="Make mobile applications"
              />
            </div>
          </motion.div>

          {/* Grade 7 & 8 */}
          <motion.div
            className="flex flex-col items-center px-4 courseCard"
            initial={{ opacity: 0.5, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-semibold text-xl">For Grade 7 & 8</p>
            <div className="flex justify-center items-center align-middle">
              <Image src="/lines.svg" height={120} width={80} />
            </div>
            <div className="flex flex-row justify-center mt-5">
              <Coursecard
                image="/robotics.png"
                title="Robotics"
                paragraph="Make your own robots"
              />
            </div>
          </motion.div>
        </motion.div>
        <button
          className="bg-gray-300 p-2 rounded-full lg:hidden"
          onClick={handleRightScroll}
        >
          &gt;
        </button>
      </div>
      <div className="pt-10">
        <Button variant="destructive" size="lg">
          Join Us
        </Button>
      </div>
    </div>
  );
};

export default Courses;