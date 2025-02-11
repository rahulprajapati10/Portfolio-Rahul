import React from 'react'
import Navbar from '../Components/Navbar'
// import HeroImage2 from '../Components/HeroImage2'
import Footer from '../Components/Footer'
import AboutContact from '../Components/AboutContact'
import Education from '../Components/Pages/Education'
import AboutMainPage from '../Components/Pages/AboutMainPage'

const About = () => {
  return (
    <div>
     <Navbar/>
     <AboutMainPage/>
     {/* <HeroImage2 heading="ABOUT." text="I'm a friendly Front-End Developer"/> <br /> */}
     <AboutContact/>
     <Education/>
     <Footer/>
    </div>
  )
}

export default About
