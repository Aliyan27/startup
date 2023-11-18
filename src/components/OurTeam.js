import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/OurTeam.css";
import img1 from "../Assets/WhatsApp Image 2023-11-11 at 12.00.33_d8c03129.jpg";

const OurTeam = () => {
  return (
    <>
      <section className="ourTeam">
        <Container>
          <Row
            style={{
              textAlign: "center",
              marginBottom: "10px",
              justifyContent: "center",
            }}
          >
            <Col
              sm={8}
              md={8}
              lg={4}
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              <h2
                className="main-heading ourTeamHeading"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Our Team
              </h2>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              <div className="image-div">
                <Image src={img1} fluid />
                <div className="team-desc">
                  <h4>System Integration</h4>
                </div>
              </div>
            </Col>
            <Col
              sm={12}
              md={6}
              lg={4}
              style={{ textAlign: "center", marginBottom: "10px" }}
            >
              <div className="image-div">
                <Image src={img1} fluid />
                <div className="team-desc">
                  <h4>System Integration</h4>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              style={{ textAlign: "center", marginBottom: "10px" }}
              sm={12}
              md={6}
              lg={4}
            >
              {" "}
              <div className="image-div">
                <Image src={img1} fluid />
                <div className="team-desc">
                  <h4>System Integration</h4>
                </div>
              </div>
            </Col>
            <Col
              style={{ textAlign: "center", marginBottom: "10px" }}
              sm={12}
              md={6}
              lg={4}
            >
              <div className="image-div">
                <Image src={img1} fluid />
                <div className="team-desc">
                  <h4>System Integration</h4>
                </div>
              </div>
            </Col>
            <Col
              style={{
                textAlign: "center",
                marginBottom: "10px",
                cursor: "pointer",
              }}
              sm={8}
              md={8}
              lg={4}
            >
              <h2
                className="main-heading ourTeamHeading"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                See more
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurTeam;
