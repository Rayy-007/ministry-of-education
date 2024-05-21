import React from "react";
import { useAuth } from "../hooks/AuthContext";

const TeamPortalTwo = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h2>TeamPortalTwo</h2>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default TeamPortalTwo;
