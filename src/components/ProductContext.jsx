import { createContext, useState } from 'react'
import { data } from '../../Data'

export const MyContext = createContext()

const ProductContext = ({children}) => {
    const [product, SetProduct] = useState(data)
    const [count, setCount] = useState(0)
  return (
    <MyContext.Provider
        value={{ product, count, setCount }}
    >
        {children}
    </MyContext.Provider>
  )
}

export default ProductContext