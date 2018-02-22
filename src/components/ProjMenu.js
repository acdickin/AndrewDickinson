import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

export default class ProjMenu extends Component{
  render(){
    return(
      <div id="projMenu">
        <NavLink exact to='/projects/mkc' activeClassName="projActive"> Military Kids Connect </NavLink>
        <NavLink exact to ='/projects/krandrew' activeClassName="projActive"> Krystaal & Andrew's Wedding Site </NavLink>
 				<NavLink exact to ='/projects/messageboard' activeClassName="projActive"> Messageboard</NavLink>
 				<NavLink exact to ='/projects/plantingpals' activeClassName="projActive"> Planting Pals</NavLink>
      </div>
    )
  }
}
