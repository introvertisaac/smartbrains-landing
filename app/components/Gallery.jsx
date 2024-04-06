"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleClick = () => {
    // Dispatch the 'openChat' event
    window.dispatchEvent(new Event("openChat"));
  };

  const cards = [
    {
      url: "/2.jpeg",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 1,
    },
    {
      url: "/4.jpeg",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 2,
    },
    {
      url: "/4.webp",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 3,
    },
    {
      url: "/5.jpg",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 4,
    },
    {
      url: "/5.jpg",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 5,
    },
    {
      url: "/5.jpg",
      title: "St. Bhakita School",
      logo: "/stbhakita.jpeg",
      id: 6,
    },
  ];

  const groupedCards = cards.reduce((acc, card) => {
    if (!acc[card.id]) {
      acc[card.id] = [];
    }
    acc[card.id].push(card);
    return acc;
  }, {});

  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 overflow-x-hidden" style={{ height: "520px" }}>
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">Gallery</h2>
      </div>
      <Slider {...settings} ref={sliderRef} className="mb-8">
        {Object.keys(groupedCards).map((id) => (
          <div key={id} className="px-4">
            <div className="relative aspect-video w-[350px] overflow-hidden rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50">
              <Image
                src={groupedCards[id][0].url}
                alt={groupedCards[id][0].title}
                fill
                className="transition-transform duration-300 group-hover:scale-105"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 z-10 flex items-center justify-center p-4">
                <Image
                  src={groupedCards[id][0].logo}
                  alt="logo"
                  className="h-8 w-8 mr-2"
                  width={32}
                  height={32}
                />
                <p className="text-sm text-white">{groupedCards[id][0].title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="pt-5">
        <style jsx global>{`
          .slick-dots li.slick-active button:before {
            color: blue;
            font-size: 15px;
          }
          .slick-dots li button:before {
            color: #f1948a;
            font-size: 12px;
          }
        `}</style>
        <div className="pt-8 md:pt-4 w-full flex justify-center">
          <Button variant="destructive" size="xxl" onClick={handleClick}>
            Browse More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GalleryCarousel;