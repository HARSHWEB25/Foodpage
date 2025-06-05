
import React from 'react'
import './Main.css'
import Card from './Card'
import pasta from './download.jpg'
import French from './french.jpg'
import showarma from './Chiken.jpg'   
import fish from './fish.jpg'
import Menu from './Menu'


function Home() {
  return (
    <>
   
    
    <div className="Main">
        <div className="left">
        <h1>We Serve The Test <br />You Love</h1>
        <p>We are a restaurant that serves delicious food with a variety of cuisines. Our chefs are experts in their field and use only the freshest ingredients to create mouth-watering dishes.We are a restaurant that serves delicious food with a variety of cuisines. Our chefs are experts in their field and use only the freshest ingredients to create mouth-watering dishes</p>
        <button>Explore Food</button>
        <button>Search</button>
        </div>
        <div className="right">
            <img src="data:image/jpeg;base64,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" alt="" />
            <ul>
                <li><button>Dishes</button></li>
                <li><button>Desert</button></li>
                <li><button>Drinks</button></li>
                <li><button>Platter</button></li>
                <li><button>Snacks</button></li>
            </ul>
       
        </div>

    </div>
    <div className="cardmain">
    <h2>Popular Dishes</h2>
    <div className="card">
    <Card Pasta = {pasta} name="Pasta" Pra="Pasta is a type of food, often associated with Italian cuisine, made from an unleavened dough of wheat flour (usually durum wheat semolina) mixed with water and, sometimes, eggs. "/>
     <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
      <Card Pasta = {showarma} name="Chicken showarma" Pra="This Chicken Shawarma recipe is going to knock your socks off! Just a handful of every day spices makes an incredible Chicken Shawarma marinade that infuses the chicken with exotic Middle Eastern flavours."/>
       <Card Pasta = {fish} name="Fish Curry" Pra="Yes, fish curry can be a healthy and nutritious part of a balanced diet. It offers several health benefits, including a good source of protein, omega-3 fatty acids, and essential vitamins and minerals. However. "/>
        <Card Pasta = {French} name="French Fires" Pra="Finally, here it is – The perfect french fries recipe! Based on a ground-breaking method from the legendary Kenji López-Alt’s The Food Lab, these hot chips are so crispy they stay that way even after they’ve gone cold. "/>
       </div>

    </div>
    <div className="Profile">
        <div className="Simg">
            <img src="https://png.pngtree.com/png-clipart/20250108/original/pngtree-experienced-male-master-chef-logo-illustration-png-image_19915185.png" alt=""  height={"500px"} width={"500px"}/>
        </div>
        <div className="Stext">
            <h2>We Are More Than <br />Multiple Survice</h2>
            <p>We are a restaurant that serves delicious food with a variety of cuisines. Our chefs are experts in their field and use only the freshest ingredients to create mouth-watering dishes. We are a restaurant that serves delicious food with a variety of cuisines. Our chefs are experts in their field and use only the freshest ingredients to create mouth-watering dishes.</p>
            <button>Contact Us</button>
    </div>
    </div>
   <div className="Menu">  
     <Menu/>
   </div>

        </>
        )
  }


export default Home