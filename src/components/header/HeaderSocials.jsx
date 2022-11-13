import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com/in/bruno-groth/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/brunogroth" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="mailto:brunom.groth@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope/></a>
    </div>
  )
}

export default HeaderSocials