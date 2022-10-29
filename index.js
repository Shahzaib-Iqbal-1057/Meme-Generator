import React from "react";
import ReactDom from 'react-dom';
import "./style.css";
import Data from "./Data.js";
import airbnb from "./air_bnb_logo.webp"


const NavBar = () => 
{
  return (
    <div className="logo">
      <img src = {airbnb} alt = "airBnB logo"/>
    </div>
  )
}

const Card = (props) => {
  return (
    <div className="cards">
      <img src={props.coverImg} alt = "project images" className="images"/>
      <p>{props.stats.rating}({props.stats.reviewCount}).{props.location}</p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <strong>From ${props.price} / Person</strong>
      
    </div>
  )
}

const array = Data.map(function(x) 
{
  return (
    <Card  id = {x.id} title = {x.title} description = {x.description}
    price = {x.price} coverImg = {x.coverImg} stats = {x.stats} location = {x.location}
    openSpots  = {x.openSpots}/>
  )
})


const Element = <>
  <>
    <NavBar/>
    <div className="cards-bar">
      {array}
    </div>
  </>
</>

  


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(Element)