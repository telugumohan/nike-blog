import React from 'react'
import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { footerLinks, navLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className='flex flex-col justify-between items-center max-container w-full gap-20'>
      <div className='flex flex-wrap w-full gap-10 max-lg:flex-col justify-center items-start'>
        <div className='sm:max-w-sm'>
          <img 
            src={footerLogo}
            alt="footer logo"
            width={130}
            height={30} />
            <p className='font-montserrat text-white-400 mt-8'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
            <div className='flex gap-4 items-center justify-start mt-8'>
              {socialMedia.map((socialItem) => (
                <div className='flex justify-center items-center bg-white w-11 h-11 rounded-full'>
                  <img 
                    src={socialItem.src} 
                    alt={socialItem.alt}
                    width={24}
                    height={24} />
                </div>
              ))}
            </div>
        </div>
        <div className='flex flex-wrap flex-1 lg:gap-10 gap-20 max-lg:mt-20 justify-between items-start'>
          {footerLinks.map((footerLink) => (
            <div>
              <h4 className='text-2xl font-montserrat text-white font-medium mb-4'>
                {footerLink.title}
              </h4>
              <ul className='flex flex-col gap-2'>
                {footerLink.links.map((link) => (
                  <li className='text-white-400 cursor-pointer hover:text-slate-gray font-montserrat'>
                    <a href={link.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center w-full sm:gap-10 gap-2 max-sm:flex-col'>
       <div className='flex gap-3'>
        <img 
          src={copyrightSign}
          alt="copyright sign"
          width={24}
          height={24} />
        <p className='text-md text-white-400 font-montserrat text-center'>Copyright. All rights reserved.</p>
       </div>
       <p className='text-md text-white cursor-pointer font-montserrat text-center'>Terms & Conditions</p>
      </div>
    </section>
  )
}

export default Footer
