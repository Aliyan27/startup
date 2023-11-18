import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/LatestWork.css";

const LatestWork = (props) => {
  return (
    <>
      <section className="Card-grid-section">
        <Container>
          <h2 className="main-heading">{props.title}</h2>
          <Row xs={1} md={2} className="card-grid">
            {props.json.map((item, index) => (
              <Col>
                <div
                  className={
                    index == 0 || index == 3 ? "lastcard" : "lastcard-middle"
                  }
                >
                  <img src="" alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LatestWork;
