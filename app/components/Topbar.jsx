"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaEllipsisV } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RxDividerVertical } from "react-icons/rx";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const handleClick = () => {
    // Dispatch the 'openChat' event
    window.dispatchEvent(new Event("openChat"));
  };

  return (
    <motion.nav
      className="bg-black shadow-md  relative py-2 text-white"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Desktop Contact Info */}
          <div className="hidden md:block">
            <div className="flex ">
              <div className="flex flex-col items-start">
                <a
                  href="tel:+254793474747"
                  className="mr-4 text-sm font-medium"
                >
                  +254 793 474 747
                </a>
                <a
                  href="mailto:adm@smartbrainskenya.com"
                  className="text-sm font-medium"
                >
                  adm@smartbrainskenya.com
                </a>
              </div>
              <RxDividerVertical
                size={30}
                className="mx-4 size-10 text-gray-400"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className=" flex justify-between items-center">
              <Link
                href="/courses"
                className="px-3 py-2 rounded-md text-sm font-medium text-white"
              >
                <Button variant="link" text="white">
                  Courses
                </Button>
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-white"
              >
                <Button variant="link" text="white">
                  About Us
                </Button>
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-white "
              >
                <Button variant="link" text="white">
                  contact
                </Button>
              </Link>
              <RxDividerVertical
                size={30}
                className="mx-4 size-10 text-gray-400"
              />
              <div className="flex justify-between gap-2">
                <Link
                  href="https://sbs-tutor.web.app/auth"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="sm" className="w-full">
                    Join Us <ChevronRight />
                  </Button>
                </Link>
                <Link
                  href="https://sbs-tutor.web.app/auth"
                  className="block rounded-md text-base font-medium text-white"
                >
                  <Button variant="ghost" size="sm" className="w-full">
                    Tutors Dash
                  </Button>
                </Link>
                <Link
                  href="https://smartbrains-ke.web.app/auth"
                  className="block rounded-md text-base font-medium text-white"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    Join Class
                  </Button>
                </Link>
              </div>
            </div>
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
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div
              className="fixed inset-y-0 left-0 z-100 w-auto h-full bg-[#FFF7E1] overflow-y-auto mobile-menu transition-all duration-300"
            >
              {/* Logo */}
              <div className="flex justify-center py-4">
                <Link href="/">
                  <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="px-4 pt-2 pb-6 space-y-4">
                <Link
                  href="/courses"
                  className="block rounded-md text-base font-medium text-black"
                >
                  Courses
                </Link>
                <Link
                  href="/about"
                  className="block rounded-md text-base font-medium text-black"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block rounded-md text-base font-medium text-black"
                >
                  Contact
                </Link>
                <Link
                  onClick={handleClick}
                  href="#"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="lg" className="w-full">
                    Join Us
                  </Button>
                </Link>
                <Link
                  onClick={handleClick}
                  href="#"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </Link>
                <Link
                  onClick={handleClick}
                  href="#"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="lg" className="w-full">
                    Learn More
                  </Button>
                </Link>
                <div className="mt-4 flex flex-col items-center text-black">
                  <a href="tel:+254793474747" className="mr-4 text-sm font-medium">
                    +254 793 474 747
                  </a>
                  <a
                    href="mailto:adm@smartbrainskenya.com"
                    className="text-sm font-medium"
                  >
                    adm@smartbrainskenya.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;