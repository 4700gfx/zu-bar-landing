import React, { useEffect, useState } from 'react'
import whatscoming1 from '../assets/images/whatscoming1.jpg'
import whatscoming2 from '../assets/images/whatscoming2.jpg'
import whatscoming3 from '../assets/images/whatscoming3.jpg'
import whatscoming4 from '../assets/images/whatscoming4.jpg'

const WhatsComing = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 2); // 2 months from now

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const upcomingEvents = [
    {
      type: "Workshops",
      subheading: "Come Connect With Us",
      text: "We're creating daytime vibes at Zu Bar where you can learn, grow, and connect. From creative workshops to inspiring networking events, there’s always something to look forward to.",
      image: whatscoming1,
    },
    {
      type: "Pop-Up Events",
      subheading: "Pop Up & Pop Out",
      text: "Get ready for exclusive pop-up shops featuring your favorite local brands! Come support the community and vibe with us — you never know who or what will show up next.",
      image: whatscoming2,
    },
    {
      type: "Happy Hour + More",
      subheading: "Shots Half Off",
      text: "Half-off drinks and full-on energy. Our Happy Hour is your perfect excuse to unwind, laugh, and toast to good times — with even more fun events on the way.",
      image: whatscoming3,
    },
    {
      type: "Parties & Nightlife",
      subheading: "Night Life, Party Life",
      text: "When the sun goes down, the party starts. From themed nights to surprise DJs, Zu Bar transforms into a nightlife experience you won’t forget. Stay tuned and stay out late!",
      image: whatscoming4,
    },
  ]

  return (
    <section className='w-11/12 mx-auto mt-15' id='coming'>
      {/* Heading Section */}
      <div className='flex flex-col items-center mb-6'>
        <h1 className='main-heading text-zu-green text-6xl text-center'>What's Coming</h1>
        <h3 className='sub-heading text-zu-pink text-3xl text-center mt-2'>Coming To A Zu Near You</h3>
      </div>

      {/* Countdown Timer */}
      <div className='text-center mb-12'>
        <h4 className='text-2xl font-semibold text-zu-green'>Countdown to Launch</h4>
        <div className='flex justify-center items-center gap-4 mt-4 flex-wrap'>
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((unit, index) => (
            <div key={index} className='flex flex-col items-center'>
              <div className='w-20 h-20 md:w-24 md:h-24 rounded-full main-heading bg-zu-pink text-white flex items-center justify-center text-2xl md:text-5xl font-bold shadow-md'>
                {unit.value}
              </div>
              <span className='mt-2 text-zu-green font-medium text-sm md:text-base'>{unit.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Cards Section */}
      <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
        {upcomingEvents.map((event, index) => (
          <div key={index} className='bg-white max-w-sm w-full rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
            <img 
              src={event.image} 
              alt={event.type} 
              className='w-full h-56 object-cover'
            />
            <div className='p-5'>
              <h2 className='text-2xl font-bold text-zu-green'>{event.type}</h2>
              <h3 className='text-3xl sub-heading text-zu-pink'>{event.subheading}</h3>
              <p className='text-gray-700 body-text mt-2'>{event.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhatsComing
