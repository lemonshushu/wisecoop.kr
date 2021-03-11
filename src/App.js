import React from 'react';
import './App.css';
import NavBar from './features/navBar/NavBar';
import { Card, Col, Container, Image, Jumbotron, ResponsiveEmbed, Row } from 'react-bootstrap';
import logo from './resources/images/logo.png';
import banner from './resources/images/banner.png'

function App() {
  return (
    <div className="App">
      <Container fluid="md" className="p-0">
        <header>
          <div className="mb-0 d-none d-md-flex justify-content-start align-items-end p-3" id="header">
            <img src={logo} alt="와이즈쿱 로고" id="logo-desktop" className="d-none d-md-block" />
            <div id="logo-text-desktop" className="ml-4 d-none d-md-flex flex-column justify-content-end align-items-start">
              <h4 className="font-weight-bold">와이즈쿱협동조합</h4>
              <p>SW Education Cloud 전문가 협동조합</p>
            </div>
          </div>
          <NavBar />
        </header>
        <section id="banner">
          <Jumbotron fluid className="p-0 mt-3">
            <Image src={banner} alt="홈페이지 배너" fluid />
          </Jumbotron>
        </section>
        <section id="videos">
          <Card className="p-3">
            <h4 className="mb-3 font-weight-bold d-block d-md-none text-info">관련 동영상</h4>
            <Row>
              <Col xs={12} md={6}>
                <ResponsiveEmbed aspectRatio="16by9" className="mb-3">
                  <iframe src="https://www.youtube.com/embed/7m-OucMVmwM" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video1" />
                </ResponsiveEmbed>
              </Col>
              <Col xs={12} md={6}>
                <ResponsiveEmbed aspectRatio="16by9" className="mb-3">
                  <iframe src="https://www.youtube.com/embed/Po3Y6hhgLLE" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="video2" />
                </ResponsiveEmbed></Col>
            </Row>
          </Card>
        </section>
      </Container>
      <footer>
        <Jumbotron fluid className="p-5" id="footer">
          <div className="m-auto justify-content-left">
            <p className="text-light">와이즈쿱협동조합 | 김은미 | 대전광역시 유성구 대덕대로 1175, 404호(송강동, 대전북부여성가족원) <br />사업자등록번호 : 797-86-01562 | 이메일 : wisecoopsw@gmail.com</p>
          </div>
        </Jumbotron>
      </footer>
    </div>
  );
}

export default App;
