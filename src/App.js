import React from 'react';
import { Layout, Header, Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/Main';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
  <Header className="header-color" title={<Link style={{textDecoration:'none',color:'white'}}to="/">MyPortfolio</Link> }scroll>
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">AboutMe</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
