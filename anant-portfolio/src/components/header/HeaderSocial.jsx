import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anant-singh-raghuvanshi-0713b3179/" target="_blank"><FiLinkedin /></a>
        <a href="https://github.com/anantraghuvanshi" target="_blank"><FiGithub /></a>
        <a href="https://twitter.com/anant_codes" target="_blank"><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocial