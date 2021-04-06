import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faIdBadge, } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Accordion, Card, Col, Row, Button } from 'react-bootstrap';

function Loc() {
  return (
    <div>
      <div className="d-xs-block d-md-none" style={{ height: 50 }} />

      <Card className="mt-3 p-5 d-none d-md-block">
        <Card.Title className="text-primary mb-3" style={{ fontSize: 32 }}><strong>오시는길</strong></Card.Title>
        <hr />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.062971562519!2d127.38474215139662!3d36.43185999594716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356536773c48ae5d%3A0x45101ac20f8e723c!2z64yA7ZWc66-86rWtIOuMgOyghOq0keyXreyLnCDsnKDshLHqtawg7Iah6rCV64-ZIDIwMC0y!5e0!3m2!1sko!2sus!4v1615525831063!5m2!1sko!2sus" height="400" className="w-100" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="map" />
        <Card.Body className="text-left">
          <Card.Subtitle className="my-2 text-muted">와이즈쿱협동조합</Card.Subtitle>
          <Card.Title>대전광역시 유성구 대덕대로 1175, 404호 (송강동, 북부여성가족원)</Card.Title>
          <hr className="mt-4" />
          <Row className="my-5" style={{ fontSize: 18 }}>
            <Col xs="1" className="text-muted" >
              <FontAwesomeIcon icon={faClock} />
            </Col>
            <Col xs="3">이용시간</Col>
            <Col xs="2" className="text-muted">평일</Col>
            <Col xs="6">10:00~17:00</Col>
          </Row>
          <hr />
          <Row className="mt-5 mb-4" style={{ fontSize: 18 }}>
            <Col xs="1" className="text-muted" >
              <FontAwesomeIcon icon={faIdBadge} />
            </Col>
            <Col xs="3">사업자정보</Col>
            <Col xs="2" className="text-muted">상호명</Col>
            <Col xs="6">와이즈쿱협동조합</Col>
          </Row>
          <Row className="my-4" style={{ fontSize: 18 }}>
            <Col xs="1"></Col>
            <Col xs="3"></Col>
            <Col xs="2" className="text-muted">대표자</Col>
            <Col xs="6">김은미</Col>
          </Row>
          <Row className="my-4" style={{ fontSize: 18 }}>
            <Col xs="1"></Col>
            <Col xs="3"></Col>
            <Col xs="2" className="text-muted">사업자번호</Col>
            <Col xs="6">797-86-01562</Col>
          </Row>
          <Row className="mt-4 mb-5" style={{ fontSize: 18 }}>
            <Col xs="1"></Col>
            <Col xs="3"></Col>
            <Col xs="2" className="text-muted">이메일</Col>
            <Col xs="6">wisecoopsw@gmail.com</Col>
          </Row>
        </Card.Body>
      </Card>
      <div className="mt-3 p-1 d-md-none">
        <h2 className="text-primary mb-3" style={{ fontSize: 24 }}><strong>오시는길</strong></h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.062971562519!2d127.38474215139662!3d36.43185999594716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356536773c48ae5d%3A0x45101ac20f8e723c!2z64yA7ZWc66-86rWtIOuMgOyghOq0keyXreyLnCDsnKDshLHqtawg7Iah6rCV64-ZIDIwMC0y!5e0!3m2!1sko!2sus!4v1615525831063!5m2!1sko!2sus" height="300" className="w-100" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="map" />
        <div className="text-left p-2">
          <h4 className="my-2 text-muted" style={{ fontSize: 16 }}>와이즈쿱협동조합</h4>
          <h3 style={{ fontSize: 20 }}>대전광역시 유성구 대덕대로 1175, 404호 (송강동, 북부여성가족원)</h3>

          <Accordion defaultActiveKey="0" className="mt-4" style={{ fontSize: 14 }}>
            <Card style={{ textDecoration: 'none' }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="font-weight-bold text-dark"><FontAwesomeIcon icon={faClock} className="mr-3 text-muted" /> 이용시간</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row>
                    <Col xs="4" className="text-muted">평일</Col>
                    <Col xs="8">10:00~17:00</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card style={{ textDecoration: 'none' }}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1" className="font-weight-bold text-dark"><FontAwesomeIcon icon={faIdBadge} className="mr-3 text-muted" /> 사업자정보</Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row>
                    <Col xs="4" className="text-muted">상호명</Col>
                    <Col xs="8">와이즈쿱협동조합</Col>
                  </Row>
                  <Row className="my-3">
                    <Col xs="4" className="text-muted">대표자</Col>
                    <Col xs="8">김은미</Col>
                  </Row>
                  <Row className="my-3">
                    <Col xs="4" className="text-muted">사업자번호</Col>
                    <Col xs="8">797-86-01562</Col>
                  </Row>
                  <Row>
                    <Col xs="4" className="text-muted">이메일</Col>
                    <Col xs="8">wisecoopsw@gmail.com</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

        </div>

      </div>
    </div>
  );

}

export {Loc};