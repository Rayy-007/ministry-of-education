import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  Login,
  ResetPassword,
  TeamPortalOne,
  TeamPortalTwo,
} from "./components";
import { AuthProvider } from "./hooks/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/portal1" element={<PrivateRoute />}>
            <Route path="" element={<TeamPortalOne />} />
          </Route>
          <Route path="/portal2" element={<PrivateRoute />}>
            <Route path="" element={<TeamPortalTwo />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
