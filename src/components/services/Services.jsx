import React from 'react'
import ServiceList from './ServiceList'
import './services.scss'
import { servicesOne, servicesTwo, servicesThree } from './ServicesDatabase'
import { BiCheck } from 'react-icons/bi'

const Services = () => {

  return (
    <section id='services'>
      <h5>The Value I Bring</h5>
      <h2>What I Offer</h2>
      <div className="container services-container">
        <ServiceList serviceTitle={"Soft Skills"}>
          {
            servicesOne.map(({ id, text }) => {
              return (
                <li key={id}>
                  <BiCheck className='service-list-icon'/>
                  <p>{text}</p>
                </li>
              )
            })
          }
        </ServiceList>
        <ServiceList serviceTitle={"My Passions are"}>
          {
            servicesTwo.map(({ id, text }) => {
              return (
                <li key={id}>
                  <BiCheck className='service-list-icon'/>
                  <p>{text}</p>
                </li>
              )
            })
          }
        </ServiceList>
        <ServiceList serviceTitle={"Currently Working with"}>
          {
            servicesThree.map(({ id, text }) => {
              return (
                <li key={id}>
                  <BiCheck className='service-list-icon'/>
                  <p>{text}</p>
                </li>
              )
            })
          }
        </ServiceList>
      </div>
    </section>
  )
}

export default Services
