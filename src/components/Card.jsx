import { HiPlus } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'

const Card = ({img, name, price, rate, type, handleClick}) => {
  const item = {img, name, price, rate, type }
  return (
    <div className='max-w-[268px] mx-auto rounded-xl'>
        <div className='bg-[#FAFAFA] rounded-t-xl'>
            <img src={img} className='relative bottom-10 w-2/3 mx-auto' alt="" />
        </div>
        <div className='bg-white rounded-b-xl px-5 py-4'>
            <h1 className='font-golria-regular text-base text-[#8D8D8D]'>{type}</h1>
            <h3 className='text-dark font-golria-bold capitalize text-[22px]'>{name}</h3>
            <div className='text-secondary flex'>
              {[...Array(rate)].map((_, index) => (
                <AiFillStar key={index}/>
              ))}
            </div>
            <div className='flex items-center justify-between mt-10'>
              <div className='flex gap-1'>
                <span className='text-base font-golria-bold'>$</span>
                <div className='font-golria-bold text-[22px]'>{price}</div>
              </div>
              <button className='bg-dark h-10 w-10 rounded-full grid 
                place-items-center'
                onClick={() => handleClick(item)}
              >
                <HiPlus className='text-white text-2xl'/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Card