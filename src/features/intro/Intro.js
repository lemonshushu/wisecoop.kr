import React from 'react'
import { Card } from 'react-bootstrap'
import intro1 from '../../resources/images/intro1.png';

function Intro () {
  return (
    <Card className="mt-3 p-5">
      <Card.Title className="text-primary mb-3" style={{fontSize: 32}}><strong>조합 소개</strong></Card.Title>
      <hr />
      <Card.Img variant="bottom" src={intro1} className="mt-3" />
    </Card>
  );
}

export default Intro;