import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render(){
    return(

      <div id="header">
        <div id="logo">
          <NavLink id ="header-text" exact to='/'> 
            
            <h1>Andrew Dickinson</h1>
              <div id = "contact-info">
              <h1 id="phone">248-935-8911</h1>
              <h1 id="email">acdickin@gmail.com</h1>
            </div>
          </NavLink>
        </div>
        
        <div id="menu">
        
          <div id="links">
            <NavLink exact to='/' activeClassName="active">Home</NavLink>
	          <NavLink to ='/projects' activeClassName="active">Projects</NavLink>
	 				  <NavLink to ='/resume' activeClassName="active">Resume</NavLink>
          </div>
        </div>
      </div>

    )   
  }
} 
export default Header

