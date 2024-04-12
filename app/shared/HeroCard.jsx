// components/HeroContainer.js
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const HeroCard = ({
  title,
  description,
  count,
  partners,
  backgroundImage,
  onJoinClick,
}) => {
  const handleClick = () => {
    onJoinClick();
  };

  return (
    <div
      className="flex flex-col overflow-x-hidden lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0 lg:pt-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col gap-10 lg:ml-20 text-center lg:text-left w-full lg:w-1/2 pt-10 lg:pt-20">
        <div className="lg:gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-black">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-500 font-normal pt-4">
            {description}
          </p>
        </div>
        <div className="flex lg:flex-row gap-10 sm:gap-20 items-center justify-center lg:justify-start">
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0">
            {/* <div className="flex flex-col justify-center align-middle">
              <h2 className="font-semibold text-lg sm:text-xl">Taught in</h2>
              <p className="text-3xl sm:text-4xl font-bold text-blue-700">
                {count}{" "}
              </p>
              <p className="font-semibold text-lg sm:text-xl">schools</p>
            </div> */}
          </div>
          <div className="flex flex-row sm:flex-col space-x-4 sm:space-x-0">
            {/* <div className="flex flex-col justify-center align-middle">
              <h2 className="font-semibold text-lg sm:text-xl">
                In Partnership With
              </h2>
              <div className="flex flex-row space-x-2 pt-2 gap-4">
                {partners.map((partner, index) => (
                  <Image
                    key={index}
                    src={partner.src}
                    alt={partner.alt}
                    width={60}
                    height={60}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </div>
        <div className="pt-8 md:pt-4">
        <Link href="/contact" passHref>
          <Button variant="destructive" size="xxl" href="/contact">
            Join Us <ChevronRight className="ml-20 mr-0 h-6 w-6" />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;