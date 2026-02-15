import { Navigate } from "react-router-dom";

// TODO: Replace this with your real auth check once backend is ready
// e.g. check a token from localStorage, a Context value, Redux state, etc.
const isAuthenticated = () => {
  return true; // Temporarily allow all access during development
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
