import React from 'react'
import ServiceList from './ServiceList'
import ServiceItem from './ServiceItem'
import './services.scss'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-container">
        <ServiceList serviceTitle={"Web Development"}>
          <ServiceItem serviceText="Teste 1"></ServiceItem>
          <ServiceItem serviceText="Teste 2"></ServiceItem>
          <ServiceItem serviceText="Teste 3"></ServiceItem>
          <ServiceItem serviceText="Teste 4"></ServiceItem>
        </ServiceList>
        <ServiceList serviceTitle={"UI/UX Design"}>
          <ServiceItem serviceText="Teste 5"></ServiceItem>
          <ServiceItem serviceText="Teste 6"></ServiceItem>
          <ServiceItem serviceText="Teste 7"></ServiceItem>
          <ServiceItem serviceText="Teste 8"></ServiceItem>
        </ServiceList>
        <ServiceList serviceTitle={"Others"}>
          <ServiceItem serviceText="Teste 9"></ServiceItem>
          <ServiceItem serviceText="Teste 10"></ServiceItem>
          <ServiceItem serviceText="Teste 11"></ServiceItem>
          <ServiceItem serviceText="Teste 12"></ServiceItem>
        </ServiceList>
      </div>
    </section>
  )
}

export default Services
