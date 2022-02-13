import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const SiteNav = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>

                <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/experience">Experience</NavLink>
                    <NavLink to="/education">Education</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/msc-project">MSc Project</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                </Nav>
            </Container>
        </Navbar>

    );
}

export default SiteNav