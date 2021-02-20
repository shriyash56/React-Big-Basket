import React from "react";
import "../App.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../logo/logo.png";

function Header() {
  return (
    <>
      <Navbar className="nav" expand="lg">
        <Navbar.Brand href="">
            <img className="logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Buy By Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className="search-bar">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="button" variant="outline-success"><i class="fas fa-search"></i></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
