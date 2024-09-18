import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({product}) => {
  return (
    <div className='flex flex-1 flex-col max-w-[282px]'>
      <div className='flex justify-center items-center bg-card rounded-xl max-sm:flex-1 max-sm:p-4 cursor-pointer'>
        <img 
        src={product.imgURL} 
        alt={product.name}
        className='object-contain' />
      </div>
      <div className='flex gap-2 mt-8'>
        <img 
        src={star}
        alt="star icon"
        width={24}
        height={24} />
        <p className='text-xl text-slate-gray font-montserrat'>(4.5)</p>
      </div>
      <p 
        className='text-2xl font-palanquin font-semibold mt-2 leading-normal'>
            {product.name}
      </p>
      <p className='text-coral-red text-2xl font-semibold mt-2'>{product.price}</p>
    </div>
  )
}

export default ProductCard
