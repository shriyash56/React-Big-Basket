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
import {useHistory} from "react-router-dom";

function Header() {

  const history = useHistory();
 

  return (
    <>
      <Navbar className="nav" expand="lg" sticky="top">
        <Navbar.Brand href="">
            <img className="logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form>
          <button className="raise" onClick={() => history.push('/React-Big-Basket/login')}>Login/Signup</button>
          </Form>
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
