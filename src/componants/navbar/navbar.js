import React from 'react'

import './navbar.css'
//img png
import NASA from '../../assets/station.png'
function navbar() {
  return (
    <section className='navbar'>
      <h1 className='logo'> <img src={NASA} /> NASA</h1>

      <ul className='nav-links'>
     

 <li><a href='#'> Home</a></li> 
 <li><a href='#'>About</a></li> 
 <li><a href='#'>Contact</a></li> 
    </ul>
    </section>
  )
}

export default navbar
