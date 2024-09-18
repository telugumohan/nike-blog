import React from 'react'

const ShoeCard = ({shoe, setBigShoe, currentBigShoe}) => {

  const handleClick = () => {
    console.log(shoe);
    setBigShoe(shoe.bigShoe);
  };
  return (
    <div 
      className={`flex justify-center items-center bg-primary bg-card bg-cover bg-center sm:w-40 sm:h-40 border-2 rounded-xl cursor-pointer max-sm:flex-1 max-sm:p-4 ${currentBigShoe === shoe.bigShoe && "border-coral-red"}`}
      onClick={handleClick}>
        <img 
        src={shoe.bigShoe} 
        alt={shoe.thumbnail}
         height="103.34"
         width="127"
        className='object-contain' />
  </div>
  )
}

export default ShoeCard
