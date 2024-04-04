import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const CourseCard = ({ logo, title, subtitle, buttonText, buttonOnClick, backgroundImage }) => {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-lg shadow-lg mx-auto py-4 px-6 md:py-8 md:px-10 relative"
      style={{
        width: '300px', // Fixed width for mobile
        maxWidth: '400px', // Fixed width for desktop
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="bg-white rounded-full p-2 my-2 relative z-10">
        <Image src={logo} alt={title} width={80} height={80} className="rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <h3 className="text-lg font-semibold mb-4 text-center">{subtitle}</h3>
        <Button variant="coursesbtngreen" size="thin" onClick={buttonOnClick}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default CourseCard;