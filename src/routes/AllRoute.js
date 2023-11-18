import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import ContactUsPage from "../Pages/ContactUsPage";

const AllRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default AllRoute;
