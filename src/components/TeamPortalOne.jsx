import React from "react";
import { useAuth } from "../hooks/AuthContext";

const TeamPortalOne = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h2>TeamPortalOne</h2>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default TeamPortalOne;
