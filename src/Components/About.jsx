import React from 'react'
import { FaCode, FaLaptopCode, FaTools, FaRocket } from "react-icons/fa";
import { BsFillMortarboardFill } from "react-icons/bs";
import { BiSolidFolderOpen } from "react-icons/bi";

const About = () => {
  return (
    <section
      id="About"
      className="flex flex-col justify-center items-center py-16 bg-gray-50"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <div 
          className="text-center mb-12"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h3 className="text-blue-600 font-semibold text-sm tracking-widest mb-3 uppercase">
            ABOUT ME
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Crafting Digital Excellence
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Introduction */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Main Description */}
            <div
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-6 font-medium">
                I'm a passionate <span className="text-blue-600 font-bold">Frontend Developer</span> with a keen eye for 
                creating modern, responsive, and user-centric web experiences. My journey in tech started with 
                curiosity and has evolved into a love for transforming ideas into interactive digital solutions.
              </p>
            </div>

            <div
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                I specialize in <span className="text-blue-600 font-semibold">React.js, JavaScript, and modern CSS frameworks</span>. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                and continuously improving my skills to stay at the forefront of web development.
              </p>
            </div>

            {/* Core Values */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaRocket className="text-blue-600" />
                My Development Philosophy
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Clean Code</h4>
                    <p className="text-gray-600 text-sm">Writing maintainable and scalable code</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-blue-600 text-sm">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">User-First</h4>
                    <p className="text-gray-600 text-sm">Prioritizing user experience in every project</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-purple-600 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance</h4>
                    <p className="text-gray-600 text-sm">Optimizing for speed and efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-amber-600 text-sm">🔍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attention to Detail</h4>
                    <p className="text-gray-600 text-sm">Pixel-perfect implementation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Stats & Info Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Quick Stats */}
            <div 
              className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FaLaptopCode />
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Projects Completed</span>
                  <span className="font-bold text-lg">5+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Technologies</span>
                  <span className="font-bold text-lg">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Code Commits</span>
                  <span className="font-bold text-lg">200+</span>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Card 1 - Skills */}
              <div
                data-aos="flip-left"
                data-aos-delay="600"
              >
                <div className="p-5 border-2 border-blue-200 rounded-2xl bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-blue-600 hover:shadow-lg w-full h-full">
                  <div className="text-lg flex items-center justify-center gap-2 font-bold mb-3 text-gray-800">
                    <FaCode className="text-blue-600" /> Technical Skills
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">React.js</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Tailwind CSS</span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium">HTML5</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">CSS3</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">Git</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Education */}
              <div
                data-aos="flip-left"
                data-aos-delay="700"
              >
                <div className="p-5 border-2 border-green-200 rounded-2xl bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-green-600 hover:shadow-lg w-full h-full">
                  <div className="text-lg flex items-center justify-center gap-2 font-bold mb-2 text-gray-800">
                    <BsFillMortarboardFill className="text-green-600" /> Education
                  </div>
                  <p className="text-sm text-gray-600 text-center font-medium">
                    BCA — SD College, Chandigarh
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Panjab University
                  </p>
                </div>
              </div>

              {/* Card 3 - Projects */}
              <div
                data-aos="flip-left"
                data-aos-delay="800"
              >
                <div className="p-5 border-2 border-purple-200 rounded-2xl bg-white transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:border-purple-600 hover:shadow-lg w-full h-full">
                  <div className="text-lg flex items-center justify-center gap-2 font-bold mb-2 text-gray-800">
                    <BiSolidFolderOpen className="text-purple-600" /> Projects
                  </div>
                  <p className="text-sm text-gray-600 text-center font-medium">
                    5+ Completed Projects
                  </p>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    Including full-stack applications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div 
          className="text-center mt-12"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <p className="text-gray-600 text-lg mb-4">
            Ready to bring your ideas to life?
          </p>
          <button  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Let's Build Something Amazing
          </button>
        </div>
      </div>
    </section>
  )
}

export default About