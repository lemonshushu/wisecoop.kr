import React from 'react'
import { Card, Image } from 'react-bootstrap'
import intro1 from '../../resources/images/intro1.png';

function Intro() {
  return (
    <div>

      <Card className="mt-3 p-5 d-none d-md">
        <Card.Title className="text-primary mb-3" style={{ fontSize: 32 }}><strong>조합 소개</strong></Card.Title>
        <hr />
        <Card.Img variant="bottom" src={intro1} className="mt-3" />
      </Card>
      <div className="mt-3 p-0 d-md-none">
        <h2 className="text-primary mt-3 mb-1" style={{ fontSize: 24 }}><strong>조합 소개</strong></h2>
        <Image src={intro1} className="mt-3 w-100" />
      </div>
    </div>
  );
}

export default Intro;