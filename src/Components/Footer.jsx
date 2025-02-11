import React from 'react'
import '../Components/FooterStyle.css'
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome className='home-p' size={30} style={{ color: "#fff", marginRight: "-2rem" }} />
                        <p className='home-p'>Gorakhpur - Uttar Pradesh ,</p>
                        <br />
                        <p className='country'>India</p>
                    </div>
                </div>
                {/* <div className="phone">
                    <h4 className='cont-h4'> <FaPhoneAlt size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <a href="">9519997813</a></h4>

                </div> */}

                <div className="email">
                    <h4> <FaMailBulk className='mailbulk' size={25} style={{ color: "#fff", marginRight: "1rem", marginLeft: "11rem", marginBottom: "-0.5rem" }} />
                    <a href="https://mail.google.com" target='_blank'>rahulprajapati@gmail.com</a></h4>

                </div>
            </div>
            <div className="right">

   

                <div className="social">
                       
                    <Link  to="https://www.linkedin.com/in/rahulprajapati10" target="_blank" ><FaLinkedin className='linkdin' size={25} style={{ color: "#fff", marginRight: "2rem" }} /></Link>
                    <Link to="https://github.com/rahulprajapati10" target="_blank"><FaGithub size={25} className='github' style={{ color: "#fff", marginRight: "2rem" }} /></Link>
                    <Link to="https://www.instagram.com/rahulprajapati.10" target="_blank"><FaInstagram className='instagram' size={25} style={{ color: "#fff", marginRight: "2rem" }} /></Link>
                    <Link to="https://www.youtube.com/" target="_blank"><FaYoutube className='youtube' size={25} style={{ color: "#fff", marginRight: "2rem" }} /></Link>
                    <Link to="https://www.facebook.com/" target="_blank"><FaFacebook className='facebook' size={25} style={{ color: "#fff", marginRight: "2rem" }} /> </Link>
                    <Link to="https://x.com/?lang=en&mx=2" target="_blank"><FaTwitter className='twitter' size={25} style={{ color: "#fff", marginRight: "2rem" }} /></Link>


                </div>

            </div>
                <div className="copyright">
                    <p className='cpr'>Copyright © 2025 my portfolio </p>

                    <p className='cpr'>All right reserved.</p>
                </div>

        </div>
    )
}

export default Footer
