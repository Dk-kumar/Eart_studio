import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoredContainer from "./DashBord/DashBord.container";
import AboutUsContainer from "./AboutUs/AboutUs.container";
import OurServicesContainer from "./OurServices/OurServices.container";
import GalleryContainer from "./Gallery/Gallery.container";
import ContactUsContainer from "./ContactUs/ContactUs.container";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUsContainer />} />
      </Routes>
      <Routes>
        <Route path="/our-services" element={<OurServicesContainer />} />
      </Routes>
      <Routes>
        <Route path="/gallery" element={<GalleryContainer />} />
      </Routes>
      <Routes>
        <Route path="/contact-us" element={<ContactUsContainer />} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<DashBoredContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
