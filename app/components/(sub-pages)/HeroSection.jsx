import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const HeroSection = ({ hero }) => {
  return (
    <div className="bg-cover bg-center py-12 px-4 sm:px-6 md:px-12 relative" style={{
      backgroundImage: `url(${hero.backgroundImage.src})`,
    }}>
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={200}
            height={200}
            className="w-full h-auto"
          />
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">{hero.title}</h2>
          <p className="text-gray-600 mb-4">{hero.description}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {hero.features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
              <Link href="/contact" target="_blank" passHref>
                <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  {hero.ctaButton.label}
                </Button>
                </Link>
                <Button variant="link" className="text-red-600 flex items-center hover:text-gray-800 transition-colors duration-300">
                  <MdDownload className="mr-2" />
                  {hero.downloadButton.label}
                </Button>
              </div>
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <FaStar className="text-yellow-400 mr-1" />
                <FaStar className="text-yellow-400 mr-1" />
                <FaStarHalfAlt className="text-yellow-400 mr-1" />
                <FaRegStar className="text-gray-400 mr-1" />
                <span className="text-gray-600 ml-2">{hero.rating}</span>
              </div>
              <h3 className="text-2xl font-bold">{hero.contentTitle}</h3>
              <ul className="text-gray-600 space-y-2">
                {hero.contentList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-gray-600">{hero.extraDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-start h-[300px] overflow-hidden">
        <div className="w-2/3 mr-8 h-full z-10 relative">
          <h2 className="text-3xl font-bold mb-4">{hero.title}</h2>
          <p className="text-gray-600 mb-6">{hero.description}</p>
          <div className="grid grid-cols-4 gap-4 mb-6">
            {hero.features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-md font-semibold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className='pt-[8%]'><p className="text-gray-600 mb-4">{hero.extraDescription}</p></div>
        </div>
        <div className="w-1/5 rounded-lg shadow-lg overflow-hidden h-auto z-20 absolute right-20 bg-white">
          <div className="rounded-lg overflow-hidden">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex flex-col space-y-2">
            <Link href="/contact" target="_blank" passHref>
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                {hero.ctaButton.label}
              </Button>
              </Link>
              <Button variant="link" className="text-red-600 flex items-center hover:text-gray-800 transition-colors duration-300">
                <MdDownload className="mr-2" />
                {hero.downloadButton.label}
              </Button>
            </div>
            <div className="flex items-center">
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStar className="text-yellow-400 mr-1" />
              <FaStarHalfAlt className="text-yellow-400 mr-1" />
              <FaRegStar className="text-gray-400 mr-1" />
              <span className="text-gray-600 ml-2">{hero.rating}</span>
            </div>
            <h3 className="text-2xl font-bold">{hero.contentTitle}</h3>
            <ul className="text-gray-600 space-y-2">
              {hero.contentList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;