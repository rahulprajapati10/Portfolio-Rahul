
import React from 'react'
import '../Components/WorkStyle.css'
import pro1 from '../assets/pro1.avif'
// import { NavLink } from 'react-router-dom'
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

function Work() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'></h1>
      <div className="project-container">
      {WorkCardData.map((val, ind)=>{
        return(
          <WorkCard 
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
          />
        )
      })}
      </div>
      
    </div>
  )
}

export default Work
