import React, { Component } from 'react'
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

 class AppNavbar extends Component {
  render() {
    return (
      <nav id="main-nav">
      <div className="container">
        <img src= {logo} alt="NewsGrid" class="logo" />
        <div className="social">
          <a href="http://facebook.com" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
          <a href="http://twitter.com" target="_blank"><i className="fab fa-twitter fa-2x"></i></a>
          <a href="http://instagram.com" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="http://youtube.com" target="_blank"><i className="fab fa-youtube fa-2x"></i></a>
        </div>
        <ul>
          <li><Link className="link" to="/">Home</Link></li>
          <li><Link className = "link" to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default AppNavbar;
