import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Projects/Project'
import Certificate from './Components/Certifications/Certificate'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Certificate/>
    </div>
  )
}

export default App
