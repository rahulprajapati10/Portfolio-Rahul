import React from 'react'
import '../Components/HeroImageStyle.css'
import IntroImg from '../assets/img7.avif'
import { Link } from 'react-router-dom'
import resume from '../../Rahul_Prajapati/CV.pdf'

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={IntroImg} alt="" className="intro-img" />
            </div>
            <div className="content" >
                <p>Hi, I'm a Front-End</p>
                <h1>Web Developer</h1>
                <div>
                <h3 class="home_text-rotator"></h3>
                    {/* <Link to='/project' className='btn btn-light'>Projects</Link>
                    <Link to='/contact' className='btn btn-light'>Contact</Link> */}
                    <div className='resume-div'><a href={resume} download={resume} className='btn btn-resume rotating-border rotateBorder' id='download-button' >Download Resume</a> </div>
                </div>
            </div>
        </div>
    )
}

export default HeroImage
