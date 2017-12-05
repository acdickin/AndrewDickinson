import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
import { NavLink } from 'react-router-dom'

export default class Projects extends Component{
  render(){
    return(
      <div id="projects">
        <ProjMenu/>
         <div id="projListMain">
          <NavLink exact to='/projects/mkc'>
            <div id="proj1" className="projItem" >
              <span>Military Kids Connect</span>
            </div>
          </NavLink>
          <NavLink to ='/projects/to-the-9s'>
            <div id="proj2" className="projItem" >
               <span>To the 9's </span>
            </div>
          </NavLink>
          <NavLink to ='/projects/krandrew'>
            <div id="proj3" className="projItem" >
              <span>Krystaal and Andrew's wedding website</span>
            </div>
           </NavLink>
          </div>
      </div>
    )
  }
}
