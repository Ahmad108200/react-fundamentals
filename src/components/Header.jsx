import React from 'react'

const Header = () => {
    const jsxElement = <h1>I am a JSX element</h1>;
  const welcome = <h1>Welcome to React fundamentals</h1>;
  const classDate = <small>AUG 18, 2022</small>;
    const header = (
        <header style={{ background: "black", color: "white" }}>
          <h1>Welcome to React fundamentals</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <h1>{jsxElement}</h1>
          <h1>{welcome}</h1>
          <small>{classDate}</small>
        </header>
      );
  return (
    <>
    {header}
    </>
  )
}

export default Header