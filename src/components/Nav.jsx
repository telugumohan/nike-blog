import React from 'react'
import {headerLogo} from '../assets/images'
import {navLinks} from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return ( 
    <header className='absolute w-full padding-x pt-10 z-10'>
      <nav className='flex w-full justify-between items-center gap-10'>
        <a href='/'>
          <img 
            src={headerLogo} 
            alt="Logo"
            width={130}
            height={30} />
        </a>
          <ul className='flex max-lg:hidden flex-1 justify-center items-center gap-16'>
            {navLinks.map((navLink) => (
              <li 
              key={navLink.label}
              className='text-lg text-slate-gray font-montserrat cursor-pointer'>
                <a href={navLink.href}>
                  {navLink.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='hidden max-lg:block'>
            <img 
              src={hamburger}
              alt="hamburger icon"
              width={24}
              height={24} />

          </div>
      </nav>
    </header>
  )
}

export default Nav
