import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get_contact, toggel_false } from "../Redux/ActionType/Action";

const Navbars = () => {
  const dispatch = useDispatch();
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MERN APP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={() => dispatch(get_contact())}
            to="/list"
          >
            List_contact
          </Nav.Link>
          <Nav.Link
            onClick={() => dispatch(toggel_false())}
            as={Link}
            to="/add"
          >
            add_contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
