import React, { useState } from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import Product from '../components/Product'

const Home = () => {
  const [cart, setCart] = useState([])
  const handleClick = (item) => {
    console.log(item)
  }
  return (
    <div>
        <Navbar count={cart.length}/>
        <Banner/>
        <About/>
        <Product handleClick={handleClick}/>
    </div>
  )
}

export default Home