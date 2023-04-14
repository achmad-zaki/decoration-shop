import React from 'react'

// icon
import { FiSearch } from 'react-icons/fi'

// image
import ThumbnailImg from '../assets/thumbnail.png'

const Banner = () => {
  return (
    <section className='relative min-h-screen flex justify-center'>
      <div className='absolute top-20 md:top-28 lg:top-36'>
        <h1 className='mx-auto text-white max-w-lg md:max-w-3xl text-3xl md:text-6xl leading-[130%] text-center font-golria-bold tracking-[-1%]'>Make Your Interior More Minimalistic & Modern</h1>
        <p className='mt-3 max-w-sm md:max-w-xl mx-auto md:text-[24px] text-white font-golria-regular text-center'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        <div className='mt-10 relative max-w-xs mx-auto'>
          <input type="search" className='bg-white/10 text-white backdrop-blur-sm border border-white focus:ring-2 focus:ring-secondary outline-none w-full font-golria-regular py-3.5 px-4 rounded-full transition' placeholder='Search furniture' />
            <button className='absolute right-2 top-[6px] bg-secondary rounded-full p-3'>
              <FiSearch className='text-white text-lg'/>
            </button>
        </div>
      </div>
      <img src={ThumbnailImg} className='object-cover' alt="thumbnail-img" />
    </section>
  )
}

export default Banner