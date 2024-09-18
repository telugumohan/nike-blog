import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

const Hero = () => {
  const [currentBigShoe, setBigShoe] = useState(bigShoe1)
  return (
    <section className='flex flex-col xl:flex-row w-full gap-10 max-container min-h-screen justify-center items-center'>
      <div className='relative flex flex-col xl:w-2/5 justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red mb-10'>Our Summer collections</p>
        <h1 className='text-8xl font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px] text-wrap'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br/>
          <span className='text-coral-red inline-block mt-3'> Nike </span> Shoes</h1>
        <p className='text-lg font-montserrat text-slate-gray mt-8 mb-16 sm:max-w-sm w-full leading-[32px]'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button
          label={"Shop Now"}
          iconURL={arrowRight} />
          <div className='flex justify-start items-start gap-16 mt-20'> 
            {statistics.map((stat) => (
             <div
              key={stat.label}
              className='flex flex-col gap-1'>
                 <h3 className='text-4xl font-palanquin font-bold'>{stat.value}</h3>
                 <p className='text-lg text-slate-gary font-montserrat'>{stat.label}</p>
             </div>
            ))}
          </div>
      </div>
      <div className='relative flex justify-center items-center bg-primary w-full  bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40'>
        <img 
          src={currentBigShoe} 
          alt="big shoe img"
          width={540}
          height={590}
          className='object-contain relative z-10' />
          <div className='absolute flex gap-10 -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {shoes.map((shoe) => (
              <ShoeCard 
                key={shoe.thumbnail}
                shoe={shoe}
                setBigShoe={setBigShoe}
                currentBigShoe={currentBigShoe} />
            ))}
          </div>
      </div>
    </section>
  )
}

export default Hero
