import React, { useState } from 'react'

// icon
import { BsFillHandbagFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

const Navbar = ({count}) => {
  const navLink = 'text-white font-golria-medium text-lg'
  return (
    <header className='py-4 fixed top-0 w-full z-30'>
      <nav className='container mx-auto flex flex-wrap flex-row items-center justify-between'>
        <a href='#' className='font-golria-bold text-2xl text-white'>Panto</a>
        <div className='flex items-center gap-5 flex-row-reverse md:order-2'>
          {/* button bar */}
          <button className='md:hidden'>
            <HiOutlineBars3BottomRight className='text-3xl text-white'/>
          </button>
          {/* end */}
          {/* button bag */}
          <Link to='/cart' className='relative'>
            <BsFillHandbagFill size={25} className='text-white'/>
            <div className='absolute top-0 -right-2 w-5 h-6 grid place-items-center text-sm rounded-full bg-secondary font-golria-medium text-white'>
              {count}
            </div>
          </Link>
          {/* end */}
        </div>
        <div className='hidden md:flex md:w-auto w-full md:order-1 mt-5 md:mt-0'>
          <ul className='flex flex-col md:flex-row items-center justify-center'>
            <li className='flex flex-col md:flex-row items-center gap-10'>
                <button className={`${navLink} flex items-center gap-1`}>
                  <div className='font-golria text'>Furniture</div>
                  <MdOutlineKeyboardArrowDown/>
                </button>
                <a href='#shop' className={navLink}>Shop</a>
                <a href='#about' className={navLink}>About Us</a>
                <a href='#contact' className={navLink}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar