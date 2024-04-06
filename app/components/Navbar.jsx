import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-md py-3 md:py-4 flex justify-between px-10">
      <div className="flex items-center">
        <a href="tel:+1234567890" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">
          +1 (234) 567-890
        </a>
      </div>
      <div className="flex items-center space-x-6 md:space-x-8 justify-end">
        <div className="hidden md:flex items-center space-x-6 overflow-x-auto scrollbar-hide">
          <Link href="/courses" className="text-gray-600 hover:text-gray-800 text-sm md:text-base whitespace-nowrap">
            Courses
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 text-sm md:text-base whitespace-nowrap">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 text-sm md:text-base whitespace-nowrap">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center justify-end space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">
            About Us
          </Link>
          <Link href="/courses" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">
            Courses
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 text-sm md:text-base">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;