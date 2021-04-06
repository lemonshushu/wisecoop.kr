import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../resources/images/logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
          <Navbar bg="light" expand="md" className="px-4 py-1 w-100" style={{position: 'absolute', zIndex: 3}}>
      <div className="d-flex justify-content-between w-100 align-items-center d-block d-md-none">
        <Navbar.Brand className="text-left">
          <Link style={{textDecoration: 'none'}} to="/"><img src={logo} height="80px" alt="와이즈쿱 로고" className="m-0" />
          <p className="m-0 text-secondary"><small>와이즈쿱협동조합</small></p></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto p-1" style={{fontSize: 18}}>
          <Nav.Link><Link style={{textDecoration: 'none'}} to="/" className="font-weight-bold text-dark">홈</Link></Nav.Link>
          <Nav.Link><Link style={{textDecoration: 'none'}} to="/intro" className="font-weight-bold text-dark">조합 소개</Link></Nav.Link>
          <Nav.Link><Link style={{textDecoration: 'none'}} to="/categories/SW교육" className="font-weight-bold text-dark">SW교육</Link></Nav.Link>
          <Nav.Link><Link style={{textDecoration: 'none'}} to="/categories/교육자료실" className="font-weight-bold text-dark">교육자료실</Link></Nav.Link>
          <Nav.Link><Link style={{textDecoration: 'none'}} to="/location" className="font-weight-bold text-dark">오시는길</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    
  );
}

export {NavBar};