"use client"
// PerksCard.jsx (no changes)
import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PerksCard = ({ image, paragraph }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const paragraphVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: '100%', opacity: 0 },
  };

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg w-64 h-80 mx-auto lg:max-w-full cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="w-full h-full object-cover" src={image} alt={paragraph} />
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
        <div className="flex items-center justify-center">
        
          {isHovered ? <FaArrowDown className="text-2xl text-white" /> : <FaArrowUp className="text-2xl text-white" />}
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
      <div
        className={`absolute -inset-1 rounded-lg transition-all duration-300 ${
          isHovered ? 'border-8 border-blue-500 shadow-blue-500/50 shadow-inner shadow-2xl' : 'border-2 border-blue-500/50 shadow-none'
        }`}
      />
    </div>
  );
};

export default PerksCard;