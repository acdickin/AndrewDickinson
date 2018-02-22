import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
const MBoard =require('../img/Messageboard.png');
const MessageboardM =require('../img/MessageboardM.png');

export default class Messageboard extends Component{
  render(){
    return(
      <div id="messageboard">
        <ProjMenu/>
	        <div className="projText">
	       		<h2>Messageboard</h2>
		        <p>A simple Angular app with mongodb backend and authenticatio</p>
		        <a href='https://angularchatapp88.firebaseapp.com/#/' alt='Messageboard'>To The Messageboard website</a>
		      </div>
	      	<div className='desktop_view'>
		      	<h3>Destop View</h3>
		        <img className="projImg" src={MBoard} alt='Desktop Messageboard'/>
		       
	        </div>

	        <div className='mobile'>
	        	<h3>Mobile View</h3>
	        	<img className="projImg" src={MessageboardM} alt='Mobile Messageboard'/>
	        </div>
      </div>
    )
  }
}
