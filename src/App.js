import React from 'react';
import './App.css';
import { Container, Jumbotron } from 'react-bootstrap';
import logo from './resources/images/logo.png';
import { Redirect, Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

import NavBar from './features/navBar/NavBar';
import Home from './features/home/Home';
import Intro from './features/intro/Intro';
import Loc from './features/loc/Loc';

function App() {
  return (
    <Router>
      <div className="App">
        <Container fluid="md" className="p-0">
          <header>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div className="mb-0 d-none d-md-flex justify-content-start align-items-end p-3" id="header">
                <img src={logo} alt="와이즈쿱 로고" id="logo-desktop" className="d-none d-md-block" />
                <div id="logo-text-desktop" className="ml-4 d-none d-md-flex flex-column justify-content-end align-items-start">
                  <h4 className="font-weight-bold">와이즈쿱협동조합</h4>
                  <p>SW Education Cloud 전문가 협동조합</p>
                </div>
              </div>
            </Link>
            <NavBar />
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/intro" component={Intro} />
            <Route exact path="/location" component={Loc} />
            <Redirect to="/" />
          </Switch>
        </Container>
        <footer>
          <Jumbotron fluid className="p-5" id="footer">
            <div className="m-auto justify-content-left">
              <p className="text-light"><small>와이즈쿱협동조합 | 김은미 | 대전광역시 유성구 대덕대로 1175, 404호(송강동, 대전북부여성가족원) <br />사업자등록번호 : 797-86-01562 | 이메일 : wisecoopsw@gmail.com</small></p>
            </div>
          </Jumbotron>
        </footer>
      </div>

    </Router>
  );
}

export default App;
