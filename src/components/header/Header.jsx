import React from 'react'
import './header.scss'
import CTA from './CTA.jsx'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Bruno Groth</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
