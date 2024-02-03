import { Container, Row, Col } from "react-bootstrap";

import { testimonial } from "../data/index";
import FaqComponent from "../components/FaqComponent";

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s">
                Semua Testimonial
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                eaque.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 testimonial-class row-cols-1 mt-5">
            {testimonial.map((data) => {
              return (
                <Col key={data.id} className="mb-5 shadow-lg">
                  <p className="desc">{data.desc}</p>
                  <div className="people">
                    <img src={data.image} alt="" />
                    <div>
                      <h5 className="mb-1">{data.name}</h5>
                      <p className="m-0 fw-bold">{data.skill}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  );
};

export default TestimonialPage;
