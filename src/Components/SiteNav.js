import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SiteNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/experience">Experience</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/education">Education</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/projects">Projects</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/msc-project">MSc Project</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/interests">Interests</NavLink>
                </Nav>
                <Nav className="me-auto">
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>

    );
}

export default SiteNav;