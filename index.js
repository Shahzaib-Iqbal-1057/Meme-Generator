import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./style.css";

const Navbar = () =>
{
  return (<div className='navbar'>
    <h1>Meme Generator</h1>
    <p>React Course Project-3</p>
  </div>) 
}
const Meme = () =>
{
  const [meme_data,setMemeData] = React.useState({
  meme_url : "https://i.imgflip.com/25w3.jpg",
  top_text : "",
  bottom_text : "",
  memes : {}
  });
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setMemeData(function(prev_data)
      {
        return {
          ...prev_data,
          memes : data
        }
      }))
  },[])
  const handleClick = (event) =>
  {
    const random = Math.floor(Math.random()*meme_data.memes.data.memes.length)
    const newUrl = meme_data.memes.data.memes[random].url
    const {name,value,type} = event.target
    setMemeData(function(prev_data)
    {
      if(type === "button")
      {
        return {
          memes : prev_data.memes,
          meme_url : newUrl,
          top_text : "",
          bottom_text : ""
        }
      }
      else
      {
        return {
          ...prev_data,
          [name] : value
        }
      }
    })
  }
  return (
  <>
    <div className='meme'>
      <div className='input'>
        <input type="text" placeholder= "top text" className='left' name= "top_text" onChange={handleClick} value = {meme_data.top_text}></input>
        <input type="text" placeholder='bottom text' className='right' name= "bottom_text" onChange={handleClick} value = {meme_data.bottom_text}></input>
      </div> 
      <button onClick={handleClick} name = "meme_url" type = "button">Get a new meme image 🖼</button>
    </div> 
      <img src = {meme_data.meme_url} alt = "Meme" className='meme-image'/>
      <h2 className="meme--text top">{meme_data.top_text}</h2>
      <h2 className="meme--text bottom">{meme_data.bottom_text}</h2>
  </>
  )
}
const Element = <>
  <Navbar/>
  <Meme/>
</>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Element)


                      