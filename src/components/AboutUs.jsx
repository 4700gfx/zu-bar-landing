import React from 'react';
import aboutUsPic from '../assets/images/barpic2.jpg';
import aboutUsPic2 from '../assets/images/about-us-bar2.jpg';
import aboutUsPic3 from '../assets/images/about-us-bar3.jpg';

const AboutUs = () => {
  return (
    <section className="w-11/12 sm:w-5/6 mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-10 sm:py-16 bg-white rounded-2xl mt-10" id="about">
      {/* Left Section - Grid Layout */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 grid grid-cols-2 gap-4 md:mr-10">
        {/* First Image (tall image) */}
        <div className="row-span-2 h-[24rem] sm:h-[28rem] md:h-[34rem] col-span-2 sm:col-span-1">
          <img
            src={aboutUsPic}
            alt="bar-pic-1"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Second Image */}
        <div className="h-[12rem] sm:h-[16rem]">
          <img
            src={aboutUsPic2}
            alt="bar-pic-2"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Third Image */}
        <div className="h-[12rem] sm:h-[16rem]">
          <img
            src={aboutUsPic3}
            alt="bar-pic-3"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="main-heading text-2xl sm:text-3xl md:text-6xl font-bold text-zu-pink">
          Our Vibe
        </h1>
        <h3 className='sub-heading text-2xl sm:text-3xl text-zu-green'>Energies & Vibes</h3>
        <p className="body-text italic text-sm sm:text-md leading-relaxed mx-auto md:mx-0 w-full sm:w-5/6 text-zu-green">
          We're a vibe you feel in your chest. A home for the curious, the creative, and the conscious.
          From morning meditations to midnight moves—ZU moves with you. It's a sanctuary for
          self-expression, a canvas for culture, and a space where every beat has meaning. Whether you're
          sipping a signature cocktail or catching the rhythm on the dance floor, every moment at ZU is
          designed to ignite your senses and connect you with something deeper. Come as you are, stay for
          the energy, and leave with stories worth telling.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
