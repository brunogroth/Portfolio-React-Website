import React from 'react'
import './footer.scss'
import {FaGithub, FaHeart, FaLinkedin} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const footer = () => {
  return (
    <footer>
       <a href="#" className='footer-logo'>Bruno Groth</a>

       <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
       </ul>

       <div className="footer-socials">
         <a href="github.com/brunogroth"><FaGithub/></a>
         <a href="https://linkedin.com/in/bruno-groth/"><FaLinkedin/></a>
         <a href="https://instagram.com/userbruno_/"><FiInstagram/></a>
       </div>

       <div className="footer-copyright">
        <small> Made with <FaHeart/> by Bruno using React. All rights reserved.</small>
       </div>
    </footer>
  )
}

export default footer
