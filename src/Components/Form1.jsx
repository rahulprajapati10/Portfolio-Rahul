import React from 'react'
import '../Components/Form1Style.css'

function Form1() {
  return (
    <div className='form'>
      <form>
        <label htmlFor="">Your Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Subject</label>
        <input type="text" />
        <label htmlFor="">Message</label>
        <textarea name="" id="" rows={6} placeholder='Type Your Message Here..'></textarea>
        <button className='btn'>Submit</button>
      </form>
      
    </div>
  )
}

export default Form1
