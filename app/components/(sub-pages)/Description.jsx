import React from 'react';
import Image from 'next/image';

const InstructorsComponent = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 w-full ">
        <div className='w-full md:w-3/5'>
      <h2 className="text-3xl font-bold mb-8 text-center">Our Instructors</h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex justify-center">
            <Image
              src="/sub-pages/hands.png"
              alt="Instructors"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/2 p-4">
            <div className="bg-pink-100 shadow-lg rounded-lg p-6 h-40">
              <h2 className="text-2xl font-bold mb-4">300+</h2>
              <p className="text-gray-600">
                graduate IT Instructors <br /> from India
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-4">
            <div className="bg-pink-100 shadow-lg rounded-lg p-6 h-40">
              <h2 className="text-2xl font-bold mb-4">7+</h2>
              <p className="text-gray-600">Years coding experience</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-4">
            <div className="bg-pink-100 shadow-lg rounded-lg p-6 h-40">
              <h2 className="text-2xl font-bold mb-4">91%</h2>
              <p className="text-gray-600">Female teachers</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-4">
            <div className="bg-pink-100 shadow-lg rounded-lg p-6 h-40">
              <h2 className="text-2xl font-bold mb-4">10+</h2>
              <p className="text-gray-600">Coding languages</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md">
          Try a free class
        </button>
      </div>
      </div>
    </div>
  );
};

export default InstructorsComponent;