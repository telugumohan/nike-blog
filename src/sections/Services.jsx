import React from 'react'
import ServiceCard from '../components/ServiceCard'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='flex gap-8 justify-center items-center w-full max-container flex-wrap'>
      {services.map((service) => (
        <ServiceCard 
          service={service}
          key={service.label} />
      ))}
    </section>
  )
}

export default Services
