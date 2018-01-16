import React, {Component} from 'react';
import ProjMenu from './ProjMenu'

const KA1 =require('../img/krandrew.png');
const KA2 =require('../img/krandrewM.png');

export default class Krandrew extends Component{
  render(){
    return(
      <div id="krandrew">
        <ProjMenu/>
			  <div className="projText">
				  <h2>Krystaal and Andrew's wedding website</h2>
	       	<a href='http://Krandrew.us' alt='Krystaal and Andrew wedding website'>Krystaal and Andrew's wedding website</a>
				</div>

				<div className='desktop_view'>
	       	<h3>Destop View</h3>
	        <img className="projImg" src={KA1} alt='Desktop Krandrew'/>
	      </div> 
	      <div className='mobile'>
	        <h3>Mobile View</h3>
			    <img className="projImg" src={KA2} alt='Mobile Krandrew'/>
	      </div>

      </div>
    )
  }
}
