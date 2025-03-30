import React from 'react'
import Laptop from '../assets/laptop.avif'
import Mobile from '../assets/mobile.avif'
import Tablet from '../assets/tablet.avif'
import Watch from '../assets/watch.avif'
import Camera from '../assets/camera.avif'
import Earpods from '../assets/earpods.avif'
import './home.css'

function Dashboard() {
  return (
    <>
    <header>
      <nav className='navbar'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    </header>
    <h1>Real Time Collaboration Project With Mern</h1>
      <h2>Products For Sale</h2>
      <div id='products'>
        <div className='product'>
          <img src={Laptop} alt="Laptop" />
          <h3>LapTop</h3>
          <p>Price: $50</p>
          <button>Add to Cart</button>
        </div>
        <div className='product'>
          <img src={Mobile} alt="Mobile" />
          <h3>Mobile</h3>
          <p>Price: $20</p>
          <button>Add to Cart</button>
        </div>
        <div className='product'>
          <img src={Tablet} alt="Tablet" />
          <h3>Tablet</h3>
          <p>Price: $30</p>
          <button>Add to Cart</button>
        </div>
        <div className='product'>
          <img src={Watch} alt="Watch" />
          <h3>Watch</h3>
          <p>Price: $10</p>
          <button>Add to Cart</button>
        </div>
        <div className='product'>
          <img src={Camera} alt="Camera" />
          <h3>Camera</h3>
          <p>Price: $40</p>
          <button>Add to Cart</button>
        </div>
        <div className='product'>
          <img src={Earpods} alt="Headphones" />
          <h3>Headphones</h3>
          <p>Price: $5</p>
          <button>Add to Cart</button>
        </div>
      </div>
      </>
  )
}

export default Dashboard