import React, { createContext, use } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from './Card'
import pasta from './download.jpg'
import French from './french.jpg'
import showarma from './Chiken.jpg'   
import fish from './fish.jpg'

const harsh=createContext();

function Menu() {
    
   


  return (
    <>
    <harsh.Provider value="jahangir">
     <div className="menu" id ="menu">
        <h2>Our Regular Menu Pack</h2>
        <ul>
            <li><Link to="/#">Special Food</Link></li>
            <li><Link to="/#">Maxican</Link></li>
            <li><Link to="/#">Italian</Link></li>
            <li><Link to="/#">japeness Food</Link></li>
            <li><Link to="/#">Drinks</Link></li>
            <li><Link to="/#">Lunch</Link></li>
            <li><Link to="/#">More Item</Link></li>
        </ul>
         <div className="card">
    <Card  Pasta = {pasta} name="Pasta" Pra="Pasta is a type of food, often associated with Italian cuisine, made from an unleavened dough of wheat flour (usually durum wheat semolina) mixed with water and, sometimes, eggs. "/>
     <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
      <Card Pasta = {showarma} name="Chicken showarma" Pra="This Chicken Shawarma recipe is going to knock your socks off! Just a handful of every day spices makes an incredible Chicken Shawarma marinade that infuses the chicken with exotic Middle Eastern flavours."/>
       <Card Pasta = {fish} name="Fish Curry" Pra="Yes, fish curry can be a healthy and nutritious part of a balanced diet. It offers several health benefits, including a good source of protein, omega-3 fatty acids, and essential vitamins and minerals. However. "/>
        <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
         <Card Pasta = {pasta} name="Pasta" Pra="Pasta is a type of food, often associated with Italian cuisine, made from an unleavened dough of wheat flour (usually durum wheat semolina) mixed with water and, sometimes, eggs. "/>
     <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
      <Card Pasta = {showarma} name="Chicken showarma" Pra="This Chicken Shawarma recipe is going to knock your socks off! Just a handful of every day spices makes an incredible Chicken Shawarma marinade that infuses the chicken with exotic Middle Eastern flavours."/>
       <Card Pasta = {fish} name="Fish Curry" Pra="Yes, fish curry can be a healthy and nutritious part of a balanced diet. It offers several health benefits, including a good source of protein, omega-3 fatty acids, and essential vitamins and minerals. However. "/>
        <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/> <Card Pasta = {pasta} name="Pasta" Pra="Pasta is a type of food, often associated with Italian cuisine, made from an unleavened dough of wheat flour (usually durum wheat semolina) mixed with water and, sometimes, eggs. "/>
     <Card  Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
      <Card Pasta = {showarma} name="Chicken showarma" Pra="This Chicken Shawarma recipe is going to knock your socks off! Just a handful of every day spices makes an incredible Chicken Shawarma marinade that infuses the chicken with exotic Middle Eastern flavours."/>
       <Card Pasta = {fish} name="Fish Curry" Pra="Yes, fish curry can be a healthy and nutritious part of a balanced diet. It offers several health benefits, including a good source of protein, omega-3 fatty acids, and essential vitamins and minerals. However. "/>
        <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
        
       </div>
    
        </div>
        </harsh.Provider>
        </>
  )
}

export default Menu
export {harsh}; // Exporting the context so it can be used in other components