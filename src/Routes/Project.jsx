import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
// import HeroImage2 from '../Components/HeroImage2'
import PricingCards from '../Components/PricingCards'
// import WorkCard from '../Components/WorkCard'
import Work from '../Components/Work'
import HeroImg3 from '../Components/HeroImg3'


const Project = () => {
  return (
    <div>
      <h1>
        <Navbar />
        {/* <HeroImage2  heading="PROJECTS." text="Some of my recent works" /> */}
        <HeroImg3 />
        {/* <WorkCard/> */}
        <Work/>
        <PricingCards/>
        <Footer />
      </h1>
    </div>
  )
}

export default Project
