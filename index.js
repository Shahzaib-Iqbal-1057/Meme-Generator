import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./style.css";
import Data from "./Data.js";




const Navbar = () =>
{
  return (<div className='navbar'>
    <h1>Meme Generator</h1>
    <p>React Course Project-3</p>
  </div>) 
}
const Meme = () =>
{
  
  const [meme_url,setUrl] = React.useState("https://i.imgflip.com/2za3u1.jpg");
  const handleClick = () =>
  {
    let random = Math.floor(Math.random()*Data.data.memes.length);
    setUrl(Data.data.memes[random].url);
    console.log(Data.data.memes[random].url);
  }
  return (
  <>
    <div className='meme'>
      <div className='input'>
        <input type="text" placeholder= "top text" className='left'></input>
        <input type="text" placeholder='bottom text' className='right'></input>
      </div> 
      <button onClick={handleClick}>Get an new meme image 🖼</button>
    </div>  
    <img src = {meme_url} alt = "Meme" className='meme-image'/>
  </>
  )
}







const Element = <>
  <Navbar/>
  <Meme/>
</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Element)