import React from 'react';
import logo from '../assets/images/zu-logo-trans.png';
import barpic1 from '../assets/images/barpic1.png';
import barpic2 from '../assets/images/barpic2.jpg';
import barpic3 from '../assets/images/barpic3.jpg';

const Hero = ({ openPopup }) => {
  return (
    <section className="min-h-[50vh] flex flex-col rounded-2xl md:flex-row items-center justify-between px-8 py-16 bg-gradient-to-br from-zu-pink via-[#b24863] to-zu-green text-white w-5/6 mx-auto relative overflow-hidden" id='home'>
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-2xl"></div>
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 z-10 ml-15">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-green main-heading">
          From Morning To Midnight
        </h1>
        <h3 className="text-2xl md:text-6xl font-semibold text-zu-lime sub-heading">
          Check Out The New Lounge on The Block
        </h3>
        <p className="w-4/5 text-md md:text-md text-white/90 leading-relaxed body-text">
          Get ready to experience a new kind of vibe—where music, atmosphere, and unforgettable nights come together.
          Zu Bar is more than a lounge—it's a movement, a destination, and your new go-to spot in the city.
          Drinks, beats, energy... we've got it all. Join the newsletter to stay in the loop!
        </p>
        <div className="space-x-4">
          <button className="mt-4 px-6 py-3 bg-white text-zu-pink font-semibold rounded-full shadow-md hover:bg-zu-green hover:text-white transition duration-300">
            Join Now
          </button>
          <button
            onClick={openPopup}
            className="mt-4 px-6 py-3 bg-zu-green text-white font-semibold rounded-full shadow-md hover:bg-white hover:text-zu-pink transition duration-300"
          >
            Support Us
          </button>
        </div>
      </div>
      
      {/* Right Image */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center z-10 relative">
        {/* Logo Image */}
        <img
          src={logo}
          alt="zu-bar-logo"
          className="w-4/5 md:w-full max-w-lg object-contain drop-shadow-xl relative z-20"
        />
        {/* Additional images around the logo */}
        <img
          src={barpic1}
          alt="barpic1"
          className="absolute top-0 left-1/8 transform rotate-12 opacity-90 w-36 md:w-64"
        />
        <img
          src={barpic2}
          alt="barpic2"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-6 opacity-90 w-36 md:w-54"
        />
        <img
          src={barpic3}
          alt="barpic3"
          className="absolute bottom-0 right-1/8 transform -rotate-12 opacity-90 w-36 md:w-64"
        />
      </div>
    </section>
  );
};

export default Hero;