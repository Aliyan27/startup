import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../common/Button";
import image from "../Assets/AdobeStock_227421922 1.png";
import "../styles/AboutUs.css";

const OurServices = (props) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="about-us" style={{ backgroundColor: "#ffff" }}>
        <Container>
          <Row
            style={{
              flexDirection: isSmallScreen ? "     column-reverse" : "",
            }}
          >
            <Col xs={12} md={12} lg={6}>
              <div className="img-div2">
                <img
                  src={image}
                  alt="about us image"
                  width={960}
                  height={604}
                  className="about-us-img"
                ></img>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6} className="aboutus-col">
              <h2
                className="main-heading"
                data-aos={isSmallScreen ? "" : "fade-right"}
                data-aos-duration={isSmallScreen ? "" : "1500"}
              >
                {props.title}
              </h2>
              <p
                className="P-heading"
                data-aos={isSmallScreen ? "" : "fade-right"}
                data-aos-duration={isSmallScreen ? "" : "1500"}
              >
                {props.secondHeading}
              </p>
              <p
                data-aos={isSmallScreen ? "" : "fade-right"}
                data-aos-duration={isSmallScreen ? "" : "1500"}
              >
                {props.desc}
              </p>
              <div style={{ display: `${props.display}` }}>
                <Button title={"Get started"} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurServices;
