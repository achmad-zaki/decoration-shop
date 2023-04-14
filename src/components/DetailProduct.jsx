import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'

import { data } from '../../Data'

const DetailProduct = () => {
    const { id } = useParams()
    const detailProduct = data.find((item) => {
        return item.id === parseInt(id)
    })
  return (
    <div>
        <img src={detailProduct.img} alt="" />
        <h1>{detailProduct.type}</h1>
    </div>
  )
}

export default DetailProduct