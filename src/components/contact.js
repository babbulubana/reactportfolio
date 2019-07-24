import React, { Component } from 'react'
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl'

 class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}> <p>
                    Expert in Integration of highly transactional and scable
                 applications using HTML,CSS,JavaScript,React,Angular JS.Innovative optimized solution seeker. Excited to be at the deployment phase of my career as a web developer. I am ambitious,
                  adventurous, assiduous, animated, and an alliteration advocate.
                        
                        </p> </Cell>
                    <Cell col={6}> 
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
  <ListItem>
    <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-phone-square" aria-hidden="true"/>(209) 643-0266</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-envelope-square" aria-hidden="true"/>singh0901@yahoo.com</ListItemContent>
  </ListItem>
  <ListItem>
  <ListItemContent style={{fontFamily: 'Anton', 
    fontSize: '30px'}}> <i className="fa fa-skype" aria-hidden="true"/>babbulubana</ListItemContent>
  </ListItem>
</List>
</div>
                    
                     </Cell>
                </Grid>
                
           </div>
        )
    }
}

export default Contact;
