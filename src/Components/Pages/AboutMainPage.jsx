import React from 'react'
import '../Pages/AboutMainPageStyle.css'
import '../../Components/skillsStyle.css'
import aboutpic from '../../assets/react_img6.jpg'
import { FaMailBulk, FaSignInAlt, FaVoicemail } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import '../../Components/HeroImage2Style.css'
import '../../Components/Navbarstyle.css'
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'



function AboutMainPage() {

    // sr.reveal('.about_img' , {})
    // sr.reveal('.about_subtitle' , {delay:200})
    // sr.reveal('.about_text' , {delay:400})
    // sr.reveal('.about_information-data' , {delay:600})


    useEffect(() => {
        ScrollReveal().reveal(".about_img", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal(".about_subtitle", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            delay: 200,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal(".about_text", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            delay: 400,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal(".about_information-data", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            delay: 600,
            reset: true
        })
    })


    return (
        <div className='about_main_page_top_space'>
            <section className="about section" id="about">
                <h2 id='about-title' className="section-title">About</h2>
                <div className="about_container bd-grid">
                    <div className="about_img"><img src={aboutpic} alt="" /></div>
                    <div>
                        <h2 className="about_subtitle">I'm Rahul Prajapati</h2>
                        <p className="about_text">
                            Dedicated and highly motivated Bachelor of Computer Application (BCA) student with a strong foundation in software
                            development, debugging and Agile methodologies. Proficient in programming languages such as HTML, CSS, JavaScript
                            React.js and basic Java with hands-on experience in web development, database management and software testing .
                            Passionate about problem solving and eager to apply technical skills in real-world projects. .{" "}
                        </p>
                        <br />
                        <p className="about_information-data">
                            <FaSignInAlt></FaSignInAlt>
                            <i className="bx bx-user about_information-icon" />
                            <span className='information-p' style={{ fontWeight: "bold" }}>Rahul Prajapati</span>
                        </p>
                        <p className="about_information-data">
                            <FaPhone></FaPhone>
                            <i className="bx bx-phone about_information-icon" />
                            <span className='information-p' style={{ fontWeight: "bold" }}>9519997813</span>
                        </p>
                        <p className="about_information-data">
                            <FaMailBulk></FaMailBulk>
                            <i className="bx bx-envelope about_information-icon" />
                            <span className='information-p' style={{ fontWeight: "bold" }}>rahulprajapati2930@gmail.com</span>
                        </p>
                    </div>
                    <div></div>
                </div>
            </section>

        </div>
    )
}

export default AboutMainPage
