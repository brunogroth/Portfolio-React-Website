import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const ExperienceItems = ({item, experience}) => {
  return (
    <article className='experience-details'>
        <BsPatchCheckFill className='experience-details-icon'/>
        <div>
          <h4>{item}</h4>
          <small className='text-light'>{experience}</small>
        </div>
  </article>
  )
}

export default ExperienceItems
