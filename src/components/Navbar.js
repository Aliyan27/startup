import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "../styles/Navbar.css";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <header className={isActive ? "headerbgcolor" : ""}>
        <Container>
          <div
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          >
            DevCosmic
          </div>
          <nav className="normal-navbar">
            <ul>
              <li
                className="navlink"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="navlink"
                onClick={() => {
                  navigate("/aboutus");
                }}
              >
                About Us
              </li>
              <li
                className="navlink"
                onClick={() => {
                  navigate("/serviceses");
                }}
              >
                Services
              </li>
              <li className="navlink">Project</li>
              <li>
                <Button
                  title={"Contact Us"}
                  clickFunction={() => navigate("/contactus")}
                  // onClick={() => {
                  //   navigate("/contactus");
                  // }}
                />
              </li>
            </ul>
          </nav>
          {isActive ? (
            <>
              {" "}
              <nav className="responsive-navbar">
                <ul>
                  <li
                    className="navlink"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Home
                  </li>
                  <li
                    className="navlink"
                    onClick={() => {
                      navigate("/aboutus");
                    }}
                  >
                    About Us
                  </li>
                  <li
                    className="navlink"
                    onClick={() => {
                      navigate("/serviceses");
                    }}
                  >
                    Services
                  </li>
                  <li className="navlink">Project</li>
                  <li>
                    <Button
                      title={"Contact Us"}
                      clickFunction={() => navigate("/contactus")}
                      onClick={() => {
                        navigate("/contactus");
                      }}
                    />
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <></>
          )}

          <nav className="toggle-btn">
            <button
              className={`menu ${isActive ? "active" : ""}`}
              onClick={handleClick}
            >
              <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
              </svg>
            </button>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
