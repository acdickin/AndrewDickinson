import React, {Component} from 'react';

export default class Resume extends Component{
  render(){
    return(
      <div id="resume">
        <h2>Resume</h2>

        <button className="button">Download as Pdf</button>
        <button className="button">Download as Docx</button>
      </div>
    )
  }
}
