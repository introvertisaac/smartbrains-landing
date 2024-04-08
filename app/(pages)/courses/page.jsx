"use client"
import { FaHandPointRight, FaCode, FaPencilAlt, FaUserEdit, FaChartLine, FaRobot, FaUserClock } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import Courses from '@/app/components/Courses';

const HeroSection = () => {
  return (
    <section className="bg-pink-50 py-20 md:py-20">
      <div className="flex flex-col md:flex-row  justify-between w-full px-8 md:px-16">
        <div className="space-y-6 w-full md:w-1/2">
        <h1 className="text-2xl md:text-2xl font-light text-gray-800">
           Hi There
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            LUXE is here to be your assistance
          </h1>
          <p className="text-gray-600 leading-relaxed">
            I am here ready to help you in making creative digital products
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-600 transition-colors duration-300">
            Let&apos;s Discuss
          </button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 w-full px-4 md:px-8">
          <Image
            src="/css1.jpeg"
            alt="Product Designer"
            width={300}
            height={250}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  const services = [
    { icon: FaUserEdit, title: 'Branding', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: FaCode, title: 'UI/UX', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: FaPencilAlt, title: 'Product Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: FaChartLine, title: 'Analytics', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: FaRobot, title: 'Automation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { icon: FaUserClock, title: 'Consulting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  return (
    <section className="bg-white py-20 md:py-2">
      <div className="px-8 md:px-16 w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition-colors duration-300"
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-pink-500 text-white p-3 rounded-full">
                  <service.icon />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-pink-500 text-white p-3 rounded-full">
                <selectedService.icon />
              </div>
              <h3 className="text-xl font-bold text-gray-800">{selectedService?.title}</h3>
            </div>
            <p className="text-gray-600">{selectedService?.description}</p>
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300 mt-4"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Courses />
    </div>
  );
}