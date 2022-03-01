import React from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
