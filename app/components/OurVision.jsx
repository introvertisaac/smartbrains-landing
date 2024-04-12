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
            alt="Innovation and Creativity"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Component */}
        <div className="md:w-2/3 bg-white text-black p-8 md:p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Innovative Learning</h2>
          <p className="text-lg mb-8">
            We create learning environments that inspire curiosity and drive innovation. Since 2001, we have helped our clients transform their ideas into engaging spaces that foster growth and creativity. Our team uses unique styles and approaches to create custom design solutions for each project, ensuring every space is tailored to the specific needs and vision of our clients.
          </p>
          <p className="text-lg">
            Whether you need a School-based, self-paced or virtual space designed for optimal productivity and learning, we are committed to delivering exceptional results that reflect your unique vision. Let us help you create spaces that enhance your experience and empower your journey.
          </p>
        </div>
      </div>

      {/* Row Component */}
      <div className="bg-pink-100 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <FaAward className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Awards for Excellence</p>
          </div>
          <div className="flex flex-col items-center">
            <FaUserFriends className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">90+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div class="flex flex-col items-center">
            <FaClipboardList className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Years of Service</p>
          </div>
          <div className="flex flex-col items-center">
            <FaProjectDiagram className="text-blue-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">15,000+</h3>
            <p className="text-gray-600">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
