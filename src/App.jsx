import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhatsComing from './components/WhatsComing'
import JoinTheMovement from './components/JoinTheMovement'
import Footer from './components/Footer'
import Popup from './components/Popup'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Open popup when component mounts (user arrives on site)
  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

  const closePopup = () => setIsPopupOpen(false);
  const openPopup = () => setIsPopupOpen(true);

  return (
    <div className='bg-zu-lime/80'>
      <Navbar />
      <Hero openPopup={openPopup} />
      <AboutUs />
      <WhatsComing />
      <JoinTheMovement />
      <Footer />
      
      {/* Popup Component */}
      <Popup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  )
}

export default App