import React from "react";

const Servicecard = ({ ServiceImage, ServiceDesc, ServiceName }) => {
  return (
    <div
      className="relative overflow-hidden group service-card shadow-xl flex flex-col gap-4 
                 text-center justify-center border border-gray-100 rounded-2xl 
                 max-w-xs sm:max-w-sm w-full p-6 
                 transition-all duration-500 ease-out will-change-transform
                 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      {/* 🔹 Smooth background overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-right from-blue-600 to-indigo-500 opacity-0 
                   group-hover:opacity-100 transition-opacity duration-500 ease-out z-0"
      ></div>

      {/* 🔹 Service image */}
      <div 
        className="rounded-2xl z-10 relative flex justify-center transition-transform duration-500 ease-out will-change-transform"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img
          className="h-32 sm:h-40 w-auto object-contain rounded-2xl 
                     transition-transform duration-700 ease-out 
                     group-hover:scale-105 will-change-transform"
          src={ServiceImage}
          alt={ServiceName}
        />
      </div>

      {/* 🔹 Text content */}
      <div 
        className="flex flex-col gap-2 z-10 relative"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3
          className="text-lg sm:text-xl font-semibold text-blue-700 
                     transition-colors duration-500 ease-out 
                     group-hover:text-white"
        >
          {ServiceName}
        </h3>
        <p
          className="text-sm sm:text-base text-gray-700 px-2 
                     transition-colors duration-500 ease-out 
                     group-hover:text-gray-100"
        >
          {ServiceDesc}
        </p>
      </div>
    </div>
  );
};

export default Servicecard;
