import React, { useEffect } from 'react'
import '../Components/skillsStyle.css'
import ScrollReveal from 'scrollreveal'


function SkillPage() {

    // useEffect(() => {
    //     ScrollReveal().reveal("#skills_name", {
    //         origin: 'top',
    //         distance: '80px',
    //         duration: 3000,
    //         reset: true
    //     })
    // })

    // useEffect(() => {
    //     ScrollReveal().reveal(".skills_text", {
    //         origin: 'top',
    //         distance: '80px',
    //         duration: 3000,
    //         delay: 100,
    //         reset: true
    //     })
    // })

    useEffect(() => {
        ScrollReveal().reveal(".skills_data", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            interval: 100,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal("#skills_subtitle", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            interval: 100,
            reset: true
        })
    })




    return (
        <div className='skill-section-top-space' >
            <section className="skils section" id="skills">
                <h2 id='skill_text' className="section-title">My Skills</h2>
                <div id='kill_texts' className="skills_container ">
                    <div >

                        <div className="skills_data">
                            <div className="skills_name">
                                <span className="skills_name">HTML5</span>
                            </div>
                            <div>
                                <span className="skills_percentage">80%</span>
                            </div>
                            <div className="skills_bar skills_html" />

                        </div>

                        <div className="skills_data">
                            <div className="skills_name">
                                <span className="skills_name">CSS</span>
                            </div>
                            <div>
                                <span className="skills_percentage">70%</span>
                            </div>
                            <div className="skills_bar skills_css" />
                        </div>

                        <div className="skills_data">
                            <div className="skills_name">
                                <span className="skills_name">JavaScript</span>
                            </div>
                            <div>
                                <span className="skills_percentage">70%</span>
                            </div>
                            <div className="skills_bar skills_javascript" />
                        </div>





                        <div className="skills_data">
                            <div className="skills_name">
                                <span className="skills_name">React js</span>
                            </div>
                            <div>
                                <span className="skills_percentage">80%</span>
                            </div>
                            <div className="skills_bar skills_react" />
                        </div>


                        <div className="skills_data">
                            <div className="skills_name">
                                <span className="skills_name">Node js</span>
                            </div>
                            <div>
                                <span className="skills_percentage">30%</span>
                            </div>
                            <div className="skills_bar skills_node" />
                        </div>

                        <div className="skills_data" id='skills_subtitle'>
                            <div className="skills_name">
                                <span className="skills_name">MongoDB</span>
                            </div>
                            <div>
                                <span className="skills_percentage">30%</span>
                            </div>
                            <div className="skills_bar skills_mongodb" />
                        </div>

                        <div className="skills_data" id='skills_subtitle'>
                            <div className="skills_name">
                                <span className="skills_name">Java</span>
                            </div>
                            <div>
                                <span className="skills_percentage">40%</span>
                            </div>
                            <div className="skills_bar skills_java" />
                        </div>

                        <div className="skills_data" id='skills_subtitle'>
                            <div className="skills_name">
                                <span className="skills_name">Python</span>
                            </div>
                            <div>
                                <span className="skills_percentage">50%</span>
                            </div>
                            <div className="skills_bar skills_python" />
                        </div>




                    </div>
                </div>
            </section>
        </div>
    )
}

export default SkillPage
