"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"

const GalleryCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };

  const handleClick = () => {
    // Dispatch the 'openChat' event
    window.dispatchEvent(new Event('openChat'));
  };
  

  return (
    <div className="mt-20 mx-auto max-w-7xl">
      <div className="flex h-10 items-center justify-center pb-10">
        <span className="font-bold text-3xl">Gallery</span>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings} className="px-4">
          {cards.map((card) => (
            <div key={card.id} className="px-2">
              <div className="relative aspect-video w-[350px] overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
                <Image
                  src={card.url}
                  alt={card.title}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute bottom-0 z-10 flex items-center justify-center p-4">
                  <Image
                    src={card.logo}
                    alt="logo"
                    className="h-8 w-8 mr-2"
                    width={32}
                    height={32}
                  />
                  <p className="text-sm text-white">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="pt-8 md:pt-4 w-full flex justify-center">
          <Button variant="destructive" size="xxl" onClick={handleClick}>
            Join Us <ChevronRight className="ml-20 mr-0 h-6 w-6" />
          </Button>
        </div>
    </div>
  );
};

export default GalleryCarousel;

const cards = [
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 1,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 2,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 3,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 4,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 5,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 6,
  },
  {
    url: "/coding.jpg",
    title: "St. Bhakita School",
    logo: "/kpsa.jpeg",
    id: 7,
  },
];