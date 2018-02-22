import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
const plantingpals =require('../img/plantingpals.png');
const ppapi =require('../img/ppapi.png');

export default class Plantingpals extends Component{
  render(){
    return(
      <div id="plantingpals">
        <ProjMenu/>
        <div className="projText">
       		<h2>Planting Pals</h2>	
       		<div className='desktop_view'>
	       		<h3> Project is currently in development</h3>

	       		<p>This app was created so that anyone looking to create a garden could  utilize the benifits of companion planting.
						If you are new companion planting it's pretty simple to do, but extremely benifitial.
						Certain plants naturally keep types of bugs away, add nutriants into the soil that other plants benifit from and more.
						Some plants are friends and some plants are not. Using this app you'll be able to determine which will work for you.</p>

						

	     		 </div>
	  
		      <div className='mobile'>
		      	<h3>Mobile Views</h3>
		      	<img className="proj" src={plantingpals} alt='Mobile Planting Pals'/>
		      	<br/><br/><br/>
						<p>Here an example of the current api</p>
						<img className="proj" src={ppapi} alt='Planting Pals api'/>

		      </div>
       	</div>
      </div>
    )
  }
}
