import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { IoHome, IoPerson, IoBriefcase, IoConstruct, IoCall } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: IoHome },
    { name: "About", icon: IoPerson },
    { name: "Project", icon: IoBriefcase },
    { name: "Service", icon: IoConstruct },
    { name: "Contact", icon: IoCall },
  ];

  // ✅ Disable background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl md:hidden transition-all duration-500 font-bold text-blue-600">
          MyPortfolio
        </h1>

        {/* Hamburger button */}
        <button
          className="md:hidden transition-all duration-500 text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-evenly w-full space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.name}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
                activeClass=" text-white bg-black hover:text-white  transition-all duration-300    "
                className="cursor-pointer  rounded-2xl py-1 px-3 font-bold hover:text-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Overlay Background */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 shadow-2xl p-6`}
        >
          <button className="text-3xl mb-6" onClick={() => setIsOpen(false)}>
            ✕
          </button>
          <ul className="flex flex-col space-y-6 text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.name}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-blue-600  font-bold"
                  className="cursor-pointer hover:text-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
