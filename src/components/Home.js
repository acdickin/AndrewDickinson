import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const Andrew =require('../img/Andrew.jpg')
const codepen =require('../img/codepen.png')
const github =require('../img/github.png')
const linkedin =require('../img/LinkedIn.png')



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
       

      <div id="Exlinks">
        <a href="https://github.com/acdickin">
          <img src={github} alt="Github"/>
        </a>
        <a href="https://codepen.io/einherjar88/">
          <img src={codepen} alt="Codepen"/>
        </a>
        <a href="https://www.linkedin.com/in/andrew-dickinson-a8bbb22a">
          <img src={linkedin} alt="Linkedin"/>
        </a>
       </div>
        <div id="projListMain">
          <div className="projItem" >
            <span>Proj item</span>
          </div>
          <div className="projItem" >
             <span>Proj item</span>
          </div>
          <div className="projItem" >
            <span>Proj item</span>
          </div>
          <div className="projItem" >
            <span>Proj item</span>
          </div>
          <div className="projItem" >
            <span>Proj item</span>
          </div>
        </div>

      </div>
    )
  }
}
