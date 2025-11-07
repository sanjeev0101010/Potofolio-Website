import {React,useState} from "react";

const ContactFrom = () => {
  const [isSubmit, SetISsubmit] = useState(false)
  const handleFrom = (e) => {
    e.preventDefault()
    SetISsubmit(true)

  }


  return (
    !isSubmit ? <form id="Contact"
      className="flex flex-col gap-6 px-5  md:px-10 lg:px-16 bg-white rounded-2xl relative overflow-hidden"
      onSubmit={(e)=>handleFrom(e)}
    >
      {/* Animated Background Elements */}
      <div
        className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50"
        data-aos="zoom-in"
        data-aos-delay="700"
      ></div>
      <div
        className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-200 rounded-full opacity-30"
        data-aos="zoom-in"
        data-aos-delay="800"
      ></div>

      {/* Form Title */}
      <div
        className="text-center relative z-10"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Send a Message
        </h3>
        <p className="text-gray-600">
          Let's start a conversation
        </p>
      </div>

      {/* Name Field */}
      <div
        className="relative group z-10"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="600"
      >
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Your Name
          </label>
        </div>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-300 rounded-xl p-4 peer outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 hover:bg-white"
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email Field */}
      <div
        className="relative group z-10"
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="600"
      >
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Your Email
          </label>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border border-gray-300 rounded-xl p-4 peer outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 hover:bg-white"
          placeholder="Enter your email address"
          required
        />
      </div>

      {/* Message Field */}
      <div
        className="relative group z-10"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="600"
      >
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Your Message
          </label>
        </div>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="w-full border border-gray-300 rounded-xl p-4 peer outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
          placeholder="Tell me about your project or inquiry..."
          required
        ></textarea>
      </div>

      {/* Button */}
      <button
        type="submit"
        className="relative bg-gradient-to-right from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 active:scale-95 text-white font-semibold text-lg rounded-xl py-4 
                   transition-all duration-300 shadow-lg hover:shadow-xl transform  overflow-hidden group z-10"
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-duration="700"
      >
        <span className="relative  text-black z-10">Send Message</span>
        <div className="absolute inset-0 bg-blue-500 opacity-100 group-hover:opacity-50 transition-opacity duration-300"></div>
      </button>


    </form> :
      <div
        className="text-center mt-2 z-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <p className="text-2xl   text-gray-500 flex items-center justify-center">
          <span className="w-2 h-2  bg-green-500 rounded-full mr-2"></span>
          I'll get back to you within 24 hours

        </p>
        <p className="mt-20 text-2xl animate-bounce transition-all duration-200 ease font-medium rounded-2xl py-5 mx-5 bg-red-500 text-white  ">Thanku For Contact Us </p>
      </div>
  );
};

export default ContactFrom;