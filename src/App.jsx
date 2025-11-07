import { useEffect } from 'react'
import Header from './Components/Header'
import { Element } from 'react-scroll';
import Home from './Components/Home'
import About from './Components/About'
import Project from './Components/Project'
import Service from './Components/Service'
import Contact from './Components/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer';
import { FaAngleDoubleUp } from "react-icons/fa";



function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }, []);
 
 


  return (
    <>
     <Header  />
     <div className='  transition-all duration-150  mt-20'>
       <Element name="Home">
        <Home />
      </Element>
       <Element name="About">
     <About/>
      </Element>
      <Element name="Project">
     <Project/>
      </Element>
      <Element name="Service">
     <Service/>
      </Element>
      <Element name="Contact">
     <Contact/>
      </Element>
      <button className='bg-blue-700  text-white w-15 h-15 flex text-2xl place-content-center items-center-safe   rounded-full bottom-5 cursor-pointer right-5 fixed' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <FaAngleDoubleUp className='animate-bounce '/>
      </button> 
      
     </div>
     <Footer/>
     

  
    </>
  )
}

export default App
