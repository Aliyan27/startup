import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import OurProduct from "../components/OurProduct";
import ContactUsFrom from "../components/ContactUsFrom";
import OurTeam from "../components/OurTeam";
import LatestWork from "../components/LatestWork";
import Tesmonail from "../components/Tesmonail";
import ourservices from "../utils/Ourservices.json";
import OurWork from "../utils/OurWork.json";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Banner
        title={`Discover the Innovation at DevCosmic`}
        desc={
          "Welcome to DevCosmic, where innovation converges with expertise to shape the future of digital solutions. At DevCosmic, we take pride in being more than just an IT company; we are architects of possibilities, crafting seamless experiences through cutting-edge frontend and backend development and app solutions."
        }
        display={"initial"}
      />
      <AboutUs
        title={"We are Solution Providers"}
        secondHeading={
          " Crafting Tailored Solutions for Your Unique Challenges"
        }
        desc={
          "At DevCosmic, we understand that every business is unique. That's why we go beyond generic solutions, offering personalized strategies and architectures that align with your specific needs. Our commitment is to provide comprehensive solutions, ensuring that every line of code serves the purpose of enhancing your business objectives. With DevCosmic, your digital transformation is in expert hands."
        }
        display={""}
      />
      <OurServices
        title={"We are Innovators"}
        secondHeading={"Crafting Tailored Solutions for Your Unique Challenges"}
        desc={
          "DevCosmic is not just a service provider; we are architects of innovation. We thrive on pushing the boundaries of what's possible, constantly exploring new technologies and methodologies. Our team of forward-thinking professionals is dedicated to staying ahead of industry trends, ensuring that your projects are not just current but future-proof."
        }
        display={""}
      />
      <OurProduct title={"We are Innovators"} OurServices={ourservices} />
      <OurTeam />
      <LatestWork title={"Our Work"} json={OurWork} />
      <Tesmonail />
      <ContactUsFrom />
    </>
  );
};

export default HomePage;
