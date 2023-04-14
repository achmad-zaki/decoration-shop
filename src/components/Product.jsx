import Card from './Card'

// import product props
import { useContext } from 'react'
import { MyContext } from './ProductContext'
import { Link } from 'react-router-dom'

const Product = ({handleClick}) => {
  const active = 'bg-white'
  const tabs = [
    {
      path: '#',
      name: 'Chair',
      className: active
    },
    {
      path: '#',
      name: 'Beds',
      className: ''
    },
    {
      path: '#',
      name: 'Sofa',
      className: ''
    },
    {
      path: '#',
      name: 'Lamp',
      className: ''
    },
  ]

  const { product } = useContext(MyContext)
  return (
    <section className='bg-[#F7F7F7] pt-20'>
      <div className='text-center text-4xl font-golria-bold'>
        <h1>Best Selling Product</h1>
      </div>
      <div className='mt-8'>
        <ul className='p-3 flex justify-between max-w-sm mx-auto mb-20 bg-gray rounded-full'>
          {tabs.map((item, index) => (
          <li key={index}>
            <a href={item.path} className={`font-golria-medium px-5 py-2 rounded-full text-primary ${item.className}`}>{item.name}</a>
          </li>
          ))}
        </ul>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 md:gap-10">
          {product.map((item, index) => {
            return (
              <Link to={`/detail-product/${item.id}`} key={index}>
                <Card
                  rate={item.rate}
                  img={item.img}
                  type={item.type}
                  name={item.name}
                  price={item.price}
                  handleClick={handleClick}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Product