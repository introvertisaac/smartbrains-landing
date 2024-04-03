import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import PerksCard from '../(static)/PerksCard';
import { motion } from 'framer-motion';

const Perks = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const perksCardWidth = useRef(null);
  const perksCards = useRef([]);
  const intervalId = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const cards = Array.from(carouselRef.current.querySelectorAll('.perksCard'));
    perksCards.current = cards;
    if (cards.length > 0) {
      perksCardWidth.current = cards[0].offsetWidth;
    }

    // Start the automatic carousel
    intervalId.current = setInterval(() => {
      scrollToIndex((currentIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(intervalId.current);
  }, []);

  const scrollToIndex = (index) => {
    const scrollDistance = index * perksCardWidth.current;
    carouselRef.current.scrollTo({
      left: scrollDistance,
      behavior: 'smooth',
    });
    setCurrentIndex(index);
  };

  const handleScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    const direction = e.deltaY > 0 ? 1 : -1;
    const newIndex = (currentIndex + direction + perksCards.current.length) % perksCards.current.length;
    scrollToIndex(newIndex);
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  const handleClick = () => {
    // Dispatch the 'openChat' event
    window.dispatchEvent(new Event('openChat'));
  };
  

  return (
    <div className="w-full flex flex-col justify-between items-center py-8 md:py-16 overflow-hidden mx-auto" onWheel={handleScroll}>
      <h2 className="font-bold text-2xl md:text-3xl mb-8 md:mb-10 text-center">Why Schools Love Us</h2>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div className="overflow-x-hidden flex scrollbar-none w-full justify-center" ref={carouselRef}>
          <motion.div
            className="flex flex-col items-center px-2 md:px-4 perksCard"
            initial={{ opacity: 0.5, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-row justify-between gap-4 md:gap-8">
              <PerksCard image="/laptops.jpeg" paragraph="We provide laptops for every child to ensure they have access to the necessary tools for learning." />
              <PerksCard image="/teachers.jpeg" paragraph="Our coding teachers are highly experienced professionals who are passionate about empowering young minds with coding skills." />
              <PerksCard image="/collab.jpeg" paragraph="We foster a collaborative learning environment where students can engage with peers, share ideas, and work together on coding projects." />
            </div>
          </motion.div>
        </motion.div>
        <div className="flex mt-4 md:hidden">
          {perksCards.current.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="pt-8 md:pt-4">
          <Button variant="destructive" size="xxl"  onClick={handleClick}>
            Join Us 
          </Button>
        </div>
    </div>
  );
};

export default Perks;
