import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom';
import SingleCard from './SingleCard';




function Card(props) 
{
   return (
    <div id="Card">
        <img src={props.Pasta} alt="" />
        <h4>{props.name}</h4>
        <p>{props.Pra}</p>
        <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i></p>
        <button>Add to Cart</button>
<SingleCard/>
    </div>
  )
}

export default Card