import React from 'react'
import { Card} from 'react-bootstrap'
import IntroCarousel from './IntroCarousel'


function Intro() {
  return (
    <div>
      <div className="d-xs-block d-md-none" style={{ height: 50 }} />
      <div>
        <Card className="mt-3 py-4 px-2">
          <Card.Title className="text-primary mb-3" style={{ fontSize: 28 }}>
            <strong>조합 소개</strong>
          </Card.Title>
          <hr />
          <IntroCarousel />
        </Card>
      </div>
    </div>
  );
}

export {Intro};