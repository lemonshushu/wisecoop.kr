import React, { useState } from 'react'
import intro1 from '../../resources/images/intro1.png';
import intro2 from '../../resources/images/intro2.png';
import intro3 from '../../resources/images/intro3.png';
import intro4 from '../../resources/images/intro4.png';
import { Carousel} from 'react-bootstrap'

const styleNext = {
  backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E")`
}
const stylePrev = {
  backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='orange' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E")`
}

const nextIcon = <span aria-hidden="true" className="carousel-control-next-icon" style={styleNext} />

const prevIcon = <span aria-hidden="true" className="carousel-control-prev-icon" style={stylePrev} />

function IntroCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{maxWidth: 800, margin: 'auto'}} activeIndex={index} onSelect={handleSelect} nextIcon={nextIcon} prevIcon={prevIcon} pause='hover'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={intro1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={intro2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={intro3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={intro4}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default IntroCarousel;