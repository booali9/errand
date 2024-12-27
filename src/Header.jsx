import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/Logo4.jpeg"


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // New state for mobile dropdown
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 

  const handleNavigate = () => {
      navigate("/");
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu
    setMobileDropdownOpen(false); // Ensure dropdown closes when menu closes
  };
//
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <header className=" bg-white shadow-md  absolute top-0 left-0 w-full z-50 py-0">
    <div className="container mx-auto flex justify-between items-center px-4">
      {/* Logo */}
      <div onClick={handleNavigate} className="flex lg:ml-14 items-center space-x-4">
  <img src={Logo} className="w-44 h-24 sm:w-32 sm:h-20 object-contain sm:object-fill" alt="" />
</div>


  
      {/*  Navigation Links (Desktop) */}
      <nav className="hidden md:flex space-x-6">
  <a href="/" className="flex flex-col items-center text-gray-700 hover:text-[#0fb8ce] transition text-base">
    <FaHome className="w-5 h-5 mb-1" />
    <span className="text-lg">Home</span>
  </a>
  <a href="/about" className="flex flex-col items-center text-gray-700 hover:text-[#0fb8ce] transition text-base">
    <FaInfoCircle className="w-5 h-5 mb-1" />
    <span className="text-lg">About Us</span>
  </a>
  <a href="/contact" className="flex flex-col items-center text-gray-700 hover:text-[#0fb8ce] transition text-base">
    <FaEnvelope className="w-5 h-5 mb-1" />
    <span className="text-lg">Contact</span>
  </a>
  <div className="relative">
  <button
  onClick={toggleDropdown}
  className="flex flex-col items-center text-gray-700 hover:text-[#0fb8ce] transition text-base focus:outline-none"
>
  <FaServicestack className="w-5 h-5 mb-1" /> {/* Icon above */}
  <span className="text-lg flex items-center">
    Services  <FaChevronDown className="w-4 h-4 mt-1" /> 
  </span>
 {/* Chevron below */}
</button>

    {dropdownOpen && (
      <div className="absolute top-8 left-0 bg-white border shadow-lg rounded-md z-40">
        <ul className="py-2">
          <li><a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-base">Web Development</a></li>
          <li><a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-base">Digital Marketing</a></li>
          <li><a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-base">Ecommerce</a></li>
          <li><a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-base">Creatives</a></li>
          <li><a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-base">Quality Assurance</a></li>
        </ul>
      </div>
    )}
  </div>
</nav>

      {/* Phone Number and Contact Us */}
      <div className="hidden md:flex items-center gap-2">
        <span className="text-gray-700 text-xs">📞 +971586308281</span>
        <button
          onClick={() => navigate("/contact")}
          className="px-4 py-1 border border-[#0e95ab] text-[#0e859a] text-xs font-medium rounded-full hover:bg-[#0fb8ce] hover:text-[#0D3B66] transition-colors"
        >
          Contact Us
        </button>
      </div>

      <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      
  
      {/* Mobile Menu Icon */}
      {menuOpen && (
        <div className="md:hidden bg-white fixed inset-0 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-4">
          {/* Close Button */}
          <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="/"
            onClick={closeMenu}
            className="flex flex-col h-12 w-12 items-center text-gray-700 hover:text-[[#0fb8ce] transition text-sm"
          >
            <FaHome className="w-5 h-5 mb-1" />
            <span>Home</span>
          </a>
          <a
            href="/about"
            onClick={closeMenu}
            className="flex flex-col items-center text-gray-700 hover:text-[[#0fb8ce] transition text-sm"
          >
            <FaInfoCircle className="w-4 h-4 mb-1" />
            <span>About Us</span>
          </a>
          <a
            href="/contact"
            onClick={closeMenu}
            className="flex flex-col items-center text-gray-700 hover:text-[[#0fb8ce] transition text-sm"
          >
            <FaEnvelope className="w-5 h-5 mb-1" />
            <span>Contact</span>
          </a>
          {/* Services with Dropdown */}
     {/* Services with Dropdown */}
<div className="relative">
  <button
    onClick={toggleMobileDropdown} // Use a separate toggle for mobile
    className="flex items-center text-gray-700 hover:text-[#0fb8ce] transition text-sm focus:outline-none"
  >
    <FaServicestack className="w-4 h-4 mr-1" />
    <span className="flex">Services <FaChevronDown className="w-3 h-3 ml-1" /></span>
  </button>
  {mobileDropdownOpen && ( // Use mobileDropdownOpen for mobile dropdown
    <div className="absolute top-8 left-0 bg-white border shadow-lg rounded-md z-50 w-48 max-h-48 overflow-y-scroll">
      <ul className="py-1">
        <li><a href="/services" className="block px-4 py-1 hover:bg-blue-100 text-sm">Web Development</a></li>
        <li><a href="/services" className="block px-4 py-1 hover:bg-blue-100 text-sm">Digital Marketing</a></li>
        <li><a href="/services" className="block px-4 py-1 hover:bg-blue-100 text-sm">Ecommerce</a></li>
        <li><a href="/services" className="block px-4 py-1 hover:bg-blue-100 text-sm">Creatives</a></li>
        <li><a href="/services" className="block px-4 py-1 hover:bg-blue-100 text-sm">Quality Assurance</a></li>
      </ul>
    </div>
  )}


          </div>
          <div className=" flex flex-wrap  items-center npm gap-2">
            <span className="text-gray-700 text-xs">📞 +971586308281</span>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="px-4 py-1 border border-[#0e95ab] text-[#0e859a] text-xs font-medium rounded-full hover:bg-[#0fb8ce] hover:text-[#0D3B66] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  </header>
  
  );
}

export default Header;
