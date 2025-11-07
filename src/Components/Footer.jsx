import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">
              Sanjeev<span className="text-blue-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 text-xl hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-gray-400 text-xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="text-gray-400 text-xl hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Made with <FaHeart className="text-red-500" /> by Sanjeev
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;