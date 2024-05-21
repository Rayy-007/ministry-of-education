import React from "react";
import { useAuth } from "../hooks/AuthContext";
import PortalNavbar from "./util/PortalNavbar";

const TeamPortalTwo = () => {
  const { logout } = useAuth();
  return (
    <div>
      <PortalNavbar />
      <div className="px-10 py-6 lg:px-32">
        <h2>TeamPortalTwo</h2>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    </div>
  );
};

export default TeamPortalTwo;
