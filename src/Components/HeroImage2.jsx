import React, {Component} from 'react'
import '../Components/HeroImage2Style.css'
import contactImg from '../assets/contact.avif'




const HeroImage2 = (props) => {
  return (
    
    <div className=''>
        <div className="heading">
      <img src={contactImg} alt="" className='heroim2' />
        <h1>{props.heading}</h1>
        <br />
        <br />
        <p>{props.text} <br />
        <br />
        <p>I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.</p>
        
        </p> 
        

        </div>
      
    </div>
  )
}

export default HeroImage2



