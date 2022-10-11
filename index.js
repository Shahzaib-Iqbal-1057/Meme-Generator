import React from "react";
import ReactDom from "react-dom";
import "./style.css"
import insta from './insta_logo.png';
import whatsapp from './whatsapp.png'
import fb from './fb_logo.png'
import twitter from './twitter.png';
import cat from './cat.jpeg';



const Info = () =>
{
    return (
      <div className="info">
        <img src = {cat} />
        <h2>Carlos Monti</h2>
        <p id = "gold">Frontend Developer</p>
        <p id = "website">Meow.Website</p>
        <div className="buttons">
        <button id = "mail">Email</button>
        <button id = "linkedin">LinkedIn</button>
        </div>
      </div>
    )
}

const About = () =>
{
  return (
    <div className="interests">
      <h3>Interests</h3>
      <p>
        Mount Everest is the tallest mountain in the world.<br></br>
        Pacific ocean is the largest ocean in the world.<br></br>
        Asia is the biggest continent.<br></br>
        There is a Lake Within an Island on a Lake Within an Island.<br></br>
      </p>
    </div>
  )
}

const Footer = () =>
{
  return (
    <div className="footer">
      <img src  = {insta}/>
      <img src  = {whatsapp}/>
      <img src  = {fb}/>
      <img src  = {twitter}/>
    </div>
  )
}

const Element = <div className="container">
  <Info/>
  <About/>
  <Footer/>
</div>

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(Element);

