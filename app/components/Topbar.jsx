"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { RxDividerVertical } from "react-icons/rx";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    courses: false,
    about: false,
    contact: false,
  });
  const [showUpArrow, setShowUpArrow] = useState({
    courses: false,
    about: false,
    contact: false,
  });
  const [activeLink, setActiveLink] = useState("courses");
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = {
    courses: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsDropdownOpen({
      courses: false,
      about: false,
      contact: false,
    });
  };

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
    setShowUpArrow((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleMouseEnter = (key) => {
    setShowUpArrow((prevState) => ({
      ...prevState,
      [key]: true,
    }));
  };

  const handleMouseLeave = (key) => {
    setShowUpArrow((prevState) => ({
      ...prevState,
      [key]: false,
    }));
  };

  const handleLinkClick = (key) => {
    setActiveLink(key);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        !event.target.closest(".mobile-menu") &&
        Object.values(dropdownRefs).every(
          (ref) => !ref.current || !ref.current.contains(event.target)
        )
      ) {
        setIsOpen(false);
        setIsDropdownOpen({
          courses: false,
          about: false,
          contact: false,
        });
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, isDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.dispatchEvent(new Event("openChat"));
  };

  const navLinks = [
    {
      label: "Courses",
      href: "/courses",
      dropdown: [
        { label: "Web Development", href: "/courses/web-development" },
        { label: "Data Science", href: "/courses/data-science" },
        { label: "Machine Learning", href: "/courses/machine-learning" },
      ],
    },
    {
      label: "About",
      href: "/about",
      dropdown: [
        { label: "Our Story", href: "/about/our-story" },
        { label: "Meet the Team", href: "/about/team" },
        { label: "FAQs", href: "/about/faqs" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
      dropdown: [
        { label: "Get in Touch", href: "/contact" },
        { label: "Careers", href: "/contact/careers" },
        { label: "Partnerships", href: "/contact/partnerships" },
      ],
    },
  ];

  return (
    <motion.nav
    className={` fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 ${
      isScrolled
        ? 'bg-white rounded-xl mt-4 mx-4 py-2'
        : 'bg-transparent'
    }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="flex-shrink-0 md:hidden">
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
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-start">
                <a
                  href="tel:+254793474747"
                  className="text-md font-medium text-black"
                >
                  +254 793 47 47 47
                </a>
                <a
                  href="mailto:adm@smartbrainskenya.com"
                  className="text-md font-medium text-black"
                >
                  adm@smartbrainskenya.com
                </a>
              </div>
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className={`relative group px-3 py-2 transition-colors duration-300`}
                  onMouseEnter={() => {
                    toggleDropdown(link.label.toLowerCase());
                    handleMouseEnter(link.label.toLowerCase());
                    handleLinkClick(link.label.toLowerCase());
                  }}
                  onMouseLeave={() => {
                    toggleDropdown(link.label.toLowerCase());
                    handleMouseLeave(link.label.toLowerCase());
                  }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    className={`text-md font-medium text-black group-hover:text-green-500 transition-colors duration-300 flex items-center`}
                  >
                    {link.label}
                    {showUpArrow[link.label.toLowerCase()] ? (
                      <FaChevronUp className="ml-2 transition-transform duration-300 ease-in-out" />
                    ) : (
                      <FaChevronDown className="ml-2 transition-transform duration-300 ease-in-out" />
                    )}
                  </Link>
                  {isDropdownOpen[link.label.toLowerCase()] && (
                    <div
                      className="absolute top-full left-0 z-50 bg-white shadow-lg rounded-md overflow-hidden w-max"
                      ref={dropdownRefs[link.label.toLowerCase()]}
                    >
                      {link.dropdown.map((dropdownLink, idx) => (
                        <Link
                          key={idx}
                          href={dropdownLink.href}
                          target="_blank"
                          className={`block px-4 py-2 text-gray-800 hover:bg-white-500 hover:text-pink-600 transition-colors duration-300 ${
                            activeLink === link.label.toLowerCase() &&
                            dropdownLink.label.toLowerCase() === activeLink
                              ? "bg-green-500 text-white"
                              : ""
                          }`}
                        >
                          {dropdownLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between gap-2">
          <Link
            href="/contact"
            target="_blank"
            className="rounded-md text-base font-medium text-black"
          >
            <Button variant="outline" size="xxxl" className="w-full">
              Join Us 
            </Button>
          </Link>
          <Link
            href="https://smartbrains-ke.web.app/auth"
            target="_blank"
            className="block rounded-md text-base font-medium text-black"
          >
            <Button variant="destructive" size="xxxl" className="w-full">
              Join Class
            </Button>
          </Link>
        </div>
      </div>

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
              className="fixed inset-y-0 left-0 z-100 w-auto h-full bg-white overflow-y-auto mobile-menu transition-all duration-300"
            >
              <div className="flex justify-center py-4">
                <Link href="/" target="_blank">
                  <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                </Link>
              </div>
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      className="block rounded-md text-base font-medium text-black"
                      onClick={() => {
                        toggleDropdown(link.label.toLowerCase());
                        handleLinkClick(link.label.toLowerCase());
                      }}
                    >
                      {link.label}
                    </Link>
                    {isDropdownOpen[link.label.toLowerCase()] && (
                      <div className="ml-4 space-y-2">
                        {link.dropdown.map((dropdownLink, idx) => (
                          <Link
                            key={idx}
                            href={dropdownLink.href}
                            target="_blank"
                            className="block rounded-md text-base font-medium text-black"
                          >
                            {dropdownLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  onClick={handleClick}
                  href="/contact"
                  target="_blank"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="lg" className="w-full">
                    Join Us
                  </Button>
                </Link>
                <Link
                  onClick={handleClick}
                  href="/contact"
                  target="_blank"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="lg" className="w-full">
                    Contact Us
                  </Button>
                </Link>
                <Link
                  href="https://smartbrains-ke.web.app/auth"
                  target="_blank"
                  className="block rounded-md text-base font-medium text-black"
                >
                  <Button variant="destructive" size="sm" className="w-full">
                    Join Class
                  </Button>
                </Link>
                <div className="mt-4 flex flex-col items-center text-black">
                  <a href="tel:+254793474747" className="mr-4 text-sm font-medium">
                    +254 793 47 47 47
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