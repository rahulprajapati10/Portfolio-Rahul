import React from 'react'
import '../Components/HeroImg3Style.css'
import xyz from '../assets/xyz.avif'

function HeroImg3() {
  return (
    <div className="hero">
      <div className="mask">
        <img src={xyz} alt="" className="intro-img" />
      </div>
      <div className="content" >
        <h1>Project.</h1>
        <p className='recent-work'>Some of my recent works</p>

      </div>
    </div>
  )
}

export default HeroImg3
