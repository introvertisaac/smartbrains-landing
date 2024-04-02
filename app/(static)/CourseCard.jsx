import React from 'react';

const Coursecard = ({ image, title, paragraph }) => (
  <div className="rounded-lg cursor-pointer overflow-hidden shadow-lg w-64 h-80 mx-auto lg:max-w-full border-2 border-blue-500/50 flex flex-col">
    <div className="w-full h-3/5 p-4">
      <img className="w-full h-full object-scale-down" src={image} alt={title} />
    </div>
    <div className="px-6 py-10 flex-grow">
      <div className="font-bold mb-2">{title}</div>
      <p className="text-gray-700 text-base">{paragraph}</p>
    </div>
  </div>
);

export default Coursecard;
