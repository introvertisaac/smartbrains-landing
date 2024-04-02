"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaEllipsisV } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { RxDividerVertical } from "react-icons/rx";
import { ChevronRight } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-black shadow-md text-white relative py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Hamburger Menu / Close Icon */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link href="#" className="px-3 py-2 rounded-md text-sm font-medium">
                <Button variant="destructive" size="lg">
                  Join Us  <ChevronRight  className="ml-20 mr-0 h-6 w-6" />
                </Button>
              </Link>
              <RxDividerVertical size={30} className="mx-4 size-10 text-gray-400" />
              <Link
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                <Button variant="ghost" size="lg">
                Tutors Dash
                </Button>
              </Link>
              <Link
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                <Button variant="outline" size="lg">
                   Join Class
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-y-0 left-0 z-100 w-1/3 h-full bg-[#FFF7E1] overflow-y-auto mobile-menu transition-all duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }">
          {/* Logo */}
          <div className="flex justify-center py-4">
            <Link href="/">
              <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link href="#" className="block rounded-md text-base font-medium text-black">
              <Button variant="destructive" size="lg" className="w-full">
                Join Us
              </Button>
            </Link>
            <Link href="#" className="block rounded-md text-base font-medium text-black">
              <Button variant="destructive" size="lg" className="w-full">
              Tutors Dash 
              </Button>
            </Link>
            <Link href="#" className="block rounded-md text-base font-medium text-black">
              <Button variant="destructive" size="lg" className="w-full">
              Join Class
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;