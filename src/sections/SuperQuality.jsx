import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section className='flex justify-between items-center max-lg:flex-col w-full max-container gap-10 mt-20'>
      <div className='flex flex-col flex-1 lg:max-w-lg'>
        <h2 className='text-4xl font-bold font-palanquin'>We Provide You 
          <span className='text-coral-red'> Super Quality</span> Shoes</h2>
        <p className='info-text mt-4'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className='info-text mt-6'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='mt-12'>
         <Button label={"View Details"}/>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img 
        src={shoe8}
        width={570}
        height={522}
        alt="super quality img" />
      </div>
    </section>
  )
}

export default SuperQuality
