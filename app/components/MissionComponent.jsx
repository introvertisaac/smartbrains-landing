import React from 'react';
import Image from 'next/image';
import ModalVideo from '@/app/components/AboutVideoModal';


const MissionComponent = () => {
  return (
    <>
    
    <div className="bg-white">
      {/* Top Subcomponent */}
      <div className="relative">
        <Image
          src="/page-bg.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 relative">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            OUR MISSION
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Making commerce better for everyone
          </p>
          <p className="mt-4 text-lg text-gray-500 text-center max-w-3xl mx-auto">
            We help people achieve independence by making it easier to start,
            run, and grow a business. We believe the future of commerce has more
            voices, not fewer, so we&apos;re reducing the barriers to business
            ownership to make commerce better for everyone.
          </p>
        </div>
      </div>

      {/* Bottom Subcomponent */}
       <div className="flex py-20 flex-col w-full md:flex-row justify-center ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Modal */}
          <div className="p-8 rounded-lg shadow-lg bg-green-200 w-full ">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
              OUR PEOPLE
            </h3>
            <p className="text-xl text-gray-600 mb-6">
              Creating a community for impact
            </p>
            <p className="text-lg text-gray-500 md:w-1/2">
              Shopify has grown from 5 people in a coffee shop to over 5,000
              across the globe. With over 1,000,000 businesses powered by
              Shopify, we care deeply about the work we do. We&apos;re constant
              learners who thrive on change and seek to have an impact in
              everything we do.
            </p>
          </div>

          {/* Video Modal */}
          <div className=" rounded-lg shadow-lg overflow-hidden relative  md:-left-1/4">
            <ModalVideo
              thumb={{
                src: 'https://res.cloudinary.com/doi21kvzt/video/upload/v1711188933/y2mate.com_-_Smart_Brains_Kenya_Founders_Intro_1080p_snankl.jpg',
                width: { mobile: 320, lg: 700 },
                height: { mobile: 160, lg: 900 },
                alt: 'Thumbnail image description',
              }}
              video={{
                src: 'https://res.cloudinary.com/doi21kvzt/video/upload/v1711188933/y2mate.com_-_Smart_Brains_Kenya_Founders_Intro_1080p_snankl.mp4',
                width: { mobile: 640, lg: 1920 },
                height: { mobile: 360, lg: 2080 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default MissionComponent;