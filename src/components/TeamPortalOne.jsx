import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";

const TeamPortalOne = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h2>TeamPortalOne</h2>
      <button onClick={() => logout()}>Log Out</button>

      <Link to={"/reset-password"}>Reset Password</Link>
    </div>
  );
};

export default TeamPortalOne;
