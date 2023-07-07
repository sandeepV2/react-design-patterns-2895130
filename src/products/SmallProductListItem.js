import React from 'react'

export const SmallProductListItem = ({product}) => {
    const {name, price} = product;
  return (
    <h3> Name: {name}, Age: {price} $ </h3>
  )
}

