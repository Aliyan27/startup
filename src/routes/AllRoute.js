import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactUsPage from "../Pages/ContactUsPage";
import Services from "../Pages/Services";
import OurWork from "../Pages/OurWork";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/serviceses" element={<Services />} />
        <Route path="/project" element={<OurWork />} />
      </Routes>
    </>
  );
};

export default AllRoute;
