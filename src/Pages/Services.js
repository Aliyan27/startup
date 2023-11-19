import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

import ServicesBox from "../components/ServicesBox";
import ServicesBoxLeft from "../components/ServicesBoxLeft";
import Button from "../common/Button";

const Services = () => {
  return (
    <>
      <>
        <Navbar />
        <Banner
          title={"Lorem ipsum dolor sit amet sit amet"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          display={"none"}
        />
        <ServicesBox
          secondHeading={" Sysytem integration"}
          desc={
            "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
          }
          display={"none"}
        />
        <ServicesBoxLeft
          secondHeading={" Technology investments as a differentiator"}
          desc={
            "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
          }
          display={"none"}
        />
        <ServicesBox
          secondHeading={" Sysytem integration"}
          desc={
            "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
          }
          display={"none"}
        />
        <ServicesBoxLeft
          secondHeading={" Technology investments as a differentiator"}
          desc={
            "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
          }
          display={"none"}
        />
        <h2
          className="main-heading"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          You need to know more?! lET’S talk now!
        </h2>
        <div
          style={{
            maxWidth: "50%",
            margin: "0 auto",
            display: `flex`,
          }}
        >
          <Button title={" gET IN TOUCH"} />
        </div>
        <Navbar />
      </>
    </>
  );
};

export default Services;
