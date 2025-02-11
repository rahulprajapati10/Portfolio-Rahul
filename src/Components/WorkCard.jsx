import React from 'react'
import '../Components/WorkCardStyle.css'
// import pro1 from '../assets/pro1.avif'
import { NavLink } from 'react-router-dom'

function WorkCard(props) {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="" />
    <h3 className='project-title'>{props.title}</h3>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn" >View</NavLink>
        <NavLink to={props.Source} className="btn" >Source</NavLink>
      </div>
    </div>
</div>
  )
}

export default WorkCard
