import React from 'react'
import CV from "../../assets/Bhaskar_CV_13April.pdf"
export const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className="btn">Download Resume</a>

        <a href="#contact"className='btn btn-primary' >Contact Me!</a>
    </div>
  )
}
