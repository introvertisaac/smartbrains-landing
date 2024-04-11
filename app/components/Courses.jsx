"use client"
import React, { useRef } from 'react';
import CourseCard from '../shared/CourseCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
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

  const coursesData = [
    { logo: '/html1.png', title: 'HTML', subtitle: 'Learn to make websites', buttonText: 'Read More', buttonRoute: '/html', backgroundImage: '/card-gradient.svg', grade: 'Grade 1,2,3' },
    { logo: '/css1.jpeg', title: 'CSS', subtitle: 'Explore web design', buttonText: 'Read More', buttonRoute: '/css', backgroundImage: '/card-gradient1.svg', grade: 'Grade 1,2,3 (Intermediate)' },
    { logo: '/android1.jpeg', title: 'Android Development', subtitle: 'Build mobile apps', buttonText: 'Read More', buttonRoute: '/apps', backgroundImage: '/card-gradient.svg', grade: 'Grade 4,5,6' },
    { logo: '/robotics.jpeg', title: 'Robotics', subtitle: 'Design and build robots', buttonText: 'Read More', buttonRoute: '/Robotics', backgroundImage: '/card-gradient1.svg', grade: 'Grade 7,8,9' },
    // { logo: '/webdev.png', title: 'Web Development', subtitle: 'Learn web development basics', buttonText: 'Read More', buttonRoute: '/webdev', backgroundImage: '/card-gradient.svg', grade: 'Grade 10,11,12' },
    { logo: '/scratch.png', title: 'Scratch Programming', subtitle: 'Introduction to programming with Scratch', buttonText: 'Read More', buttonRoute: '/Scratch', backgroundImage: '/card-gradient1.svg', grade: 'Grade 3,4,5' },
    { logo: '/python.png', title: 'Python for Kids', subtitle: 'Introduction to Python programming', buttonText: 'Read More', buttonRoute: '/Python', backgroundImage: '/card-gradient.svg', grade: 'Grade 6,7,8' },
    { logo: '/javascript.png', title: 'JavaScript', subtitle: 'Learn JavaScript programming', buttonText: 'Read More', buttonRoute: '/Javascript', backgroundImage: '/card-gradient1.svg', grade: 'Grade 9,10,11' },
    { logo: '/gamedev.jpg', title: 'Game Development', subtitle: 'Create games with game development tools', buttonText: 'Read More', buttonRoute: '/gamedev', backgroundImage: '/card-gradient.svg', grade: 'Grade 12' },
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
            {Object.keys(groupedCourses).map((grade) => (
              <div key={grade} className="px-2 md:px-4 courseCard">
                {groupedCourses[grade].map((course, index) => (
                  <div key={index} className="mb-4">
                    <CourseCard
                      logo={course.logo}
                      title={course.title}
                      subtitle={course.subtitle}
                      buttonText={course.buttonText}
                      buttonRoute={course.buttonRoute}
                      backgroundImage={course.backgroundImage}
                    />
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>

        {/* For Desktop and Larger Screens (>= 768px) */}
        <div className="hidden md:flex md:flex-wrap md:justify-center md:w-full">
          {Object.entries(groupedCourses).map(([grade, courses]) => (
            <>
              {courses.map((course, index) => (
                <div key={index} className="px-4 py-2 courseCard">
                  <CourseCard
                    logo={course.logo}
                    title={course.title}
                    subtitle={course.subtitle}
                    buttonText={course.buttonText}
                    buttonRoute={course.buttonRoute}
                    backgroundImage={course.backgroundImage}
                  />
                </div>
              ))}
            </>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Image src="/lines.svg" alt="Arrow" width={50} height={50} className="mx-auto" />
      </div>
      <div className="pt-8 md:pt-4">
        <Link href="/courses" passHref>
          <Button variant="destructive" size="xxl">
            Join Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Courses;