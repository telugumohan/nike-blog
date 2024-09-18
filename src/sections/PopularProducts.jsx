import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'

const PopularProducts = () => {
  return (
    <section className='flex flex-col w-full max-container mt-20'>
      <h2 className='text-4xl font-palanquin font-bold'>
       Our <span className='text-coral-red'>Popular</span> Products
      </h2>
      <p className='text-md text-slate-gray font-montserrat mt-8 lg:max-w-lg'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-16'>
        {products.map((product) => (
          <div key={product.name}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts
