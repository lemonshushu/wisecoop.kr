import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../resources/images/logo.png';

function NavBar() {
  return (
    <Navbar bg="light" expand="md" className="px-4 py-1">
      <div class="d-flex justify-content-between w-100 align-items-center d-block d-md-none">
        <Navbar.Brand className="text-left">
          <img src={logo} height="80px" alt="와이즈쿱 로고" className="m-0" />
          <p className="m-0 text-secondary"><small>SW Education Cloud 전문가 협동조합</small></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#home" className="font-weight-bold text-dark">홈</Nav.Link>
          <Nav.Link href="#home" className="font-weight-bold text-dark">조합 소개</Nav.Link>
          <Nav.Link href="#home" className="font-weight-bold text-dark">SW교육</Nav.Link>
          <Nav.Link href="#home" className="font-weight-bold text-dark">교육자료실</Nav.Link>
          <Nav.Link href="#home" className="font-weight-bold text-dark">오시는길</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;