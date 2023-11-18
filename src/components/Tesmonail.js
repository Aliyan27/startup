import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/testimonal.css";

const Tesmonail = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Adjust the breakpoints as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="comment">
        <Container>
          <h2 className="main-heading">People Comment</h2>
          <div className="your-component-wrapper">
            <Slider {...settings}>
              <div className="slide-dev">
                <p>
                  "In the heart of the bustling city, a hidden gem awaits
                  discovery. The quaint coffee shop, nestled between towering
                  skyscrapers, exudes a warm and inviting atmosphere. As you
                  step through the door, the rich aroma of freshly ground coffee
                  beans envelops you."
                </p>
                <span>Name</span>
              </div>
              <div className="slide-dev">
                <p>
                  "In the heart of the bustling city, a hidden gem awaits
                  discovery. The quaint coffee shop, nestled between towering
                  skyscrapers, exudes a warm and inviting atmosphere. As you
                  step through the door, the rich aroma of freshly ground coffee
                  beans envelops you."
                </p>
                <span>Name</span>
              </div>
              <div className="slide-dev">
                <p>
                  "In the heart of the bustling city, a hidden gem awaits
                  discovery. The quaint coffee shop, nestled between towering
                  skyscrapers, exudes a warm and inviting atmosphere. As you
                  step through the door, the rich aroma of freshly ground coffee
                  beans envelops you."
                </p>
                <span>Name</span>
              </div>
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Tesmonail;
