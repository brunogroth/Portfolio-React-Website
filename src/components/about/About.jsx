import React from 'react'
import './about.scss'
import ME from '../../assets/profile-picture.png'
import { FaAward } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import CV from '../../assets/MyCV.pdf'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className='about-card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>5 Year Working with IT</small>
            </article>

            <article className='about-card'>
              <FaCode className='about-icon' />
              <h5>Dev</h5>
              <small>1 Year practice</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>
          </div>
          <div className="about-text">
            <p>
              I describe myself as a passionate <strong>self-taught</strong> person who <strong>loves coding</strong>, create and improve, but primarily a person who loves <strong>learn things deeply</strong>.
            </p>
            <p>
              I've started my career in IT at <strong>15 years old</strong>, and since then I just can't imagine me doing something different.
            </p>
            <p>
              On this journey I already had contact with a lot of IT areas like Hardware, Networks, Technical Support, SAP and others as you can check in my <a href={CV} download>Curriculum</a>, but the <b>Coding</b> and <strong>Software Development just take my heart forever</strong>.
            </p>
            <p>
              Today I am a <strong>Fullstack Web Developer</strong> at <a href="https://autoconf.com.br">Autoconf</a> in constant progress, motivated by making peoples lifes easier and happier.
            </p>
          </div>
          <a href="#contact" className='btn btn -primary btn-about'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
