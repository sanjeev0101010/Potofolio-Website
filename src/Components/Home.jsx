import React, { useState, useEffect } from "react";
import { IoLocationSharp, IoBriefcase } from "react-icons/io5";
import { FaArrowRightLong, FaGithub, FaSquareInstagram } from "react-icons/fa6";
import { FaDownload, FaSpinner, FaLinkedin } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/image/Profile.png";

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);

const handleDownloadCV = () => {
  setIsDownloading(true);

  setTimeout(() => {
    const link = document.createElement('a');
    link.href = '/SANJEEV CV.pdf'; // ✅ no "/public"
    link.download = 'Sanjeev_Frontend_Developer_CV.pdf';
    link.target = '_blank'; // ✅ opens in a new tab (viewable)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  }, 1000);
};

  const handleHireMe = () => {
    const contactSection = document.getElementById('Contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <section
      id="Home"
      className="flex items-center justify-center min-h-screen py-10 bg-linear-to-br from-white via-blue-50 to-gray-100"
    >
      <div className="grid md:grid-cols-2 items-center gap-10 lg:gap-16 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Left Text Section */}
        <div className="flex flex-col gap-6 lg:gap-8 order-2 md:order-1">
          {/* Availability Badge */}
          <div
            data-aos="fade-down"
            data-aos-delay="100"
          >
            <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              ✦ Available for freelance work
            </div>
          </div>

          {/* Main Heading */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text ">Sanjeev</span>
            </h1>
          </div>

          {/* Typed Animation */}
          <div
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl my-3 font-semibold text-gray-800">
              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "React Developer",
                  "UI/UX Designer",
                  "Web Enthusiast",
                ]}
                typeSpeed={60}
                backSpeed={50}
                loop
                className="text-blue-600"
              />
            </h2>
          </div>

          {/* Description */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg sm:text-xl text-gray-700 max-w-lg leading-relaxed font-medium">
              I create <span className="text-blue-600 font-semibold">beautiful, functional, and user-centered</span> digital experiences. 
              With passion for modern web technologies, I bring ideas to life through 
              <span className="text-purple-600 font-semibold"> clean code and thoughtful design</span>.
            </p>
          </div>

          {/* Info Section */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-2"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <a 
              href="https://www.google.com/maps?q=Mohali,+Punjab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <IoLocationSharp className="text-blue-600 text-lg" />
              </div>
              <span className="font-medium">Based in Mohali, Punjab</span>
            </a>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <IoBriefcase className="text-green-600 text-lg" />
              </div>
              <span className="font-medium">Available Now</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <button 
              onClick={handleHireMe} 
              className="group bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                         text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 
                         transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg"
            >
              <span>Hire Me</span>
              <FaArrowRightLong className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button 
              disabled={isDownloading} 
              onClick={handleDownloadCV} 
              className="group border-2 border-gray-800 hover:border-blue-600 hover:bg-blue-50 
                         px-8 py-4 rounded-2xl flex items-center gap-3 transition-all duration-300 
                         transform hover:scale-105 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDownloading ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaDownload className="group-hover:text-blue-600 transition-colors duration-300" />
              )}
              <span className="group-hover:text-blue-600 transition-colors duration-300">
                {isDownloading ? 'Downloading...' : 'Download CV'}
              </span>
            </button>
          </div>

          {/* Divider */}
          <hr
            className="my-6 border-gray-300 w-full max-w-md"
            data-aos="fade-right"
            data-aos-delay="700"
          />

          {/* Social Links */}
          <div
            className="flex flex-col sm:flex-row items-center gap-6"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <h3 className="font-semibold text-gray-700 text-lg">Follow my journey:</h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://github.com/sanjeev0101010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjeev-kumar-24a421253"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/San_jeev_01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div
          className="flex justify-center md:justify-end order-1 md:order-2"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="relative"
          >
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-200 to-purple-200 rounded-3xl -z-10 blur-xl opacity-50"></div>
            
            {/* Profile Image */}
            <div className="relative group">
              <img
                src={profile}
                alt="Sanjeev - Frontend Developer"
                className="rounded-3xl shadow-2xl w-72 sm:w-80 lg:w-96 transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;