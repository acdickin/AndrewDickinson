import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
// 
//   
 
//   <NavLink to='/contact' activeClassName="active">Contact</NavLink>

export default class Header extends Component{
  render(){
    return(
      <div id="header">
        <NavLink exact to='/' activeClassName="active">Home</NavLink>
         <NavLink to ='/projects' activeClassName="active">About us</NavLink>
 				 <NavLink to ='/resume' activeClassName="active">Services</NavLink>
      </div>
    )
  }
}
