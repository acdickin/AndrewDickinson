import React from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
 constructor() {
    super();
    this.state = { menuOpen:false } ;
  }
  toggleDropdown = () =>{
    this.setState({menuOpen: !this.state.menuOpen});
  }
  closeDropdown = () =>{
    this.setState({menuOpen: false});
  }
  render(){
    console.log(this.state.menuOpen)
    return(

      <div id="header">
        <div id="logo">
          <NavLink exact to='/'> <h2>Andrew Dickinson</h2></NavLink>
        </div>
        
        <div id="menu" className={(this.state.menuOpen)? "open" : ""}>
          <div id="nav-icon" onClick={this.toggleDropdown} className={(this.state.menuOpen)? "open" : ""}>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
          <div id="links" onClick={this.closeDropdown} className={(this.state.menuOpen)? "active" : ""} >
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

