import React from 'react'
import { BiCheck } from 'react-icons/bi'

    const ServiceItem = ({serviceText}) => {
  return (
    <li>
        <BiCheck className='service-list-icon'/>
        <p>{serviceText}</p>
    </li>
  )
}

export default ServiceItem
