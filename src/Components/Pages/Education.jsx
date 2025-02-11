import React, { useEffect } from 'react'
import '../Pages/EducationStyle.css'
import '../../Components/skillsStyle.css'
import ScrollReveal from 'scrollreveal'

function Education() {

    useEffect(() => {
        ScrollReveal().reveal(".section-title", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal(".education_content", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            interval: 200,
            reset: true
        })
    })

    useEffect(() => {
        ScrollReveal().reveal(".education_time", {
            origin: 'top',
            distance: '80px',
            duration: 3000,
            interval: 200,
            reset: true
        })
    })




    return (
        <div className='margin-education'>
            <section className="education" section="">
                <h2 className="section-title">My Education</h2>
                <div className="education_container bd-grid">
                    <div className="education_content">
                        <div>
                            <h3 className="education_year">2021 - 2024 </h3>
                            <span className="education_university">DDU University , Gorakhpur</span>
                            <span className="education_percentage">
                                Percentage:65% 
                            </span>
                        </div>
                        <div className="education_time">
                            <span className="education_rounder" />
                            <span className="education_line" />
                        </div>
                        <div>
                            <h3 className="education_race">BCA</h3>
                            <span className="education_institute">
                                Digvijay Nath P.G. College , Gorakhpur
                            </span>
                        </div>
                    </div>
                    <div className="education_content">
                        <div>
                            <h3 className="education_year">2019-2021</h3>
                            <span className="education_university">
                                ISC <br />
                            </span>
                            <span className="education_percentage">Percentage:82%</span>
                        </div>
                        <div className="education_time">
                            <span className="education_rounder" />
                            <span className="education_line" />
                        </div>
                        <div>
                            <h3 className="education_race">Intermediate</h3>
                            <span className="education_institute">
                                RPM Academy Gorakhpur
                            </span>
                        </div>
                    </div>
                    <div className="education_content">
                        <div>
                            <h3 className="education_year">2017-2019</h3>
                            <span className="education_university">ICSE</span>
                            <span className="education_percentage">Percentage:80%</span>
                        </div>
                        <div className="education_time">
                            <span className="education_rounder" />
                            <span className="education_line" />
                        </div>
                        <div>
                            <h3 className="education_race">Matriculation</h3>
                            <span className="education_institute">
                                RPM Academy Gorakhpur
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Education
