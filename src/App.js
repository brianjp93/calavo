import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import {Container, Card, Icon} from '@material-ui/core'
import useStyles from './mystyle'

import Home from './components/general/home'
import NavBar from './components/general/navbar'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Contact() {
  const classes = useStyles()
  return (
    <div style={{paddingTop: 30}}>

      <Container maxWidth='sm'>
        <Card className={classes.card}>
          <div style={{textAlign: 'center'}}>
            <div style={{width: '90%', display: 'inline-block', textAlign: 'left'}}>
              <div>
                <h3 style={{textDecoration: 'underline'}}>Matt Perrett</h3>
              </div>
              <div>
                <Icon>phone</Icon>
                <div style={{display: 'inline-block', verticalAlign: 'super', paddingLeft: 8}}>805-279-0306</div>
              </div>
              <div>
                <Icon>mail</Icon>
                <div style={{display: 'inline-block', verticalAlign: 'super', paddingLeft: 8}}>m.m.perrett@gmail.com</div>
              </div>
              

              <div style={{height: 30}}></div>
            </div>
          </div>
        </Card>
      </Container>

      <div style={{height: 30}}></div>

      <Container maxWidth='md' style={{textAlign: 'center'}}>
        <iframe title='calavo-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2136.1603317243325!2d-119.08898455883698!3d34.34006116380718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9b50121076fd7%3A0xf143a6b3e4eb6524!2s120%20S%20Calavo%20St%2C%20Santa%20Paula%2C%20CA%2093060!5e0!3m2!1sen!2sus!4v1577493462041!5m2!1sen!2sus" width="800" height="400" frameborder="0" style={{border: 0}} allowfullscreen="">
        </iframe>
      </Container>

    </div>
  )
}

export default App;
