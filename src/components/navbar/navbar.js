import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import pandaLogo from "../../images/pandapfp-modified.png";
import Resume from "../../Kevin Cui Resume.pdf";
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import "./navbar.css";

const MyNavbar = () => {

    return (

        <>
            <script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>


            <Navbar className="mainNav m-auto" sticky="top" collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container className="navContainer">
                    <Navbar.Brand href="#home" className="navLogo">
                        <img
                            src={pandaLogo}
                            width="45"
                            height="45"
                            className="navLogo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navLinkContainer" id="responsive-navbar-nav">
                        <Nav className=" m-auto">
                            <Nav.Link className="navLink" href="#home">Home</Nav.Link>
                            <Nav.Link className="navLink" href="#About">About</Nav.Link>
                            <Nav.Link className="navLink" href="#experiences">Experience</Nav.Link>
                            <Nav.Link className="navLink" href="#projects">Projects</Nav.Link>
                            <Nav.Link className="navLink" href={Resume} target="_blank">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MyNavbar;