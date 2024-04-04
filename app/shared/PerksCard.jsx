import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PerksCard = ({ image, title, paragraph }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const paragraphVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: '100%', opacity: 0 },
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg w-64 h-80 mx-auto lg:max-w-full cursor-pointer  text-center "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full">
        <img className="w-full h-full object-cover flex justify-center text-center shadow-blue-100/50 items-center" src={image} alt={title} />
        <div
          className={`absolute inset-0 flex flex-col justify-end items-center p-4 ${
            isHovered ? 'bg-gray/50' : ''
          }`}
        >
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold text-white  mr-2">{title}</h3>
            
          </div>
          <motion.p
            className="text-gray-200 text-center"
            initial="hidden"
            animate={isHovered ? 'visible' : 'hidden'}
            variants={paragraphVariants}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {paragraph}
          </motion.p>
        </div>
      </div>
      <div
        className={`absolute -inset-1 rounded-lg transition-all duration-300 ${
          isHovered
            ? 'border-8  shadow-inner shadow-2xl'
            : 'border-2  shadow-none'
        }`}
      />
    </div>
  );
};

export default PerksCard;