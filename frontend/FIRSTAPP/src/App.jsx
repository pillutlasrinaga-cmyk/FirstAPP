import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPages from "./pages/LoginPages";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Navigate } from "react-router-dom";
const APP = () => {
  const isAuthenticated = false; // Replace with actual authentication logic
  const loading = false; // Replace with actual loading state

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default APP;
