import React from 'react'
import Resume from '../../assets/Opensource-resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn third ' >Download Resume</a>
        <a href="#contact" className='btn third btn-primary'>Talk To Me</a>
    </div>
  )
}

export default CTA