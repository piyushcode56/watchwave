import React from 'react'
import './Navbar.css';
import logo from '../../assets/watchwave_transparent.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MovieName from '../MovieName/MovieName';
import Card from '../Card/Card';
import MovieList from '../MovieList/MovieList';
import { useEffect } from 'react';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  function handleClick(){
    setSidebar(!sidebar);
  }

  return (
    <div className='navbar'>
      <nav>
        <div className="nav-name">
        <Link to={'/watchwave'}><img src={logo} alt="" /></Link>
        </div>
        <div className="nav-links">
          {
            !sidebar ?
            <div className="sidebar">
          <ul className='nav-sidebar' >
          <div className="cross-button">
              <li onClick={handleClick}><a href="#">
              <svg className='menu-buttons' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </a> </li>
                {console.log(sidebar)}
              </div>
              <Link to={'/watchwave'}><li><a href="">Home</a></li></Link>
              <Link to={'/movies/popular'}><li><a href="">Popular</a></li></Link>
              <Link to={'/movies/top_rated'}><li><a href="">Top Rated</a></li></Link>
              <Link to={'/movies/upcoming'}><li><a href="">Upcoming</a></li></Link>
              <Link to={'/search/movie'} className='search-movies'><li><a href="">Search Movies</a></li></Link>
          </ul>
          </div>:
          ("")
          }
          {console.log(sidebar)}     
            <ul>
                <Link to={'/watchwave'}><li className='hideOnMobile'><a href="">Home</a></li></Link>
                <Link to={'/movies/popular'}><li className='hideOnMobile'><a href="">Popular</a></li></Link>
                <Link to={'/movies/top_rated'}><li className='hideOnMobile'><a href="">Top Rated</a></li></Link>
                <Link to={'/movies/upcoming'}><li className='hideOnMobile'><a href="">Upcoming</a></li></Link>
                <Link to={'/search/movie'} className='search-movies hideOnMobile'><li><a href="">Search Movies</a></li></Link>
                <li onClick={handleClick} className='hideOnDesktop'><a href="#">
                <svg  className='menu-button' xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </a> </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
