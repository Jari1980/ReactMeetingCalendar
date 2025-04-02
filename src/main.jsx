import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ManageMeetings from "./components/ManageMeetings";
import "bootstrap/dist/css/bootstrap.css";
import { MeetingProvider } from "./components/context";
import NavBarComp from "./components/NavBarComp";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavBarComp />
    <MeetingProvider>
      <ManageMeetings />
    </MeetingProvider>
  </BrowserRouter>
);
