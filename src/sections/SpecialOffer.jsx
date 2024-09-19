import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex max-xl:flex-col-reverse w-full max-container items-center justify-center gap-10'>
      <div className='flex flex-1 justify-center items-center'>
        <img 
        src={offer}
        width={720}
        height={522}
        alt="super quality img" />
      </div>
      <div className='flex flex-col flex-1'>
        <h2 className='text-4xl font-bold font-palanquin'> 
          <span className='text-coral-red'>Special </span> Offer</h2>
        <p className='info-text mt-4'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className='info-text mt-6'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className='flex gap-4 mt-12'>
         <Button
          label={"Shop Now"}
          iconURL={arrowRight}/>
         <Button 
          label={"Learn More"}
          bgColor={"bg-white"}
          textColor={"text-green-500"}
          borderColor={"border-slate-500"} />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
