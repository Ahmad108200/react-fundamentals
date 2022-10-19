import React from 'react'
import img from "./image/test.jpg";

export const TechList = () => {
    const techs = ['COBOL', 'Dart', 'EMACS', 'FORTRAN']
    const techsFormartted = techs.map((tech)=> <li key={tech}>{tech}</li>)
    return techsFormartted
}

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i <= 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>
  {hexaColor()}
</div>

const Button = () => <button style={style.Button} onClick={() => alert("Hello Friend")}>Click me!</button>

const style = { Button: {color:"white", background: 'black'} }

const Main = () => {
    const main = (
        <main style={{ color: "aqua", background: "black" }}>
          <p>Prerequisite to get started react js:</p>
          <ul className="pie">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <img src={img} />
        </main>
      );
      const person = {
        firstName : 'Ahmad',
        lastName : "Olalekan",
        occupation : "student",
      }
      const numOne = 60;
      const numTwo = 30;
      const result = (
        <p>{numOne} + {numTwo} = {numOne+numTwo}</p>
      ) 
  return (
    <>
    {main}
    <ol><TechList/></ol>
    <p>I am {person.firstName} , I'm a {person.occupation}</p>
    <Button/>
    {result}
    <HexaColor/>
    </>
  )
}

export default Main