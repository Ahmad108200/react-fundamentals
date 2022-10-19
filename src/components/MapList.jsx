import React from 'react'

export const Numbers = ({numbers}) => {
    //modifying Array
    const list = numbers.map((number)=> <li>{number}</li>)
}
const MapList = () => {
  return (
    <>
    <h1>Number list</h1>
    {[1 , 2 ,3 ,4 , 5 ,6 ,7 ,8 ,9, 0]}
    </>
  )
}

export default MapList