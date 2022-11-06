
import React from "react";
import ReactDom from "react-dom";
import "./style.css"
import Data from "./Data.js";
import travel from "./travel.jpeg"


const NavBar = () =>
{
  return (
    <div className="navbar">
      <img src = {travel} alt = "travel logo"/>
      <p>my travel journal.</p>
    </div>
  )
}
const Place = (props) =>
{
  return (
    <div className="single-place">
        <img src = {props.imageUrl} alt = "place"/>
        <div className="content">
          <div className="top">
            <p>{props.location}</p>
            <a href={props.googleMapsUrl} target = "_blank"  rel="noreferrer">View on google maps</a>
          </div>
          <h2>{props.title}</h2>
          <p class = "date">{props.startDate}-{props.endDate}</p>
          <p>{props.description}</p>
        </div>



      </div>
  )
}


const Body = () =>
{
  const array = Data.map(function(x)
  {
    return (
      <Place {...x}/>
    )
  })
  return array;
}




const Element = <>

  <NavBar/> 
  <Body className = "places"/> 

</>




const root = ReactDom.createRoot(document.getElementById('root'));
root.render(Element)