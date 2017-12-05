import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
export default class ProjMenu extends Component{
  render(){
    return(
      <div id="projMenu">
        <NavLink exact to='/projects/mkc'> Military Kids Connect </NavLink>
        <NavLink to ='/projects/krandrew'> Krystaal & Andrew's Wedding Site </NavLink>
 				<NavLink to ='/projects/to-the-9s'> To the 9's </NavLink>
      </div>
    )
  }
}
