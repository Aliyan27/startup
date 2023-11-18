import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import OurProduct from "../components/OurProduct";
import ContactUsFrom from "../components/ContactUsFrom";
import LatestWork from "../components/LatestWork";
import OurWork from "../utils/OurWork.json";

const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title={"Lorem ipsum dolor sit amet sit amet"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
        display={"none"}
      />
      <AboutUs
        title={"who we are"}
        secondHeading={" Technology investments as a differentiator"}
        desc={
          "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
        }
        display={"none"}
      />
      <OurServices
        title={"what we do"}
        secondHeading={" Technology investments as a differentiator"}
        desc={
          "No forced partnerships in technology here. We prioritize finding the right solutions to propel our clients' businesses forward. Our approach is technology-agnostic, covering all stages of the activity cycle. This allows us to provide access to current, robust, and advanced solutions. Paramount to our work is ensuring the security and compliant use of all information. It's not just about technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results."
        }
        display={"none"}
      />
      <LatestWork title={"Our Work"} json={OurWork} />
    </>
  );
};

export default AboutUsPage;
