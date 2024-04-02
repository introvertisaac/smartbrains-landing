"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-pink-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-800 font-bold text-3xl pb-6">
              Smart<span className="text-blue-600">Brains</span>
            </p>
            <div className="flex gap-6">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-800 font-bold text-2xl pb-4">Courses</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Scratch Programming
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Python for Kids
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Web Development
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Game Development
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-800 font-bold text-2xl pb-4">About</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Our Story
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Our Teachers
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Pricing Plans
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Career Opportunities
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                News & Media
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
            <ul>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Help Center
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Course Fees
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Learning Resources
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Tutorial Videos
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center mt-8">
        <p className="text-gray-800 font-semibold text-sm md:text-base">
            © {new Date().getFullYear()} All rights reserved | Build by RubyTech
            Solutions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;