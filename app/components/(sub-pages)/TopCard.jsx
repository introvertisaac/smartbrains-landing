import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0 lg:pt-10 relative">
      {/* text */}
      <div className="flex flex-col gap-10 lg:ml-20 text-center lg:text-left w-full lg:w-1/2 pt-10 lg:pt-20">
        <div className="lg:gap-4">
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-black">
            About Us
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-500 font-normal pt-4">
            We are dedicated to empowering young minds with coding skills.
          </p>
        </div>

        {/* image on small screens */}
        <div className="lg:hidden px-8">
          <Image
            src="/css.jpeg"
            layout="responsive"
            width={800}
            height={600}
            objectFit="contain"
            alt="About Us"
          />
        </div>

        {/* icons section */}
        <div className="flex lg:flex-row gap-10 sm:gap-20 items-center justify-center lg:justify-start">
          {/* mission statement */}
          <div className="flex flex-col justify-center align-middle">
            <h2 className="font-semibold text-lg sm:text-xl">Our Mission</h2>
            <p className="text-lg sm:text-xl font-semibold text-blue-700">
              To make coding education accessible and fun for all kids.
            </p>
          </div>

          {/* values */}
          <div className="flex flex-col justify-center align-middle">
            <h2 className="font-semibold text-lg sm:text-xl">Our Values</h2>
            <ul className="list-disc pl-5">
              <li className="text-gray-700">Inclusivity</li>
              <li className="text-gray-700">Creativity</li>
              <li className="text-gray-700">Empowerment</li>
              <li className="text-gray-700">Innovation</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 md:pt-4">
          <Button variant="primary" size="xxl">
            Learn More <ChevronRight className="ml-20 mr-0 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* image on large screens */}
      <div className="hidden lg:flex lg:w-1/2">
        <div className="hidden lg:flex lg:w-3/4 pl-1/2 pt-10">
          <Image
            src="/css.jpeg"
            layout="responsive"
            width={2}
            height={1}
            objectFit="contain"
            className="lg:block"
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;