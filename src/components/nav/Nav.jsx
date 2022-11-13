import React from 'react'
import './nav.scss'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquare, BiListUl} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} title="Home" ><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} title="About" ><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} title="Experience" ><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''} title="Services" ><RiServiceLine/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ activeNav === '#portfolio' ? 'active' : ''} title="Portfolio" ><BiListUl/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''} title="Contact" ><BiMessageSquare/></a>
    </nav>
  )
}

export default Nav
