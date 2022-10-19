import React from 'react'
import { useEffect } from 'react'

const Greet = ({name}) => {
    const message = `Hello, ${name}!` 

    useEffect(() => {
        document.title = `Greetings to ${name}`;
    }, [name]);
  return (
    <div>{message} </div>
  )
}

export default Greet