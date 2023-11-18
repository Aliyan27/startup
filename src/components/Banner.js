import React from "react";
import "../styles/Banner.css";
import shape from "../Assets/Shape.png";
import Button from "../common/Button";
import { Container } from "react-bootstrap";

const Banner = (props) => {
  return (
    <>
      <div className="banner">
        <Container>
          <div className="banner-content">
            <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
              {props.title}
            </h2>
            <p>{props.desc}</p>
            <div
              style={{
                maxWidth: "50%",
                margin: "0 auto",
                display: `${props.display}`,
              }}
            >
              <Button title={"Get Started"} />
            </div>
          </div>
        </Container>
        <img src={shape} alt="shape" className="shape-img" />
        <div class="overlay"></div>
      </div>
    </>
  );
};

export default Banner;
