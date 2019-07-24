import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
 class Resume extends Component {
    render() {
        return (
            <div>
               <Grid>
                   <Cell col={4}>
                      <h2 style ={{paddingTop:'0'}}>Balvinder Singh</h2>
                      <h4 style={{color:'grey'}}>Web Programmer</h4>
                       <hr style={{borderTop:'3px solid purple',width:'100%'}}/>
                       <p> I'm an experienced web developer whose passion is to produce websites that users will enjoy interacting with.
                            I'm a self learned web developer with extensible in React and Angualr JS.. </p>
                        
                        <hr style={{borderTop:'3px solid purple',width:'100%'}}/>
                        <h5>Address:</h5>
                        <p>845 Hancock street apt 608 Haywrad CA</p>
                        <h5>Phone</h5>
                        <p>(209) 643-0266</p>
                            <h5>Email</h5>
                        <p>singh0901@yahoo.com</p>
                        <hr style={{borderTop:'3px solid purple',width:'100%'}}/>
                    
                   </Cell>
                  
                   <Cell className="resume-right-col"col={8}><h2>Education</h2>
                    <Education
                     startYear={2012}
                    endYear={2013}
                    schoolName="Punjab Technical University,India"
                    schoolDescription="Poat Graduate diploma in Web Developement"
                   
                    />
                   <Education
                     startYear={2005}
                    endYear={2009}
                    schoolName="Punjab Technical University,India"
                    schoolDescription="Bachelor of Technology in Mecahnical Engineering"
                   
                    />
                    <hr style ={{borderTop:'3px solid purple'}}/>
                    <h2>Expericence</h2>
                    <Experience
                    startYear={2017}
                    endYear={2019}
                    jobName="UI/Web Developer---Trevnet Media Sacramento"
                    jobDescription="Developed responsive single page application using React, JavaScript, and  jQuery in conjunction with HTML5, CSS3 standards.
                     
                    - Developed reusable UI components using React JS.
                    
                    - Worked on developing separate components using React and Redux, so it can be re-used.
                    
                    -Developed responsive page layout structure using Adobe XD.
                    
                    -Worked with creating script for data modeling and data import and export.
                    
                    -Extensive worked in deploying, managing and developing MongoDB clusters. 
                    
                    -Experience in creating JavaScript for using DML operation with MongoDB.
                    
                    -Closely worked with back-end developers to optimize existing Web technology and create the best possible user experience
                    
                    "/>
                   
                   
                   
                   <Experience
                    startYear={2016}
                    endYear={2017}
                    jobName="Junior Web developer---DayBreak IT Solutions, VA"
                    jobDescription=" Created proof-of-concept using responsive web design, Angular2, HTML5 and Bootstrap4.

                    - Developed responsive web design for employees'/customer access using HTML5, CSS3, Angular4, Bootstrap4 and XML.
                    
                    -Involved in developing applications using Angular 2, Bootstrap like Grids, Toolbars, Panels, Combo-Box and Button etc
                    
                    -Worked Extensively with Angular CLI for creating components, Services, pipes, Directives
                    
                    -Worked on Cross-Browser Compatibility and tested each & Every web application on popular web browsers such as Internet Explorer, Firefox, Safari, Opera and Chrome
                    
                    - Implemented SEO strategies on client sites
                    
                    -Worked on Angular JS, used its two-way data binding to achieve the feedback functionality from the user."/>
                   

                    <Experience
                    startYear={2013}
                    endYear={ 2013}
                    jobName="Accenture, India"
                    jobDescription="Developed the complete HTML, CSS and JavaScript of the pages with emphasis on performance, accessibility (AA) and SEO standards

                    -Work with senior developer to manage,large complex design projects for clients.
                    
                    -Developed projects concept and maintain optimal flow."/>
                    <hr style ={{borderTop:'3px solid purple'}}/>
                   
                   </Cell>
               </Grid>
            </div>
        )
    }
}
export default Resume;
