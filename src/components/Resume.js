import React, {Component} from 'react';

export default class Resume extends Component{
  render(){
    return(
      <div id="resume">
        <div id="buttons">
	        <a download="../resume/ADickinson-Resume.docx" className="button">Download as Pdf</a>
	        <a download="../resume/ADickinson-Resume.pdf" className="button">Download as Docx</a>
				</div>
				<div id="rDoc">
					<div id="rtop">
						<h1>ANDREW DICKINSON</h1>    
						(248) 935-8911 • acdickin@gmail.com • 5530 S 129th st, Seattle, WA 98178 
							I am an experienced web developer currently looking for new opportunities in both frontend and backend development. I am well-versed in Javascript and libraries such as jQuery and ReactJS, and quickly learn new libraries and languages as needed.
					</div>
					<div id="exp">
					<h2> Experience</h2>
						Web Developer	March 2016 - Present
						National Center for Telehealth & Technology	Lakewood, WA
							
						Creating and updating drupal pages for Military kids connect
						Creating, Testing, debugging, migrating to latest version, and refactoring  React, Ember and Angular projects
						Sprint planning, creating documentation, maintenance, end to end and  behavior-driven testing  
							
						Tier 3 Tech Support 	May 2015 - March 2016
						Microsoft/Bing Ads	Seattle, WA
						Troubleshooting for accounts and and client billing
						Writing SQL queries to verify content visible to clients
						Creating reports about site traffic quality
						Creating documentation

					</div>
					<div id="skills">
						<h2> Skills</h2>
							<ul>
								<li>HTML</li>
								<li>CSS</li>
								<li>Javascript</li>
								<li>jQuery</li>
								<li>SQL</li>
								<li>mySQL</li>
								<li>GIt</li>
								<li>Jasmine</li>
								<li>Drupal</li>
								<li>PHP</li>
								<li>SCSS</li>
								<li>Angular</li>
								<li>ReactJS</li>
								<li>Github</li>
								<li>Jenkins	</li>
								<li>Selenium</li>
								<li>EmberJS</li>
								<li>Mongo</li>
								<li>Postgres</li>
								<li>ExpressJS</li>
								<li>NodeJS</li>
								<li>Webpack</li>
								<li>Chai</li>
								<li>Mocha</li>
								<li>Protractor</li>
							</ul>
						</div>


					<div id="edu">
					<h2> Education</h2>
							Post-Bachelor Studies in Database Administration	Graduated December 2014
							Seattle Central College, Seattle, WA            	       
							Dean’s List, President's List                             	GPA: 3.97
							 
							Bachelors of Integrative Studies, emphasis in Law and Communications	Graduated December 2010
							Oakland University, Rochester, MI	
					</div>
				</div>
      </div>
    )
  }
}
