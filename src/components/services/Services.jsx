import React from 'react'
import ServiceList from './ServiceList'
import ServiceItem from './ServiceItem'
import './services.scss'

const Services = () => {
  return (
    <section id='services'>
      <h5>The Value I Bring</h5>
      <h2>What I Offer</h2>
      <div className="container services-container">
        <ServiceList serviceTitle={"Soft Skills"}>
          <ServiceItem serviceText="Self Learning"></ServiceItem>
          <ServiceItem serviceText="Communication"></ServiceItem>
          <ServiceItem serviceText="Digital Literacy"></ServiceItem>
          <ServiceItem serviceText="Creative Solutions Maker"></ServiceItem>
        </ServiceList>
        <ServiceList serviceTitle={"My Passions are"}>
          <ServiceItem serviceText="Solve difficult problems"></ServiceItem>
          <ServiceItem serviceText="Create Valuable Solutions"></ServiceItem>
          <ServiceItem serviceText="Work Hard"></ServiceItem>
          <ServiceItem serviceText="Learn every day"></ServiceItem>
        </ServiceList>
        <ServiceList serviceTitle={"Currently Working with"}>
          <ServiceItem serviceText="Laravel"></ServiceItem>
          <ServiceItem serviceText="Git"></ServiceItem>
          <ServiceItem serviceText="AWS"></ServiceItem>
          <ServiceItem serviceText="Serverless"></ServiceItem>
        </ServiceList>
      </div>
    </section>
  )
}

export default Services
