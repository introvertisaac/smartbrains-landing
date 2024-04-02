"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 102;
    if (start === end) return;

    // Find increment
    const stepTime = 40;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(function () {
      start += increment;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0 bg-[#F3F5F9] lg:pt-10">
      {/* text */}
      <div className="flex flex-col gap-10 lg:ml-20 text-center lg:text-left w-full lg:w-1/2 pt-10 lg:pt-20">
        <div className="lg:gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-black">
            Crafting Futures through Coding for Kids
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-500 font-normal pt-4">
            We empower schools to teach Computer Science <br /> successfully
          </p>
        </div>

        {/* image on small screens */}
        <div className="lg:hidden px-8">
          <Image
            src="/kids.svg"
            layout="responsive"
            width={800}
            height={600}
            objectFit="contain"
            alt="Kids Learning"
          />
        </div>

        {/* icons section */}
        <div className="flex lg:flex-row gap-10 sm:gap-20 items-center justify-center lg:justify-start">
          {/* counter section */}
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0">
            <div className="flex flex-col justify-center align-middle">
              <h2 className="font-semibold text-lg sm:text-xl">Taught in</h2>
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">
                {count}
              </p>{" "}
              {/* Dynamic counter */}
              <p className="font-semibold text-lg sm:text-xl">schools</p>
            </div>
          </div>

          {/* partners section */}
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0">
            <div className="flex flex-col justify-center align-middle">
              <h2 className="font-semibold text-lg sm:text-xl">
                In Partnership With
              </h2>
              <div className="flex flex-row space-x-2 pt-2 gap-4">
                <Image src="/kpsa.jpeg" alt="Logo 1" width={60} height={60} />{" "}
                {/* Logos */}
                <Image
                  src="/mastercard.jpeg"
                  alt="Logo 2"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-4">
          <Button variant="destructive" size="xxl">
            Join Us <ChevronRight className="ml-20 mr-0 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* image on large screens */}
      <div className="hidden lg:flex lg:w-1/2">
      <div className="hidden lg:flex lg:w-3/4 pl-1/2 pt-10">
        <Image
          src="/kids.svg"
          layout="responsive"
          width={2}
          height={1}
          objectFit="contain"
          className="lg:block"
          alt="Kids Learning"
        />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
