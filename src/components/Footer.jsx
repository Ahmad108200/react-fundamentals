import React from 'react'
import { TechList } from './Main';

const Footer = () => {
    const footer = (
        <footer>
          <p>Copyright 2022</p>
          <img src="./image/try.jpg" />
        </footer>
      );
  return (
    <>
    <TechList/>
    {footer}
    </>
  )
}

export default Footer