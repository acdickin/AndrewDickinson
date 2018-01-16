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
						<br/>
						<p>	I am an experienced web developer currently looking for new opportunities in both frontend and backend development. I am well-versed in Javascript and libraries such as jQuery and ReactJS, and quickly learn new libraries and languages as needed.</p>
					</div>
					<div id="exp">
					<h2> Experience</h2>
						<h3>Web Developer	March 2016 - Present,   National Center for Telehealth & Technology	Lakewood, WA</h3><br/>
						<p><strong>Military Kids Connect </strong>- Drupal, PHP, CSS, Javascript : Created new pages, fixed bugs, updated videos players, created views, updated templates</p><br/>
						<p><strong>Infographic</strong> - EmberJs, SCSS, BootStrap : Created pages using document specifications and visual aids, Created CSS Animations, Passed data from drupal api to the front end</p><br/>
						<p><strong>Messageboard</strong> - Angular, SCSS, BootStrap : Worked on the comment boxes for the message board focusing on created a WYSIWYG with custom emojis, Upgraded From Angular 1.7 to 4.  Refactored components to make them more reusable and cleaner. Created end-to-end  and behavior-driven testing using Jasmine, Selenium and Protractor.</p><br/>
						<p><strong>PWA</strong> - React, Redux, Cordova : Create a React-Redux project for After deployment. Updated the assessments module. </p><br/>
						<p><strong>All Projects</strong> : Created sprint plans, Documentation in Gitlab and created ad Jenkins shell script Job to build latest tagged messageboard  and infographic projects and diff the newest and second newest tagged MKC build to create assets of the changes.</p>
						<br/>
						<h3>Tier 3 Tech Support 	May 2015 - March 2016,     Microsoft/Bing Ads	Seattle, WA   </h3>
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
									<li>Jasmine</li>
									<li>EmberJS</li>
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
							<h3>Seattle Central College, Seattle, WA</h3>
							<p>Post-Bachelor Studies in Database Administration	Graduated December 2014</p>
							
							<p>Dean’s List, President's List GPA: 3.97</p>
							<h3>Oakland University, Rochester, MI	</h3>
							<p>Bachelors of Integrative Studies, emphasis in Law and Communications	Graduated December 2010</p>
					</div>
				</div>
      </div>
    )
  }
}
