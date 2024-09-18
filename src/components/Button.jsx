import React from 'react'

const Button = ({label, iconURL, bgColor, textColor, borderColor, fullWidth}) => {
  return (
    <button 
        className={`flex px-7 py-4 rounded-full text-lg font-montserrat justify-center items-center gap-4 ${bgColor} ? ${bgColor} : bg-coral-red ${textColor} ? ${textColor} : text-white ${borderColor} && border ${fullWidth && 'w-full'}`} >
        {label}
        {iconURL && <img 
         src={iconURL}
         alt={label} />}
    </button>
  )
}

export default Button
