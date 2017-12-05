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
						<p id="rcontact">(248) 935-8911 • acdickin@gmail.com • 5530 S 129th st, Seattle, WA 98178</p>
							I am an experienced web developer currently looking for new opportunities in both frontend and backend development. I am well-versed in Javascript and libraries such as jQuery and ReactJS, and quickly learn new libraries and languages as needed.
					</div>
					<div id="exp">
					<h2> Experience</h2>
						<h4>Web Developer	March 2016 - Present,   National Center for Telehealth & Technology	Lakewood, WA</h4>
			
						<p>Creating and updating drupal pages for Military kids connect</p>
						<p>Creating, Testing, debugging, migrating to latest version, and refactoring  React, Ember and Angular projects</p>
						<p>Sprint planning, creating documentation, maintenance, end to end and  behavior-driven testing </p>
						<h4>Tier 3 Tech Support 	May 2015 - March 2016,     Microsoft/Bing Ads	Seattle, WA   </h4>
						<p>Troubleshooting for accounts and and client billing</p>
						<p>Writing SQL queries to verify content visible to clients</p>
						<p>Creating reports about site traffic quality</p>
						<p>Creating documentation</p>

					</div>
					<div id="skillBox">
						<h2> Skills</h2>
							<div id="skills">
								<ul id="skill1">
									<li>HTML</li>
									<li>CSS</li>
									<li>Javascript</li>
									<li>jQuery</li>
									<li>SQL</li>
									<li>mySQL</li>
									<li>GIt</li>
									<li>Jasmine</li>
								</ul>
								<ul id="skill2">	
									<li>Drupal</li>
									<li>PHP</li>
									<li>SCSS</li>
									<li>Angular</li>
									<li>ReactJS</li>
									<li>Github</li>
									<li>Jenkins	</li>
									<li>Selenium</li>
									<li>EmberJS</li>
								</ul>
								<ul id="skill3">	
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
						</div>


					<div id="edu">
					<h2> Education</h2>
							<p>Post-Bachelor Studies in Database Administration	Graduated December 2014</p>
							<p>Seattle Central College, Seattle, WA            	       </p>
							<p>Dean’s List, President's List                             	GPA: 3.97</p>
							<p>Bachelors of Integrative Studies, emphasis in Law and Communications	Graduated December 2010</p>
							<p>Oakland University, Rochester, MI	</p>
					</div>
				</div>
      </div>
    )
  }
}
