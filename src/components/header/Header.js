import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active" >Home</NavLink></li>
        <li><NavLink to='/about' activeClassName="active">About</NavLink></li>
        <li><NavLink to='/courses' activeClassName="active">Courses</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default Header
