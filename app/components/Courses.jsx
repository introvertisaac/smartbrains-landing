import React, { useRef } from 'react';
import CourseCard from '../(static)/CourseCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
    window.dispatchEvent(new Event('openChat'));
  };
  const coursesData = [
    { logo: '/html1.png', title: 'HTML', subtitle: 'Learn to make websites', buttonText: 'Read More', buttonOnClick: handleClick, backgroundImage: '/card-gradient.svg', grade: 'Grade 1,2,3' },
    { logo: '/css.jpeg', title: 'CSS', subtitle: 'Explore web design', buttonText: 'Read More', buttonOnClick: handleClick, backgroundImage: '/card-gradient1.svg', grade: 'Grade 1,2,3' },
    { logo: '/android1.jpeg', title: 'Android Development', subtitle: 'Build mobile apps', buttonText: 'Read More', buttonOnClick: handleClick, backgroundImage: '/card-gradient.svg', grade: 'Grade 4,5,6' },
    { logo: '/robotics.jpeg', title: 'Robotics', subtitle: 'Design and build robots', buttonText: 'Read More', buttonOnClick: handleClick, backgroundImage: '/card-gradient1.svg', grade: 'Grade 7,8,9' },
  ];

  const groupedCourses = coursesData.reduce((acc, course) => {
    if (!acc[course.grade]) {
      acc[course.grade] = [];
    }
    acc[course.grade].push(course);
    return acc;
  }, {});

  return (
    <div className="w-full flex flex-col justify-between items-center py-8 md:py-16 overflow-x-hidden mx-auto">
      <h2 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10 text-center">Our Courses</h2>
      <div className="w-full flex flex-col items-center md:items-start md:flex-row md:justify-between">
        {/* For Mobile and Small Screens (< 768px) */}
        <div className="w-full md:hidden">
          <Slider {...settings} ref={sliderRef} className="w-full">
            {coursesData.map((course, index) => (
              <div key={index} className="px-2 md:px-4 courseCard">
                <CourseCard
                  logo={course.logo}
                  title={course.title}
                  subtitle={course.subtitle}
                  buttonText={course.buttonText}
                  buttonOnClick={course.buttonOnClick}
                  backgroundImage={course.backgroundImage}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* For Desktop and Larger Screens (>= 768px) */}
        <div className="hidden md:flex md:flex-row md:justify-center md:w-full">
          {Object.entries(groupedCourses).map(([grade, courses]) => (
            <div key={grade} className="flex flex-col items-center mb-4 px-2">
              <h3 className="font-bold text-lg mb-2 text-center">{grade}</h3>
              <div className="flex flex-wrap justify-center">
                {courses.map((course, index) => (
                  <div key={index} className="px-1 courseCard">
                    <CourseCard
                      logo={course.logo}
                      title={course.title}
                      subtitle={course.subtitle}
                      buttonText={course.buttonText}
                      buttonOnClick={course.buttonOnClick}
                      backgroundImage={course.backgroundImage}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Image src="/lines.svg" alt="Arrow" width={50} height={50} className="mx-auto" />
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