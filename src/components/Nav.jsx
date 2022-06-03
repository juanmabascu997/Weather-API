import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="nav">
      <Link to='/'>
        <span>Weather app</span> 
      </Link>
      <div id='search'>
        <SearchBar onSearch={onSearch}/>
      </div>
      <Link to='/about'>
        <footer>About</footer>
      </Link>
    </nav>
  );
};

export default Nav;
