import React, { Component } from 'react';
import{Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl'
 class Projects extends Component {
    render() {
        return (
            <div className= "containerproject">
                <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText style={{color:'#96725f',fontWeight:'bold', }}>
       Please click on the Link to view projects on GitHub
    </CardText>
    <CardActions border>
        <Button ><a style={{textDecoration:'none'}}  href="https://github.com/babbulubana">GitHub</a></Button>
    </CardActions>
    <CardMenu style={{color: '#96725f'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
            </div>
        )
    }
}

export default Projects;
