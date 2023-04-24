import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';

function Navbbar() {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='py-3'>
        <Navbar.Brand href="#home" className=''></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="me-3 text-decoration-none">Home</NavLink>
            <NavLink to="/about" className="me-3 text-decoration-none">About</NavLink>
            <NavLink to="/contact" className="me-3 text-decoration-none">Contact</NavLink>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbbar
