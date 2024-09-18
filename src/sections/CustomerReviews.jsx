import React from 'react'
import { reviews } from '../constants'
import CustomerReview from '../components/CustomerReview'

const CustomerReviews = () => {
  return (
    <section className='flex flex-col justify-center items-center bg-pale-blue w-full max-container padding-x padding-y'>
      <div>
      <div className='flex flex-col flex-1 items-center justify-center'>
        <h2 className='text-4xl font-bold font-palanquin text-center'>What Our 
          <span className='text-coral-red'> Customers </span>Say?</h2>
        <p className='info-text mt-4 text-center max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>
      </div>
      <div className='flex items-center justify-evenly w-full mt-24 max-lg:flex-col gap-10'>
        {reviews.map((review) => (
          <CustomerReview review={review}/>
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews
