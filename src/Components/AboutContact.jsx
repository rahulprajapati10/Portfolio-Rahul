import '../Components/AboutContactStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'
import reactimg1 from '../assets/react_img.jpg'
import reactimg2 from '../assets/react_img6.jpg'

function AboutContact() {
    return (
        <div className='about'>
            <div className="left">
               
                <br />
                <p>I'm a full stack Web developer. I create responsive and  secure websites.</p>
                <br />
                <p>I am a skilled and passionate web designer with experience in creating visually appealing and <br /> user-friendly websites.</p><br />
                <p>I am proficient in front-end developmemt and i can work on backend also .</p>
                <br />
                <p>I use AI tools also to create the modern and fully responsive website.</p>
                <br />
                <h4>I use MERN technology to create the website.</h4>
                <br />
                {/* <h3></h3> */}

                <Link to="/contact">
                    <button className='btn'>Hire Me</button>
                </Link>

            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={reactimg1} alt="true" className='img' />
                    </div>
                    <div className="img-stack bottom">
                        <img src={reactimg2} alt="true" className='img' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContact
