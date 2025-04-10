import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMeetingContext } from "./context";

const NavBarComp = () => {
  const {logged, setLogged} = useMeetingContext();

    return (
        <>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
        <Navbar.Brand as={Link} to="/home" style={{marginLeft:"20px"}}>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{marginRight:"20px"}}>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/Services" disabled>Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {!logged ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavBarComp;