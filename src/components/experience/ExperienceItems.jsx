import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExperienceItems = ({item, experience}) => {
  return (
    <article className='experience-details'>
        <BsPatchCheckFill/>
        <h4>{item}</h4>
        <small className='text-light'>{experience}</small>
  </article>
  )
}

export default ExperienceItems
