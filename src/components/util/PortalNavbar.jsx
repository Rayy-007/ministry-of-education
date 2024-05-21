import React from "react";
import ProfileImage from "../../assets/profile-img.png";
import { Link } from "react-router-dom";
import { ProfileDropdown } from "./ProfileDropDown";

const PortalNavbar = () => {
  return (
    <div className="shadow-md py-6 px-10   flex items-center  gap-4  justify-between lg:px-32">
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 md:gap-6">
        <h4 className="text-xl font-bold">Team Portal One</h4>
        <nav className="flex flex-col md:flex-row md:items-center gap-2  md:gap-6">
          <Link to="/">Home</Link>
          <Link to="/portal1">Portal One</Link>
          <Link to="/portal2">Portal Two</Link>
        </nav>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default PortalNavbar;
