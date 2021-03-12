import { Card, Col, Image, Jumbotron, ResponsiveEmbed, Row } from "react-bootstrap";
import banner from '../../resources/images/banner.png'

function Home() {
  return (
    <div>
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
  </div>
  );
}

export default Home;