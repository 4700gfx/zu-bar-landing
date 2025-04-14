import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import WhatsComing from './components/WhatsComing'
import JoinTheMovement from './components/JoinTheMovement'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <WhatsComing></WhatsComing>
      <JoinTheMovement></JoinTheMovement>
      <Footer></Footer>
    </div>
  )
}

export default App
