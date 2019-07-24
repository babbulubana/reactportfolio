import React from 'react'
import {Spring} from 'react-spring/renderprops'
import {Cell,Grid} from 'react-mdl'
import sea from "./sea.jpeg";


export default function aboutme() {
    return (
        <Grid className= "aboutme">
            <Cell col= {4}>
                <img className="sea" src={sea} alt="aboutme"/>

            </Cell>

            <Cell col={8}>





        <Spring
        from={{ opacity:0, marginTop:-500}}
         to={{ opacity:1, marginTop:0}}
         config={{delay:100,duration:1000}}>
            {props => (
                <div style= {props}>
            <div style={aboutmestyle}>
            <h1>Something About Me</h1> 
 
            <p>Creative Web developer with 3 years of experience in web designing user interface applications.
                 </p>

                 <p>Exceptionally creative and dependable Lead Front-end Developer with 
                     superb work ethic. I am knowledgeable in a wide variety of computer
                      languages as well as the principles and techniques of website 
                      construction and maintenance. Highly adept at conveying complex 
                      technical information to a variety of professional and lay audiences in a clear and understandable manner.</p>

         
            
         </div>
            </div>
            
             ) }
        </Spring>
        </Cell>
        </Grid>
        
    )
}

const aboutmestyle={
background: 'steelblue',
fontweight:'bold',
color: 'white',
padding:'1.5rem',
justifycontent:'center'



}


    

