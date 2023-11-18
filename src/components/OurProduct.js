import React, { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import img1 from "../Assets/Rectangle 7.png";
import "../styles/OurProduct.css";

const OurProduct = (props) => {
  const [textslice, setTextSlice] = useState(true);
  const [clickIndex, setClickIndex] = useState(0);
  const textSlice = (text, index) => {
    if (textslice) {
      return text.slice(0, 150);
    } else {
      if (index === clickIndex) {
        return text;
      } else {
        return text.slice(0, 150);
      }
    }
  };
  return (
    <>
      <section className="our-product">
        <Container>
          <h2 className="main-heading">{props.title}</h2>
          <Row className="card-grid">
            {props.OurServices.map((item, index) => (
              <Col xs={12} md={4} lg={3}>
                <Card
                  style={{ width: "100%" }}
                  className={index === 1 ? "middle-card" : ""}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  <Card.Img variant="top" src={img1} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>

                    <Card.Text>{textSlice(item.desc, index)}</Card.Text>
                    <span
                      className="link-readmore"
                      onClick={() => {
                        setClickIndex(index);
                        if (textslice) {
                          setTextSlice(false);
                        } else {
                          setTextSlice(true);
                        }
                      }}
                    >
                      Read More
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <span
            className="link-readmore"
            style={{ textAlign: "center", marginTop: "10px" }}
          >
            Explore More
          </span>
        </Container>
      </section>
    </>
  );
};

export default OurProduct;
