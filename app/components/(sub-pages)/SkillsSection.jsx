import React from 'react';
import Image from 'next/image';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const SkillsSectionComponent = ({ title, description, skills, imageSource }) => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src={imageSource}
            alt={title}
            width={400}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          <h3 className="text-xl font-bold mb-4">Skills you&apos;ll gain</h3>
          <ul className="list-disc pl-6 space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <IoMdCheckmarkCircle className="text-green-500 mr-2" />
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-8">
            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md">
              Try a free class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSectionComponent;
