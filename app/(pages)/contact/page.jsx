import React from 'react';
import { MdPhoneAndroid } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { FaQuoteLeft } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';

const GetStartedComponent = () => {
  const grades = Array.from({ length: 13 }, (_, i) => i === 0 ? 'Kindergarten' : `Grade ${i}`);

  return (
    <div className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row justify-between items-start">
      <div className="md:w-2/5 mb-8 md:mb-0">
        <div>
          <label htmlFor="phone" className="block font-medium mb-1">
            Enter your WhatsApp phone number
          </label>
          <div className="flex items-center">
            <div className="bg-gray-200 px-4 py-3 rounded-l-md">
              <MdPhoneAndroid className="text-gray-600 w-5 h-5" />
            </div>
            <input
              type="tel"
              id="phone"
              placeholder="+254"
              className="w-full px-4 py-2 rounded-r-md border focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="grade" className="block font-medium mb-1">
            Select grade/class
          </label>
          <div className="relative">
            <select
              id="grade"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-8 appearance-none max-h-40 overflow-y-auto"
            >
              {grades.map((grade, index) => (
                <option key={index} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
              <IoIosArrowDown className="text-gray-600 w-5 h-5" />
            </div>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md w-full mt-4">
          Proceed to book a free class
        </button>
        <p className="text-gray-600 text-sm mt-2 text-center">
          Register now, grab your free slot for coding class!
        </p>
        <p className="text-gray-600 text-sm mt-4">
          By signing up, you agree to the Terms of Service and Privacy Policy. You also agree that you have parental consent. Important updates will be sent via WhatsApp.
        </p>
      </div>
      <div className="md:w-1/3">
        <div className="bg-white shadow-lg rounded-lg h-full flex flex-col mb-8 md:mb-0">
          <div className="p-8">
            <div className="text-gray-600 text-lg mb-4">
              <FaQuoteLeft className="text-red-500 inline-block mr-2" />
              My teacher at SmartBrains was the best guide I My teacher at SmartBrains was the best guide I could&apos;ve asked for as they really customized the classes to match my learning style. asked for as they really customized the classes to match my learning style.
            </div>
          </div>
          <div className="bg-gray-100 px-8 py-4 rounded-b-lg flex items-center">
            <img
              src="https://via.placeholder.com/48x48"
              alt="Teacher"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-medium">Melvin Ruto</p>
              <p className="text-gray-600 text-sm">Student | Grade 6</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg mt-8 p-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <MdLocationOn className="text-red-500 mt-1 mr-4" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Cooperative Bank Building - Buruburu | Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdPhone className="text-red-500 mt-1 mr-4" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+254 793 474 747</p>
              </div>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-red-500 mt-1 mr-4" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">adm@smartbrainskenya.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedComponent;