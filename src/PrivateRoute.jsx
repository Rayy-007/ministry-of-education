// src/PrivateRoute.js
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./hooks/AuthContext";

const PrivateRoute = () => {
  const { currentUser } = useAuth();
  console.log("🚀 ~ PrivateRoute ~ currentUser:", currentUser);
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
