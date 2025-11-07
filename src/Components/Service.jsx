import React from 'react'
import Servicecard from './ServiceCard'
import { servicedata } from '../home'

const Service = () => {
  return (
    <div className='w-full py-10 bg-gray-50'>
      {/* 🔹 Section Header */}
      <div
        className='text-center max-w-2xl mx-auto px-4 sm:px-6'
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <h1 className='text-sm sm:text-base text-blue-600 font-semibold tracking-widest'>SERVICES</h1>
        <div className='my-5'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900'>
            Our Features & Services
          </h1>
          <hr className='w-20 border-t-2 border-blue-500 mx-auto mt-3' />
        </div>
      </div>

      {/* 🔹 Service Cards Grid */}
      <div className='mt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <ul
          className='grid gap-6 sm:gap-8 
                     grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
                     place-items-center'
        >
          {servicedata.map((item, index) => (
            <li
              key={item.id}
              className='w-full h-full hover:translate-y-2 flex justify-center'
              data-aos="fade-up"
              data-aos-delay={200 + (index * 150)} // 200, 350, 500, 650ms delays
            >
              <Servicecard
                ServiceName={item.title}
                ServiceImage={item.image}
                ServiceDesc={item.desc}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Service