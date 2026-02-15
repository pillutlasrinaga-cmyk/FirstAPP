import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Auth pages
import LoginPages from "./components/pages/auth/LoginPages";
import RegisterPage from "./components/pages/auth/RegisterPage";
import NotFoundPage from "./components/pages/auth/NotFoundPage";

// Protected pages
import Dashboard from "./components/pages/Dashboard/DashboardPage";
import DocumentDetailPage from "./components/pages/documents/DocumentDetail";
import DocumentListPage from "./components/pages/documents/DocumentListPage";
import FlashCardPages from "./components/pages/Flashcards/FlashCardPages";
import Flashcardlistpage from "./components/pages/Flashcards/Flashcardlistpage";
import ProfilePage from "./components/pages/Profile/ProfilePage";
import QuizResultPage from "./components/pages/quizzes/QuizResultPage";
import QuizTakePage from "./components/pages/quizzes/QuizTakePage";
import ProtectedRoute from "./components/pages/ProtectedAuth";

const App = () => {
  const isAuthenticated = false; // Change to true once backend is ready
  const loading = false;

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
          <Route path="/documents" element={<DocumentListPage />} />
          <Route path="/documents/:id" element={<DocumentDetailPage />} />
          <Route path="/flashcards" element={<Flashcardlistpage />} />
          <Route path="/flashcards/:id" element={<FlashCardPages />} />
          <Route path="/quizzes" element={<QuizResultPage />} />
          <Route path="/quizzes/:id" element={<QuizTakePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;