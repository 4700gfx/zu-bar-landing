import React, { useState } from 'react';
import logo from '../assets/images/zu-main-logo-trans.png';
import { FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'coming', label: "What's Coming" },
  { id: 'join', label: 'Join The Movement' },
  { id: 'contact', label: 'Contact Us' },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram />, href: 'https://instagram.com' },
  { icon: <FaTwitter />, href: 'https://twitter.com' },
  { icon: <FaYoutube />, href: 'https://youtube.com' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="zu-logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 font-semibold text-main-dark-green">
          {NAV_ITEMS.map(({ id, label }) => (
            <li
              key={id}
              className="transition-all duration-200 px-6 py-2 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white hover:scale-105"
            >
              <a href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-xl text-main-dark-green">
          {SOCIAL_LINKS.map(({ icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 p-2 rounded-full hover:bg-pink-500 hover:text-white hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-main-dark-green"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zu-lime px-10 pb-4">
          <ul className="flex flex-col gap-4 text-main-dark-green font-semibold">
            {NAV_ITEMS.map(({ id, label }) => (
              <li
                key={id}
                className="transition-all duration-200 px-6 py-2 rounded-full cursor-pointer hover:bg-pink-500 hover:text-white hover:scale-105"
              >
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex justify-start gap-4 mt-4 text-xl">
            {SOCIAL_LINKS.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-200 p-2 rounded-full hover:bg-pink-500 hover:text-white hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
