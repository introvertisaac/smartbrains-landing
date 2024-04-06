import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroImage = () => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src="/css.jpeg"
        alt="Hero Image"
        width={300}
        height={300}
        className="w-full h-auto"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 relative">
      {/* Mobile View */}
      <div className="block md:hidden">
        <HeroImage />
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Unleash Your Potential</h2>
          <p className="text-gray-600 mb-4">
            Discover the transformative power of our program and unlock your true
            potential. Experience personalized guidance and support every step
            of the way.
          </p>
          <div className="flex items-center mb-6">
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStarHalfAlt className="text-yellow-400 mr-1" />
            <FaRegStar className="text-gray-400 mr-1" />
            <span className="text-gray-600 ml-2">4.5/5</span>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  Get Started
                </Button>
                <Button variant="link" className="text-red-600 flex items-center hover:text-gray-800 transition-colors duration-300">
                  <MdDownload className="mr-2" />
                  Download Curriculum
                </Button>
              </div>
              <h3 className="text-2xl font-bold">Unlock Your Potential</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Personalized Guidance</li>
                <li>Structured Curriculum</li>
                <li>Hands-on Workshops</li>
                <li>Mentorship Programs</li>
                <li>Networking Opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-start h-[400px] overflow-hidden">
        <div className="w-2/3 mr-8 h-full z-10 relative">
          <h2 className="text-3xl font-bold mb-4">Unleash Your Potential</h2>
          <p className="text-gray-600 mb-6">
            Discover the transformative power of our program and unlock your true
            potential. Experience personalized guidance and support every step
            of the way.
          </p>
          <div className="flex items-center mb-6">
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStar className="text-yellow-400 mr-1" />
            <FaStarHalfAlt className="text-yellow-400 mr-1" />
            <FaRegStar className="text-gray-400 mr-1" />
            <span className="text-gray-600 ml-2">4.5/5</span>
          </div>
        </div>
        <div className="w-1/4 rounded-lg shadow-lg overflow-hidden h-auto z-20 absolute right-20 bg-white">
          <HeroImage />
          <div className="p-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Get Started
              </Button>
              <Button variant="link" className="text-red-600 flex items-center hover:text-gray-800 transition-colors duration-300">
                <MdDownload className="mr-2" />
                Download Curriculum 
              </Button>
            </div>
            <h3 className="text-2xl font-bold">Unlock Your Potential</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Personalized Guidance</li>
              <li>Structured Curriculum</li>
              <li>Hands-on Workshops</li>
              <li>Mentorship Programs</li>
              <li>Networking Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;