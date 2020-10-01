import React, { Component } from 'react';
import './Menu.scss'
import ResponsiveMenu from 'react-responsive-navbar';
import { Link } from 'react-router-dom';
 
class Example extends Component {
  render() {
    return (
      <>
      <ResponsiveMenu
        menuOpenButton={<div className="Hamburger">&#9776;</div>}
        menuCloseButton={<div className="Hamburger">&#9776;</div>}
        changeMenuOn="800px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        className="responsive-menu"
        menu={
          <ul className="menu">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li className="Link">Home</li>
            </Link>
            <Link to="/Resources" style={{ textDecoration: 'none' }}>
              <li className="Link">Resources</li>
            </Link>
            <Link to="/About" style={{ textDecoration: 'none' }}>
              <li className="Link">About</li>
            </Link>
            <Link to="/Services" style={{ textDecoration: 'none' }}> 
              <li className="Link">Services</li>
            </Link>
            <Link to="/Contact" style={{ textDecoration: 'none' }}>
              <li className="Link">Contact</li>
            </Link>
          </ul>
        }
      />
      </>
    );
  }
}

export default Example