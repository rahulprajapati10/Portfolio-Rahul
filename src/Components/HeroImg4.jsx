import React from 'react'
import contactImg from '../assets/contact.avif'
import '../Components/HeroImg3Style.css'

function HeroImg4() {
  return (
    <div>
      <div className="hero">
            <div className="mask">
              <img src={contactImg} alt="" className="intro-img"  />
            </div>
            <div className="content" >
              <h1>Contact Me</h1>
              <h3 className='lets-connect'>Let's have a chat</h3>
              <p className='recent-work'>I am a skilled and passionate Frontend Web Developer with experience in creating visually appealing and user-friendly websites.</p>
      
            </div>
          </div>
    </div>
  )
}

export default HeroImg4
