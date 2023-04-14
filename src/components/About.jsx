import React from 'react'

// icon
import { HiArrowLongRight } from 'react-icons/hi2'

const About = () => {
  return (
    <section className='py-20'> 
        <div className="container mx-auto flex items-center flex-col lg:flex-row gap-20">
            <div className='text-center md:text-left text'>
                <h1 className='font-golria-bold text-primary text-4xl'>Why Choosing Us</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='max-w-xs'>
                    <h3 className='font-golria-bold text-2xl'>Luxury facilities</h3>
                    <p className='text-base opacity-80 leading-loose mt-3'>The advantage of hiring a workspace with us is that givees you 
                        comfortable service and all-around facilities.
                    </p>
                    <button className='mr-auto flex items-center gap-3 text-secondary font-golria-medium mt-5'>
                        <div>More Info</div>
                        <HiArrowLongRight className='text-xl'/>
                    </button>
                </div>
                <div className='max-w-xs'>
                    <h3 className='font-golria-bold text-2xl'>Luxury facilities</h3>
                    <p className='text-base opacity-80 leading-loose mt-3'>The advantage of hiring a workspace with us is that givees you 
                        comfortable service and all-around facilities.
                    </p>
                    <button className='mr-auto flex items-center gap-3 text-secondary font-golria-medium mt-5'>
                        More Info
                        <HiArrowLongRight className='text-xl'/>
                    </button>
                </div>
                <div className='max-w-xs'>
                    <h3 className='font-golria-bold text-2xl'>Luxury facilities</h3>
                    <p className='text-base opacity-80 leading-loose mt-3'>The advantage of hiring a workspace with us is that givees you 
                        comfortable service and all-around facilities.
                    </p>
                    <button className='mr-auto flex items-center gap-3 text-secondary font-golria-medium mt-5'>
                        More Info
                        <HiArrowLongRight className='text-xl'/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About