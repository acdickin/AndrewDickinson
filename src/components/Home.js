import React, {Component} from 'react';

import { NavLink } from 'react-router-dom'

const Andrew =require('../img/Andrew.jpg')
const codepen =require('../img/codepen.png')
const github =require('../img/github.png')
const linkedin =require('../img/LinkedIn.png')



export default class Home extends Component{
   
  render(){
    return(
      <div id="home">
        <div id="selfBox">
          <div id="imageBox">
           <img id="selfImg" src={Andrew}  alt="Andrew Dickinson"/>
          </div>
        <div id="selfText">
          <h4>
            Hi, I'm Andrew Dickinson! Originally from Michigan, I've been living in Seattle since 2014. When I am not creating websites and components, I enjoy hiking, camping, making music and playing games.
          </h4>
        </div>
      </div>
       

      <div id="Exlinks">
        <a className="exImg" href="https://github.com/acdickin">
          <img src={github} alt="Github"/>
        </a>
        <a className="exImg" href="https://codepen.io/einherjar88/">
          <img src={codepen} alt="Codepen"/>
        </a>
        <a className="exImg" href="https://www.linkedin.com/in/andrew-dickinson-a8bbb22a">
          <img src={linkedin} alt="Linkedin"/>
        </a>
       </div>

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
// <div id="proj4" className="projItem" >
//   <span>Proj item</span>
// </div>
// <div id="proj5" className="projItem" >
//   <span>Proj item</span>
// </div>