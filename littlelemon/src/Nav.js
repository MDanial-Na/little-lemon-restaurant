import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Home';

function Nav() {
  return;
  <Nav>
    <ul>
      <li>
        <a href='/home'>Home</a>
      </li>
      <li>
        <a href='/about'>About</a>
      </li>
      <li>
        <a href='/menu'>Menu</a>
      </li>
      <li>
        <a href='/contact'>Contact</a>
      </li>
    </ul>
    <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/menu' element={<Menu />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </Nav>;
}

export default Nav;
