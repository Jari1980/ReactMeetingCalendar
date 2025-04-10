import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ManageMeetings from "./components/ManageMeetings";
import "bootstrap/dist/css/bootstrap.css";
import { MeetingProvider } from "./components/context";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import FooterComp from "./components/FooterComp";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MeetingProvider>
      <NavBarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </MeetingProvider>
    <FooterComp />
  </BrowserRouter>
);
