"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "../constants/testimonials";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react"

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    window.dispatchEvent(new Event('openChat'));
  };

  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 overflow-x-hidden" style={{ height: "520px" }}>
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">What Our Customers Say</h2>
      </div>
      <Slider {...settings} className="mb-8">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 h-80 w-70 md:w-70 flex flex-col">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-xl">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 flex-grow">
                {testimonial.testimonial}
              </p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
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
          color: #F1948A;
          font-size: 12px;
        }
      `}</style>

<div className="pt-8 md:pt-4 w-full flex justify-center">
          <Button variant="destructive" size="xxl" onClick={handleClick}>
            Join Us <ChevronRight className="ml-20 mr-0 h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;