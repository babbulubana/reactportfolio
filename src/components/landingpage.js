import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

 class LandingPage extends Component {
    render() {
        return (
            
         <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                 <Cell col={12}>
                    <img className="myimage" 
                    src=""
                    alt="myimage"
                    />
                   <div className="banner-text">
                      <h1> UI/WEB DEVELOPER </h1>
                      <hr/>
                      <p>
                          HTML/CSS | REACT | ANGULAR JS | BOOTSTARP | JAVASCRIPT | ADOBE XD
                      </p>
                      <div className="social-links">
                          <a href="http:google.com"rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-linkedin-square" area-hidden="true"/>
                          </a>
                          <a href="http:google.com"rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-github-square" area-hidden="true"/>
                          </a>
                      </div>
                    </div>
                   
                  </Cell>
              </Grid>
           
            
                    </div>

        )
    };
}

export default LandingPage;
