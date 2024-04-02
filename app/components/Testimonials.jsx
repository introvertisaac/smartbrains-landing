"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData from "../utils/testimonials";

const Testimonials = () => {
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
          slidesToShow: 2,
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

  return (
    <div className="mt-20 mx-auto max-w-7xl px-4 overflow-x-hidden" style={{ height: "500px" }}>
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl font-bold">What Our Parents and Partners Say</h2>
      </div>
      <Slider {...settings} className="slick-list">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white rounded-lg shadow-md p-6 h-80 w-72 flex flex-col">
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
      <style jsx>{`
        .slick-list {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;