import React, { useState } from "react";
import { FaHome, FaInfoCircle, FaEnvelope, FaServicestack, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logo from "./assets/Logo4.jpeg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setMobileDropdownOpen(false); // Close dropdown when menu closes
    }
  };

  const handleNavigate = () => {
    navigate("/");
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false); // Ensure dropdown closes when menu closes
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <header className="bg-white shadow-md absolute top-0 left-0 w-full z-50 py-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div onClick={handleNavigate} className="flex lg:ml-14 items-center space-x-4">
          <img
            src={Logo}
            className="w-44 h-20 sm:w-auto -ml-2 lg:-ml-8 sm:h-20 object-contain sm:object-fill"
            alt="Logo"
          />
        </div>

        {/* Navigation Links (Desktop and Tablet) */}
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
              <FaServicestack className="w-5 h-5 mb-1" />
              <span className="text-lg flex items-center">
                Services <FaChevronDown className="w-4 h-4 mt-1" />
              </span>
            </button>
            {dropdownOpen && (
              <div className="absolute top-12 left-0 bg-white border shadow-lg rounded-md z-40">
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

        {/* Phone Number and Contact Us (Desktop and Tablet) */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-gray-700 mt-4 flex text-xl">
            <FaPhoneAlt className="w-6 h-6 mr-2 text-black" />+971586308281
          </span>
          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-4 border border-[#0e95ab] text-[#0e859a] text-[16px] font-medium rounded-full hover:bg-[#0fb8ce] hover:text-[#0D3B66] transition-colors"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white fixed inset-0 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6">
            {/* Close Button */}
            <button onClick={closeMenu} className="absolute top-4 right-4 text-gray-700">
              <svg
                className="w-6 h-6"
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

            {/* Menu Items */}
            <a
              href="/"
              onClick={closeMenu}
              className="flex flex-col items-center text-gray-700 text-sm hover:text-[#0fb8ce] transition"
            >
              <FaHome className="w-6 h-6 mb-1" />
              <span style={{ fontSize: '20px' }}>Home</span>
            </a>

            <a
              href="/about"
              onClick={closeMenu}
              className="flex flex-col items-center text-gray-700 text-sm hover:text-[#0fb8ce] transition"
            >
              <FaInfoCircle className="w-6 h-6 mb-1" />
              <span style={{ fontSize: '20px' }}>About Us</span>
            </a>

            <a
              href="/contact"
              onClick={closeMenu}
              className="flex flex-col items-center text-gray-700 text-sm hover:text-[#0fb8ce] transition"
            >
              <FaEnvelope className="w-6 h-6 mb-1" />
              <span style={{ fontSize: '20px' }}>Contact</span>
            </a>

            {/* Services with Dropdown */}
            <div className="relative flex flex-col items-center">
              <button
                onClick={toggleMobileDropdown}
                className="flex flex-col items-center text-gray-700 hover:text-[#0fb8ce] transition text-base focus:outline-none"
              >
                <FaServicestack className="w-6 h-6 mb-1" />
                <span className="text-lg flex items-center" style={{ fontSize: '20px' }}>
                  Services <FaChevronDown className="w-4 h-4 mt-1" />
                </span>
              </button>
              {mobileDropdownOpen && (
                <div className="bg-white border shadow-lg rounded-md z-50 w-48 max-h-48 overflow-y-auto mt-2">
                  <ul className="py-1">
                    <li>
                      <a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-sm">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-sm">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-sm">
                        Ecommerce
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-sm">
                        Creatives
                      </a>
                    </li>
                    <li>
                      <a href="/services" className="block px-4 py-2 hover:bg-blue-100 text-sm">
                        Quality Assurance
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center space-y-6 text-gray-700 text-sm">
              <span className="flex" style={{ fontSize: '20px' }}>
                <FaPhoneAlt className="w-6 h-6 mr-2 text-black" /> +971586308281
              </span>
              <button
                onClick={() => navigate("/contact")}
                className="px-4 py-4 border border-[#0e95ab] text-[#0e859a] text-sm font-medium rounded-full hover:bg-[#0fb8ce] hover:text-[#0D3B66] transition-colors mt-2"
                style={{ fontSize: '20px' }}
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