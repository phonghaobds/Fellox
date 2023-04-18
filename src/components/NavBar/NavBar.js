import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.scss";

function NavBar() {
  return(
  <Navbar>
    <Container>
      <Navbar.Brand href="#home">Fellox</Navbar.Brand>
      <Nav.Link href="#action1">Boards</Nav.Link>
      <Navbar.Collapse className="justify-content-end">
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        {/* <Navbar.Text>
          Signed in as: <a href="#login">Trung Bắc</a>
        </Navbar.Text> */}
        <Button variant="success">Đăng nhập</Button>
        <Button variant="warning">Đăng ký</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default NavBar;