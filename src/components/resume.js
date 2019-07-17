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
                       <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book </p>
                        
                        <hr style={{borderTop:'3px solid purple',width:'100%'}}/>
                        <h5>Address:</h5>
                        <p>3565 W Barstow Ave Fresno, CA 93711</p>
                        <h5>Phone</h5>
                        <p>(559) 618-0559</p>
                            <h5>Email</h5>
                        <p>singh0901@yahoo.com</p>
                        <hr style={{borderTop:'3px solid purple',width:'100%'}}/>
                    
                   </Cell>
                  
                   <Cell className="resume-right-col"col={8}><h2>Education</h2>
                    <Education
                     startYear={2004}
                    endYear={2009}
                    schoolName="Punjab Technical University"
                    schoolDescription="completed my bchelors of Technology in Mechanical Engineering and have certified course in Information
                    Technology from Punjab University"
                   
                    />
                   <Education
                     startYear={2004}
                    endYear={2009}
                    schoolName="Punjab Technical University"
                    schoolDescription="completed my bchelors of Technology in Mechanical Engineering and have certified course in Information
                    Technology from Punjab University"
                   
                    />
                    <hr style ={{borderTop:'3px solid purple'}}/>
                    <h2>Expericence</h2>
                    <Experience
                    startYear={2017}
                    endYear={2018}
                    jobName="UI/Web Developer"
                    jobDescription="Developed app on React with single page application and boost the profit of company"/>
                   
                   <Experience
                    startYear={2017}
                    endYear={2018}
                    jobName="UI/Web Developer"
                    jobDescription="Developed app on React with single page application and boost the profit of company"/>
                   
                   <Experience
                    startYear={2017}
                    endYear={2018}
                    jobName="UI/Web Developer"
                    jobDescription="Developed app on React with single page application and boost the profit of company"/>
                    <hr style ={{borderTop:'3px solid purple'}}/>
                   
                   </Cell>
               </Grid>
            </div>
        )
    }
}
export default Resume;
