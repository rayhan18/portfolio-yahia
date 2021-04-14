import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown}from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ButtonAppBar extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg"  variant="dark bgdark">
            <Navbar.Brand href="#home" className="ml-5">YEHYA SHABAN</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto ml-5">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#service">Service</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          </Navbar>
      </div>
    )
  }
}
