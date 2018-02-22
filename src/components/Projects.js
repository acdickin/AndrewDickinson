import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const mkc =require('../img/mkc.png') ;
const messageBoard =require('../img/Messageboard.png');
const krandrew =require('../img/krandrew.png');
const plantingpals =require('../img/pp.png');



export default class Projects extends Component{
  render(){
    return(
      <div id="projects">
        <div id="projList">
          
          <div id="projmkc">
	        	<h3>Military Kids Connect </h3>
						<div className="proj">
			        <NavLink exact to='/projects/mkc'>
			          <img className="proj" src={mkc} alt="Military Kids Connect"/>
			        </NavLink>
			      </div>
			    </div>
		      
		      <div id="projmessageboard">
			    	<h3>MessageBoard</h3>
			      <div className="proj">  
			        <NavLink exact to ='/projects/messageBoard'>
			 					<img className="proj" src={messageBoard} alt="MessageBoard"/>
			        </NavLink>
			      </div>
		      </div>
		
		      <div id="projkrandrew">
		     		<h3>Krystaal & Andrew's wedding website</h3>
			      <div className="proj">   	
			        <NavLink exact to ='/projects/krandrew'>
								<img className="proj" src={krandrew} alt="Krystaal & Andrew"/>
			        </NavLink>
			      </div>
			    </div>

			    <div id="projplantingpals">
		     		<h3>Planting Pals</h3>
			      <div className="proj">   	
			        <NavLink exact to ='/projects/plantingpals'>
								<img className="projpp" src={plantingpals} alt="Planting Pals"/>
			        </NavLink>
			      </div>
			    </div>
        
        </div>
      </div>
    )
  }
}
