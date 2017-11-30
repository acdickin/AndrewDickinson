import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const Andrew =require('../img/Andrew.jpg')
// const codepen =require('../img/codepen.png')
// const github =require('../img/github.png')
// const linkedin =require('../img/LinkedIn.png')

// <div id="links">
//   <NavLink href="https://github.com/acdickin">
//     <img src={github} alt="Github"/>
//   </NavLink>
//   <NavLink href="https://codepen.io/einherjar88/">
//     <img src={codepen} alt="Codepen"/>
//   </NavLink>
//   <NavLink href="https://www.linkedin.com/in/andrew-dickinson-a8bbb22a">
//     <img src={linkedin} alt="Linkedin"/>
//   </NavLink>
//  </div>

export default class Home extends Component{
   
  render(){
    return(
      <div id="aboutme">
        <div id="selfBox">
          <div id="imageBox">
           <img id="selfImg" src={Andrew}  alt="Andrew Dickinson"/>
          </div>
        <div id="selfText">
          <p>
            Hi, I'm Andrew Dickinson! Originally from Michigan, I've been living in Seattle since 2014. When I am not creating websites and components, I enjoy hiking, camping, making music and playing games.
          </p>
        </div>
      </div>
       

   
        <div id="projListMain">
          <div className="projItem" >
            Proj item
          </div>
          <div className="projItem" >
            Proj item
          </div>
          <div className="projItem" >
            Proj item
          </div>
          <div className="projItem" >
            Proj item
          </div>
          <div className="projItem" >
            Proj item
          </div>
        </div>

      </div>
    )
  }
}
