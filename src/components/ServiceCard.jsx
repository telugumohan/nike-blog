import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='flex-1 px-10 py-16 rounded-[20px] shadow-3xl w-full sm:w-[350px] sm:min-w-[350px]'>
      <div className='flex justify-center items-center bg-coral-red rounded-full w-11 h-11'>
        <img 
            src={service.imgURL} 
            alt={service.label}
            width={24}
            height={24} />
      </div>
      <h3 className='text-3xl font-palanquin font-semibold mt-4'>
        {service.label}
      </h3>
      <p className='text-xl font-montserrat info-text break-words mt-2'>
        {service.subtext}
      </p>
    </div>
  )
}

export default ServiceCard
