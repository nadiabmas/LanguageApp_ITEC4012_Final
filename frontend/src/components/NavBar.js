import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <NavBar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <LinkContainer to='/Dashboard'>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                    <Link to="/">
                        <button>Sign Out</button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </NavBar>
    );
}

export default NavBar;