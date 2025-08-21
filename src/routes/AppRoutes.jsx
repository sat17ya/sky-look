import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ServicesPage from "../pages/ServicesPage";
import ContactUs from "../pages/ContactUs";
import Projects from "../pages/Projects";
import PropertyDetails from "../components/ProjectDetails";

export default function AppRoutes() {
  return (
    
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<MainLayout />}>
        {/* Child routes */}
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<PropertyDetails />} />
      </Route>
    </Routes>
  );
}
