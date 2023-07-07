import React from 'react'

export const LargeProductListItem = ({product}) => {
    const {name, price, description, rating } = product;
  return (
    <>
    <h3>Name: {name}</h3>
    <price> Price: {price} $ </price>
    <h3> Description</h3>
    <p>{description}</p>
    <p> Average rating: {rating} </p>
    </>
    
  )
}