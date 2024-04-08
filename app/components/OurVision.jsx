import React from 'react';
import Image from 'next/image';
import { FaAward, FaUserFriends, FaClipboardList, FaProjectDiagram } from 'react-icons/fa';

const OurVision = () => {
  return (
    <div>
      {/* Top Component */}
      <div className="flex flex-col md:flex-row ">
        {/* Image Component */}
        <div className="w-full md:w-1/3 ">
          <Image
            src="/css.jpeg"
            alt="Sketch to Real Life"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Component */}
        <div className="md:w-2/3 bg-white text-black p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">From sketch to real life</h2>
          <p className="text-lg mb-8">
            We create spaces that people want to be in. Since 2001 we have helped our clients and customers turn ideas and aspirations into reality. The basic philosophy of Lofticus is to create individual, questionally stunning design solutions for our customers by employing unique styles and architecture. Even if you don&apos;t have a really clear idea of what you want, we will help you to get the result you dreamed of.
          </p>
          <p className="text-lg">
            We feel that interior design is one of the most important investments you will ever make. Whether your needs are residential or commercial interior design, we are always there for a complete commitment to your project, so we can create a place you are comfortable to be in.
          </p>
        </div>
      </div>

      {/* Row Component */}
      <div className="bg-pink-100 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaAward className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">15+</h3>
            <p className="text-gray-600">Awards</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">300+</h3>
            <p className="text-gray-600">Clients</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClipboardList className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Years</p>
          </div>
          <div className="flex flex-col items-center">
            <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">1500</h3>
            <p className="text-gray-600">Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;