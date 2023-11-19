import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "../common/Button";
import image from "../Assets/AdobeStock_170801444 1 (1).png";
import "../styles/ServicesBox-left.css";

const ServicesBoxLeft = (props) => {
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
      <section className="what-we-do-left">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} className="aboutus-col">
              <div className="des">
                <p
                  className="P-heading"
                  data-aos={isSmallScreen ? "" : "fade-left"}
                  data-aos-duration={isSmallScreen ? "" : "1500"}
                >
                  {props.secondHeading}
                </p>
                <p
                  data-aos={isSmallScreen ? "" : "fade-left"}
                  data-aos-duration={isSmallScreen ? "" : "1500"}
                >
                  {props.desc}
                </p>
                <div
                  style={{ display: `${props.display}` }}
                  // data-aos="fade-left"
                  // data-aos-duration="1500"
                >
                  <Button title={"Get started"} />
                </div>
              </div>
              <div className="img-div">
                <img
                  src={image}
                  alt="about us image"
                  width={959}
                  height={649}
                  className="what-we-do-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServicesBoxLeft;
