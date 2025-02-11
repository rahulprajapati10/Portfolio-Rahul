import React from 'react'
import Navbar from '../Components/Navbar'
import HeroImage2 from '../Components/HeroImage2'
import Footer from '../Components/Footer'
import Form1 from '../Components/Form1'
import HeroImg4 from '../Components/HeroImg4'



const Contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroImg4/>
     {/* <HeroImage2 heading="CONTACT."  text="Let's have a chat"/> */}
     <Form1/>
     <Footer/>
    </div>
  )
}

export default Contact
