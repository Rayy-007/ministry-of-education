import React from "react";

import { Link } from "react-router-dom";
import PortalNavbar from "./util/PortalNavbar";

const TeamPortalOne = () => {
  return (
    <div>
      <PortalNavbar />
      <div className="px-10 py-6 lg:px-32">
        <h2>TeamPortalOne</h2>

        <Link to={"/reset-password"}>Reset Password</Link>
      </div>
    </div>
  );
};

export default TeamPortalOne;
