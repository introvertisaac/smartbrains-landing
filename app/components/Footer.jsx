"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {FaTiktok} from "react-icons/fa"

import Link from "next/link";

function Footer() {
  const handleCall = () => {
    window.open("tel:+254793474747");
  };

  const handleEmail = () => {
    window.location.href = "mailto:adm@smartbrainskenya.com";
  };

  return (
    <div
      className="relative py-8 md:py-12"
      style={{
        backgroundImage: "url('/footer-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: "0.9",
      }}
    >
      <div className="max-w-7xl mx-auto px-4  py-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-800 font-bold text-2xl md:text-2xl pb-4">
            Smart<span className="text-blue-600">Brains</span>
          </p>
          <h3 className="text-2xl md:text-xl font-semibold mb-2">
            Have further questions?
          </h3>
          <p className="text-orange-600 text-lg font-bold md:text-3xl mb-4">
            We are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg flex items-center justify-center w-full md:w-1/3"
              onClick={handleCall}
            >
              <span className="m-2 text-xl md:text-xl flex flex-row gap-2 items-center justify-center align-middle">
                <MdPhoneInTalk /> +254 793 47 47 47
              </span>
              <i className="fas fa-phone text-xl md:text-2xl"></i>
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg flex items-center justify-center w-full md:w-1/3"
              onClick={handleEmail}
            >
              <span className="m-2 text-xl md:text-xl flex flex-row gap-2 items-center justify-center align-middle">
                <AiOutlineMail /> adm@smartbrainskenya.com
              </span>
              <i className="fas fa-envelope text-xl md:text-2xl"></i>
            </button>
          </div>
          <Link href="https://sbs-tutor.web.app/" passHref>
            <Button variant="link">Tutor Section</Button>
          </Link>
          <div className="flex flex-col justify-center items-center pt-5">
            <div className="flex w-full justify-center items-center">
              <p className="text-gray-600 text-xl md:text-xl mb-4">
                Follow us on
              </p>
            </div>
            <div className="flex gap-8">
              <Link href="https://www.instagram.com/smartbrainke/" target="_blank" passHref>
                <FaInstagram className="text-3xl md:text-4xl cursor-pointer hover:text-yellow-600" />
              </Link>
              <Link href="https://twitter.com/smartbrains_ke?lang=en" target="_blank" passHref>
                <FaTwitter className="text-3xl md:text-4xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.linkedin.com/company/smart-brains-kenya" target="_blank" passHref>
                <FaLinkedin className="text-3xl md:text-4xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.facebook.com/Smartbrainske/" target="_blank" passHref>
                <FaFacebook className="text-3xl md:text-4xl cursor-pointer hover:text-blue-600" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCBx73yLTn24MbTCmd6lmXKA" target="_blank" passHref>
                <FaYoutube className="text-3xl md:text-4xl cursor-pointer hover:text-red-600" />
              </Link>
              <Link href="https://www.tiktok.com/@smartbrainske" target="_blank" passHref>
                <FaTiktok className="text-3xl md:text-4xl cursor-pointer hover:text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
