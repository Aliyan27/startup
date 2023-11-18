import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/ContactUs.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import Button from "../common/Button";
import shape2 from "../Assets/Shape2.png";

const ContactUsFrom = () => {
  return (
    <>
      <section className="contactus">
        <Container>
          <div className="form">
            <div className="form-body">
              <h2>Say Hi!</h2>
              <p>We’d like to talk with you.</p>
              <span className="lable-span">My name is</span>
              <input
                type="text"
                className="contactus-input"
                placeholder="Full Name"
              />
              <span className="lable-span">My Email is</span>
              <input
                type="text"
                className="contactus-input"
                placeholder="Email"
              />
              <span className="lable-span">Message</span>
              <textarea
                type="text"
                className="contactus-input"
                placeholder="Full Name"
              />
              <div style={{ width: "30%" }}>
                <Button title={"Send Message"} />
              </div>
            </div>
            <div className="contact-info">
              <div className="contact-info-body">
                <h2>Contact Information </h2>
                <p>
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>{" "}
                <p>
                  <BsFillTelephoneFill /> <span>3449229963</span>
                </p>
                <p>
                  <MdEmail /> <span>demo@gmail.com</span>
                </p>
                <p style={{ marginBottom: " 20px" }}>
                  <ImLocation /> <span>demo location </span>
                </p>
                <div className="social-link">
                  <p>
                    <AiFillFacebook />
                  </p>
                  <p>
                    <AiOutlineTwitter />
                  </p>
                  <p>
                    <AiFillLinkedin />
                  </p>
                  <p>
                    <AiFillInstagram />
                  </p>
                </div>
              </div>
              <img src={shape2} alt="" />
              <div className="overlay"></div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactUsFrom;
