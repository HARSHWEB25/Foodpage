import React from 'react'
import { Link } from 'react-router-dom'
function NevBar() {

  return (
  <><div className="nav">
    <div className="logo">
    
    <img src="https://www.shutterstock.com/image-vector/letter-h-restaurant-logo-template-260nw-2175629925.jpg" alt="" height={'100px'} />
    <h1>Hary HDM</h1>
    </div>
      <ul>
        
            <li><Link to="">Home</Link></li>
            <li><Link to="/About">About AS</Link></li>
            <li><Link to="Booking">Booking</Link></li>
            <li><Link to="/Booking">Cheak the </Link></li>
            <li><Link to="">Our Viwe</Link></li>
            <li><Link to="/#">Lunch</Link></li>
            <li><Link to="Menu">More Item</Link></li>
            <li><Link to="/Noti"><i class="fa-solid fa-bell"></i></Link></li>
        <li><Link to="/singlecard"><i class="fa-solid fa-cart-shopping"></i></Link></li>
        </ul>
  </div>
  </>
  )
}

export default NevBar