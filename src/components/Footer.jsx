import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/images/zu-logo-trans.png';

const Footer = () => {
  return (
    <footer className="bg-zu-green text-main-dark-green px-4 py-6 w-11/12 mx-auto rounded-t-2xl shadow-inner">
      <div className="max-w-6xl mx-auto">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Column 1 - Main Website */}
          <div>
            <h4 className="main-heading text-xl text-white mb-2">Main Website</h4>
            <ul className="space-y-1 text-sm">
              {['Home', 'Our Vibe', "What's Coming"].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:underline body-text hover:tracking-wider hover:text-main-dark-green transition-all duration-300 ease-in-out"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - More on Zu */}
          <div>
            <h4 className="text-white  main-heading text-xl mb-2">More On Zu</h4>
            <ul className="space-y-1 text-sm">
              {['Join The Movement', 'Countdown', 'Learn More'].map((text, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:underline hover:tracking-wider hover:text-main-dark-green body-text transition-all duration-300 ease-in-out"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Icons */}
          <div>
            <h4 className="text-base font-semibold mb-2">Follow Us</h4>
            <div className="flex items-center space-x-4">
              {[
                { icon: <FaFacebookF />, href: '#' },
                { icon: <FaInstagram />, href: '#' },
                { icon: <FaXTwitter />, href: '#' },
              ].map(({ icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-lg p-2 rounded-full bg-zu-pink text-white hover:bg-white hover:text-black hover:scale-110 hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col items-center border-t border-main-dark-green/20 pt-4">
          <img
            src={logo}
            alt="Zu Logo"
            className="w-20 mb-1 transition-transform duration-300 hover:scale-105"
          />
          <p className="text-xs font-medium text-center transition-all duration-300 hover:tracking-wide">
            &copy; {new Date().getFullYear()} Zu Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
