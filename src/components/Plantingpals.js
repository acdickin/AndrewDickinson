import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
const plantingpals =require('../img/plantingpals.png');

export default class Plantingpals extends Component{
  render(){
    return(
      <div id="plantingpals">
        <ProjMenu/>
	        <div className="projText">
	       		<h2>Planting Pals</h2>	
	       		<p> Project is currently in development</p>

	       		<p>This app was created so that anyone looking to create a garden could  utilize the benifits of companion planting.
						If you are new companion planting it's pretty simple to do, but extremely benifitial.
						Certain plants naturally keep types of bugs away, add nutriants into the soil that other plants benifit from and more.
						Some plants are friends and some plants are not. Using this app you'll be able to determine which will work for you.</p>

						<p>Here an example link for the current api</p>
						<a href="" alt="Planting Pals Api">Planting Pals Api</a>
					
						<h4></h4>
		      </div>
	  
	        <div className='mobile'>
	        	<h3>Mobile Views</h3>
	        	<img className="proj" src={plantingpals} alt='Mobile Planting Pals'/>
	        	
	        </div>
      </div>
    )
  }
}
