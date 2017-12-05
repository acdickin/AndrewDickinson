import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

const mkc =require('../img/mkc.png') ;
const tothe =require('../img/tothe9s.png');
const krandrew =require('../img/krandrew.png');



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
					
				
	       
			    <div id="projtothe">
			    	<h3>To The 9's</h3>
			      <div className="proj">  
			        <NavLink exact to ='/projects/to-the-9s'>
			 					<img className="proj" src={tothe} alt="to the 9's"/>
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
        
        </div>
      </div>
    )
  }
}
