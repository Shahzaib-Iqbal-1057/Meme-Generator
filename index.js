import React from "react";
import  ReactDOM  from "react-dom";
import logo from './logo.svg';
import './style.css';

function Navbar() {
  return (
    <div className="Navbar"> 
      <div className="innerBox">
      <img src = {logo}/>
      <h1>React facts</h1> 
      </div>
      <h2>React Course-Project 1</h2>
    </div>

    )

}

function MainContent() {
  return (
    <div className="maincontent">
    <h1>Fun facts about react</h1>
    <ul>
      <li>was first released in 2013.</li>
      <li>was originally created by Jordan Walke.</li>
      <li>Has well over 100k starts on Github.</li>
      <li>Is maintained by facebook.</li>
      <li>Powers thousands of enterprise apps including mobile apps.</li>
    </ul>
    </div>
  )
}



const Element = <>
  <Navbar/>
  <MainContent/>

</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Element);


