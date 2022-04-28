import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase/firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Gadget Freak
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="products">
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="uploadProduct">
                            Upload Product
                        </Nav.Link>
                        <Nav.Link as={Link} to="orders">
                            Order List
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        {user ? (
                            <button
                                onClick={() => signOut(auth)}
                                className="btn btn-outline-dark"
                            >
                                Logout
                            </button>
                        ) : (
                            <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>
                        )}
                        {user ? (
                            <Nav.Link as={Link} to="user" className="ms-2">
                                {user.displayName} <i className="fa-solid fa-user ms-1"></i>
                            </Nav.Link>
                        ) : (
                            ""
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
