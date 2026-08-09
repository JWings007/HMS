import React from "react";
import "./assets/styles/main.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminSignin from "./pages/AdminSignin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegister from "./pages/AdminRegister";
import DesktopOnlyRoute from "./components/DesktopOnly";
import MobileRestrict from "./pages/MobileRestrict";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Redirect /home or legacy routes seamlessly to root / */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin/login"
          element={
            <DesktopOnlyRoute>
              <AdminSignin />
            </DesktopOnlyRoute>
          }
        />
        <Route
          path="/admin/register"
          element={
            <DesktopOnlyRoute>
              <AdminRegister />
            </DesktopOnlyRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <DesktopOnlyRoute>
              <AdminDashboard />
            </DesktopOnlyRoute>
          }
        />
        <Route path="/mobile-restricted" element={<MobileRestrict />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Wildcard fallback to root / */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
