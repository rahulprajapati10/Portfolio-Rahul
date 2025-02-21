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
                <p>A passionate Frontend Web developer specializing in crafting engaging, responsive, 
                and user-freiendly website.</p>
                
                <p> With a solid foundation in HTML, CSS, Bootstrap, jQuery and JavaScript. I bring creative ideas to life through</p>
                <p>seamless and intuitive user interfaces.</p>
                <br />
                <p>I use AI tools also to create the modern and fully responsive website.</p><br />
            
                <h4>Currently , I'm leveling up my skills by diving into the MERN stack MongoDB, Express.js, React.js and Node.js-- to develop .</h4>
                <h4>scalable, dynamic , and high-performance web application</h4><br />
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
