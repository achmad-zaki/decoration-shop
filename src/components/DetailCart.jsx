import React, { useContext } from 'react'
import { MyContext } from './ProductContext'

const DetailCart = () => {
    const { count, setCount } = useContext(MyContext)
    console.log(count)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  )
}

export default DetailCart