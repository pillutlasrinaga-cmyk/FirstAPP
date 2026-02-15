import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import LoginPages from "./components/pages/auth/LoginPages";
import RegisterPage from "./components/pages/auth/RegisterPage";
import NotFoundPage from "./components/pages/auth/NotFoundPage";

// Protected pages
import DashboardPage from "./components/Dashboard/DashboardPage"; 
import Documents from "./components/pages/Documents";
import DocumentDetail from "./components/pages/DocumentDetail";
import Flashcards from "./components/pages/Flashcards";
import Quizzes from "./components/pages/Quizzes";
import QuizDetail from "./components/pages/QuizDetail";
import Profile from "./components/pages/Profile";

const App = () => {
  const isAuthenticated = true; // Change to false to test login redirect
  const loading = false; // Must be false to render routes

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
        {/* Redirect root */}
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

        {/* Auth routes */}
        <Route path="/login" element={<LoginPages />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/documents/:id" element={<DocumentDetail />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/:id" element={<QuizDetail />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
