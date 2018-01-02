import React, {Component} from 'react';
import ProjMenu from './ProjMenu'
const MKCimg =require('../img/mkc.png');
const MBoard =require('../img/mboard.png');

export default class MKC extends Component{
  render(){
    return(
      <div id="mkc">
       	<ProjMenu/>
       	<div className="projText">
       		<h2>Military Kids Connect</h2>
       	</div>
       	<div className='desktop'>
       		<p> Military Kids Connect is a site that was create to help children whose parents are in the military,</p>
       		<p> better deal with the stresses and strains of that life</p>
       		<p> It was created in Drupal with SQL backend</p>
       		<br/>
       		<a href='http://militarykidsconnect.dcoe.mil/' alt='Link for Military Kids Connect'>Military Kids Connect website</a>
       		<br/>
       		<br/>
       		<img className="projImg" src={MKCimg} alt='Desktop MKC'/>
     		</div>
     		<div className='mobile'>
     			<h3>Message Board</h3>
       		<p> Mboard is our newest version of the MKC message board.</p>
       		<p> I created the functionality for the emojis in the response and new threads.</p>
       		<p> I also upgraded the project from angular 1.7 to Angular 4, created the end to end testing a in protractor and the other testing in jasmine</p>
       		<br/>
       		<a href='http://militarykidsconnect.dcoe.mil/mboard#/trending' alt='Link for Military Kids Connect'>Military Kids Connect Message Board website</a>
       		<br/>
       		<br/>
       		<img className="projImg" src={MBoard} alt='Desktop MKC Message Board'/>
       	</div>
      </div>
    )
  }
}
