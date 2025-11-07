import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import ContactFrom from "./ContactFrom";

const Contact = () => {
  return (
    <section className=" py-10 bg-gray-50">
      {/* 🔹 Section Header */}
      <div
        className="text-center max-w-2xl mx-auto mb-10 px-4 sm:px-6"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h1 className="text-sm uppercase tracking-widest text-blue-700 font-semibold">CONTACT</h1>
        <h2 className="text-3xl sm:text-4xl font-bold my-4 text-gray-900">Get in Touch with Me</h2>
        <hr className="w-20 mx-auto border-t-2 border-blue-500" />
      </div>

      {/* 🔹 Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* 🧩 Left Info Side */}
        <div
          className="flex flex-col justify-center gap-5 text-gray-800"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h3
            className="text-lg leading-relaxed px-3 md:px-6 text-gray-700"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm always open to discussing exciting projects and new opportunities. Let's collaborate!
          </h3>

          <div className="flex flex-col gap-4 px-3 md:px-6">
            <a
              className="flex items-center text-lg p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
              target="_blank"
              href="mailto:Kumarsanjeev93467@gmail.com<?subject=Hello%20there&body=Hi%20I%20visited%20your%20portfolio!"
            >
              <IoMdMailUnread className="mr-3 text-blue-700 text-2xl" />
              <span>Kumarsanjeev93467@gmail.com</span>
            </a>
            <a
              href="tel:+918872429392"
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center text-lg p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <FaPhoneAlt className="mr-3 text-blue-700 text-2xl" />
              <span>+91 8872429392</span>
            </a>
            <a href="https://www.google.com/maps?q=Mohali,+Punjab" target="_blank"
              className="flex items-center text-lg p-3 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <IoLocation className="mr-3 text-blue-700 text-2xl" />
              <span>Mohali, Punjab</span>
            </a>
          </div>

          {/* 🔹 Social Icons */}
          <div
            className="flex gap-6 px-3 md:px-6 mt-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a
              href="https://github.com/sanjeev0101010"
              target="_blank"
              className="p-4 bg-gray-200 text-gray-800 rounded-full text-2xl transition-all duration-300 
                         hover:bg-black hover:text-white hover:-translate-y-2 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjeev-kumar-24a421253"
              target="_blank"
              className="p-4 bg-gray-200 text-blue-700 rounded-full text-2xl transition-all duration-300 
                         hover:bg-blue-600 hover:text-white hover:-translate-y-2 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <FaLinkedin />
            </a>
            <a
            href="https://wa.me/918872429392"
            rel="noopener noreferrer"
              target="_blank"
              className="p-4 bg-gray-200 text-green-600 rounded-full text-2xl transition-all duration-300 
                         hover:bg-green-500 hover:text-white hover:-translate-y-2 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* 🧩 Right Contact Form */}
        <div
          className="shadow-lg p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 ease-in-out bg-white"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <ContactFrom />
        </div>
      </div>
    </section>
  );
};

export default Contact;