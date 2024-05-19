import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, TeamPortalOne, TeamPortalTwo } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal1" element={<TeamPortalOne />} />
        <Route path="/portal2" element={<TeamPortalTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
