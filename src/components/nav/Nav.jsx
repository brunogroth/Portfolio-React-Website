import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquare} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const nav = () => {
  return (
    <div>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquare/></a>

    </div>
  )
}

export default nav
