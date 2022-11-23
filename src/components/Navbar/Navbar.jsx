import React from 'react';
// import images from '../../container/images';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src='../../container/images/result.png' alt='logo'/>
        <div />
        <ul className='app__navbar-links'>
          <li className='links__listed'><a href='#home'>Home</a></li>
          <li className='links__listed'><a href='#about'>About Us</a></li>
          <li className='links__listed'><a href='#testimonial'>Testimonial</a></li>
          <li className='links__listed'><a href='#clients'>Clients</a></li>
          <li className='links__listed'><a href='#contacts'>Contacts</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar