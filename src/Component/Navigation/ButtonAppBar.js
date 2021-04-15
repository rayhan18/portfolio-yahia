import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, NavLink,Route} from 'react-router-dom'
import TopBanner from '../TobBanner/TopBanner';
import Footer from '../Footer/Footer';
import AboutMe from '../About/AboutMe';
import Servicepage from '../../Pages/Servicepage';
import HomePage from '../../Pages/HomePage';
export default class ButtonAppBar extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <Navbar collapseOnSelect expand="lg"  variant="dark bgdark">
            <Navbar.Brand href="/" className="ml-5">YEHYA SHABAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto ml-5">
                <Nav.Link><NavLink to ="/">Home</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/About">About</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/Service">Service</NavLink></Nav.Link>
                <Nav.Link ><NavLink to="/Contact">Contact</NavLink></Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>

          <div>
          <Route path="/" component={HomePage }/>
          <Route path="/Service" component={Servicepage}/>
          <Route path="/About" component={AboutMe}/>
          <Route path="/Contact" component={Footer}/>
          </div>
      </div>
      </HashRouter>
    )
  }
}
