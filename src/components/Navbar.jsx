import React from 'react';
import logo from '../assets/images/zu-main-logo-trans.png';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import social icons

const Navbar = () => {
  const navbarItems = {
    home: 'Home',
    about: 'About Us',
    coming: "What's Coming",
    join: 'Join The Movement',
    contact: 'Contact Us',
  };

  return (
    <header className="max-w-11/12 mx-auto body-text">
      <nav className="max-w-5/8 mx-auto px-6 py-4 flex items-center justify-between rounded-b-2xl">
        {/* Left - Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="zu-logo" className="h-12 w-auto object-contain" />
        </div>

        {/* Center - Nav Links */}
        <ul className="flex gap-6 body-text font-semibold font-medium justify-center flex-1">
          {Object.entries(navbarItems).map(([key, label]) => (
            <li key={key} className="hover:text-deepRed transition-colors duration-200 cursor-pointer">
              <a href={`#${key}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Right - Social Media Icons */}
        <div className="flex items-center gap-4 text-xl text-black">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-deepRed transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-deepRed transition-colors" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-deepRed transition-colors" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
