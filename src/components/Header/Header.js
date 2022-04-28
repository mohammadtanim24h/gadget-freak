import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">Gadget Freak</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="products">Products</Nav.Link>
                        <Nav.Link as={Link} to="uploadProduct">Upload Product</Nav.Link>
                        <Nav.Link as={Link} to="orders">Order List</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="user" className="ms-2">
                            User <i className="fa-solid fa-user ms-1"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
