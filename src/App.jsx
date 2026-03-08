import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Services from "./pages/Services";
import React from "react";
import ProviderDetails from "./pages/ProviderDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/provider/:id" element={<ProviderDetails />} />

        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </>
  );
}

export default App;
