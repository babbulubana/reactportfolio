import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Aboutme from './aboutme';
import Projects from './projects';
import Resume from './resume';
import LandingPage from './landingpage'
import Contact from './contact'

const Main = () => (
    <Switch>
        <Route exact path = "/" component= {LandingPage}/>
        <Route  path = "/aboutme" component= {Aboutme}/>
        <Route  path = "/resume" component= {Resume}/>
        <Route  path = "/Projects" component= {Projects}/>
        <Route  path = "/contact" component= {Contact}/>
    </Switch>
)
export default Main;