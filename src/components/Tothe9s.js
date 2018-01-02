import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
const tothe1 =require('../img/tothe9New.png');
const tothe2 =require('../img/tothe9New2.png');
const tothe3 =require('../img/tothe9sM.png');

export default class Tothe9s extends Component{
  render(){
    return(
      <div id="tothe9s">
        <ProjMenu/>
	        <div className="projText">
	       	 <h2>To the 9's</h2>
		        <p>Site is still under construction the link below is the current version</p>
		        <a href='https://tothe9slimos.com' alt='Link for To The 9s'>To The 9's website</a>
		      	<p>The following views are the new styling </p>
					</div>
	      	<div className='desktop'>
		      	<h3>Destop View</h3>
		        <img className="projImg" src={tothe1} alt='Desktop to the 9s'/>
		        <img className="projImg" src={tothe2} alt='Desktop to the 9s'/>
	        </div>

	        <div className='mobile'>
	        	<h3>Mobile View</h3>
	        	<img className="projImg" src={tothe3} alt='Mobile to the 9s'/>
	        </div>
      </div>
    )
  }
}
