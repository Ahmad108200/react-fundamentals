import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import img from "./image/test.jpg";
import UserCard, { Profile } from "./components/UserCard";
import { Numbers } from "./components/MapList";
import Countries from "./components/Countries";
import { useState } from "react";
import Greet from "./components/Greet";
import Users from "./components/Users";

const Age = (props) => <div>This person is {props.age} years old</div>;
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight}</p>
);

const Status = (props) => {
  let status = props.status
    ? "Is old enough is a to drive"
    : "Too young to drive";
  return <p>{status}</p>;
};

const Skill = (props) => <ul>{props.skill}</ul>;

const Person = (props) => {
  return (
    <div>
      <h1>{props.data.firstName}</h1>
      <h2>{props.data.city}</h2>
      <h3>{props.data.work}</h3>
    </div>
  );
};

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  const [newCount, setNewCount] = useState(0);
  //stale state
  const handleClickASync = () => {
    setTimeout(function delay() {
      setNewCount(newCount + 1);
    }, 3000);
  };

  const [on, setOn] = useState(false);

  const lightOn = () => setOn(true);
  const lightOff = () => setOn(false);
  const jsxElement = <h1>I am a JSX element</h1>;
  const welcome = <h1>Welcome to React fundamentals</h1>;
  const classDate = <small>AUG 18, 2022</small>;
  // const header = (
  //   <header style={{ background: "black", color: "white" }}>
  //     <h1>Welcome to React fundamentals</h1>
  //     <h2>Getting Started React</h2>
  //     <h3>JavaScript Library</h3>
  //     <h1>{jsxElement}</h1>
  //     <h1>{welcome}</h1>
  //     <small>{classDate}</small>
  //   </header>
  // );
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
  const numOne = 3;
  const numTwo = 2;

  const result = (
    <p>
      {numOne} + {numTwo} = {numOne + numTwo}
    </p>
  );
  const footer = (
    <footer style={style.footer}>
      <p>Copyright 2022</p>
      <img src="./image/try.jpg" />
    </footer>
  );
  const username = "Ahamd";
  const phoneNo = "09032799499";
  const address = "Edge of the world";

  let currentYear = 2022;
  let birthYear = 2015;
  const age = currentYear - birthYear;
  let gravity = 9.81;
  const mass = 75;
  let status = age >= 18;

  const data = {
    firstName: "Ahmad",
    city: "abuja",
    work: "Technical analyst",
  };

  const greeting = () => {
    alert("Welcome people, for you have been choosen ");
  };

  const showDate = (time) => {
    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = months[time.getMonth()].slice();
    const year = time.getFullYear();
    const date = time.getDate();
    return `${month} ${year} ${date} `;
  };
  const handleTime = () => {
    alert(showDate(new Date()));
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const skills = [
    ["HTML", 5],
    ["CSS", 5],
    ["JavaScript", 3],
    ["React", 0],
  ];

  const countries = [
    { name: "Saudi Arabia", capital: "Medina" },
    { name: "China", capital: "Beging" },
    { name: "Russia", capital: "Kremlin" },
    { name: "Japan", capital: "Tokyo" },
    { name: "United arab emirates", capital: "Dubai" },
  ];
  return (
    <div className="App">
      <button onClick={handleClickASync}>increase async</button>
      <span>{newCount}</span>

      <button onClick={increment}>Increment</button>
      <span>{count}</span>
      <button onClick={decrement}>decrement</button>

      <div className={on ? "bulbOn" : "bulbOff"}></div>
      <button onClick={lightOn}>On</button>
      <button onClick={() => setOn(false)}>Off</button>
      {/* {header}
      {main}
      {result}
      {footer} */}
      <Header />
      <Main />
      <UserCard lastName="Tijani" firstName="Ahmad" student="student" />
      <UserCard lastName="fws" firstName="MASK" student="g" />
      <Profile username={username} phoneNo={phoneNo} address={address} />
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <Status status={status} />
      <Skill skill={["HTML", "CSS", "JAVASCRIPT", "React JS"]} />
      <Footer />
      <Person data={data} />
      <Button text="Click me!" onClick={greeting} />
      <Button text="showTime" onClick={handleTime} />
      <Skill skill={skills} />
      <ul>numbers={numbers}</ul>
      <Countries countries={countries} />
      <Greet name="Ahmad" />
      <Greet name="saad" />
      <Users />
    </div>
  );
}

const style = {
  footer: {
    color: "grey",
    fontSize: "40px",
    background: "black",
    fontFamily: "Signika",
  },
};
export default App;
