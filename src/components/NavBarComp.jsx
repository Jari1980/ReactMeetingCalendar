import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMeetingContext } from "./context";

const NavBarComp = () => {
  const {logged, setLogged} = useMeetingContext();
  const {background, setBackground} = useMeetingContext();
  const {dark, setDark} = useMeetingContext();
  const {bgMain, setBgMain} = useMeetingContext();
  const {tableClass, setTableClass} = useMeetingContext();

  function handleClick(){
    if(dark === "dark"){
      setBackground("#8496a9")   //("#f8f9fa")
      setDark("light")
      setTableClass("p-4 rounded-top bg-light")
      setBgMain("linear-gradient(250deg,rgb(117, 143, 231), rgb(221, 225, 235) 50%,rgb(202, 206, 219))")
    }
    else{
      setBackground("#212529")
      setDark("dark")
      setTableClass("p-4 rounded-top bg-secondary")
      setBgMain("linear-gradient(250deg,rgb(92, 99, 121),rgb(197, 201, 214) 50%,rgb(75, 91, 143))")
    }
  }

    return (
        <>
        <Navbar expand="sm" bg={dark} data-bs-theme={dark} sticky="top">
        <Navbar.Brand as={Link} to="/home" style={{marginLeft:"20px"}}>MeetingCalendar</Navbar.Brand>
        <Button variant="outline-secondary" size="sm" onClick={handleClick}>{dark === "dark" ? 'Light Theme' : 'Dark Theme'}</Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" style={{marginRight:"20px"}}>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services" disabled>Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              {!logged ? <Nav.Link as={Link} to="/login">Login</Nav.Link> : <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </>
    );
};

export default NavBarComp;