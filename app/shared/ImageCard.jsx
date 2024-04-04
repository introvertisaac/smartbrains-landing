import React from 'react';

const ImageCard = ({ image, title, logo }) => (
  <div className="relative rounded-lg cursor-pointer overflow-hidden shadow-lg w-64 h-60 mx-auto lg:max-w-full  flex flex-col">
    <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end  space-x-2">
      <img className="w-6 h-6" src={logo} alt="logo" />
      <div className="text-xl font-normal text-white">{title}</div>
    </div>
  </div>
);

export default ImageCard;
