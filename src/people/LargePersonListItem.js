import React from 'react'

export const LargePersonListItem = ({person}) => {
    const {name, age, hairColor, hobbies } = person;
  return (
    <>
    <h1>Name: {name}</h1>
    <p> Age: {age} years </p>
    <p> HairColor: {hairColor} </p>
    <ul>
    {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
    </ul>
    </>
    
  )
}