import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const ProjectCard = ({ ProjectImage, ProjectDesc, ProjectName, Languages, Livelink, Gitlink }) => {
  return (
    <div className='group shadow-xl flex flex-col gap-4 rounded-2xl justify-center border border-gray-200 
                    max-w-[400px] p-6 transition-all duration-500 ease-in-out
                    hover:-translate-y-3 hover:shadow-2xl bg-white hover:border-blue-200'
         data-aos="fade-up"
         data-aos-duration="600">
      
      {/* 🖼 Image Section with Overlay */}
      <div className='relative rounded-xl bg-linear-to-br from-blue-50 to-gray-100 p-2 overflow-hidden'
           data-aos="zoom-in"
           data-aos-delay="100"
           data-aos-duration="600">
        <img 
          className='w-full h-52 object-cover rounded-lg transition-transform duration-700 group-hover:scale-110' 
          src={ProjectImage} 
          alt={ProjectName} 
        />
        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg'></div>
        
        {/* Featured Badge */}
        <div className='absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1'>
          <FaStar className='text-xs' />
          Featured
        </div>
      </div>

      {/* 📄 Text Section */}
      <div className='flex flex-col gap-3'>
        <h1 className='text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300'
            data-aos="fade-right"
            data-aos-delay="200">
          {ProjectName}
        </h1>
        <p className='text-gray-600 leading-relaxed text-sm sm:text-base line-clamp-3'
           data-aos="fade-up"
           data-aos-delay="300">
          {ProjectDesc}
        </p>
      </div>

      {/* 🧠 Languages List */}
      <div className='mt-2'
           data-aos="fade-up"
           data-aos-delay="400">
        <h3 className='text-sm font-semibold text-gray-700 mb-2'>Technologies Used:</h3>
        <ul className='flex flex-wrap gap-2'>
          {Languages.map((item, index) => (
            <li 
              key={index} 
              className="bg-linear-to-r from-blue-100 to-blue-50 text-blue-700 px-3 py-2 text-xs font-medium rounded-lg 
                         hover:from-blue-200 hover:to-blue-100 transition-all duration-300 transform hover:scale-105 border border-blue-200"
              data-aos="fade-in"
              data-aos-delay={500 + (index * 100)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔗 Action Buttons */}
      <div className='flex gap-3 mt-4 pt-4 border-t border-gray-100'
           data-aos="fade-up"
           data-aos-delay="600">
        <a 
          href={Gitlink} 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex-1 bg-gray-900 hover:bg-black text-white text-sm font-semibold rounded-xl 
                     flex items-center justify-center gap-2 py-3 px-4 hover:shadow-lg 
                     transition-all duration-300 transform hover:scale-105 group/btn'
          data-aos="zoom-in"
          data-aos-delay="700"
        >
          <FaGithub className='group-hover/btn:scale-110 transition-transform duration-300' />
          <span>Source Code</span>
        </a>
        <a 
          href={Livelink} 
          target="_blank" 
          rel="noopener noreferrer"
          className='flex-1 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                     text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 py-3 px-4 
                     hover:shadow-lg transition-all duration-300 transform hover:scale-105 group/btn'
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          <FaExternalLinkAlt className='group-hover/btn:scale-110 transition-transform duration-300' />
          <span>Live Demo</span>
        </a>
      </div>

      {/* 📊 Project Stats */}
      <div className='flex justify-between items-center text-xs text-gray-500 mt-3 pt-3 border-t border-gray-100'
           data-aos="fade-up"
           data-aos-delay="900">
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1'>
            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
            Completed
          </span>
          <span className='flex items-center gap-1'>
            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
            Responsive
          </span>
        </div>
        <span className='text-gray-400'>2024</span>
      </div>
    </div>
  )
}

export default ProjectCard