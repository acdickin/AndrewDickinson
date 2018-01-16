import React, { Component } from 'react';

import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/fa/home'
import FaSuitcase from 'react-icons/lib/fa/suitcase'
import FaClipboard from 'react-icons/lib/fa/clipboard'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        
        <div id="contact">
	        <h3 id="phone">248-935-8911</h3>
	        <h3 id="email">acdickin@gmail.com</h3>
        </div>
        <div id = "mobileMenu">
        	 	<NavLink exact to='/' activeClassName="active"> <FaHome size={40}/> <p>Home</p> </NavLink>
	          <NavLink to ='/projects' activeClassName="active"><FaClipboard size={40}/> <p>Projects</p> </NavLink>
	 				  <NavLink to ='/resume' activeClassName="active"> <FaSuitcase size={40}/><p>Resume</p> </NavLink>
        </div>
      </div>
    )
  }
}
