import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md py-6 px-10  flex flex-col items-center gap-4 md:flex-row justify-between lg:px-32">
      <h4 className="text-xl font-bold">Ministry of Education</h4>
      <nav className="flex gap-2 items-center md:gap-4">
        <a href="/">Home</a>
        <Link to="/portal1">
          <Button>Portal One</Button>
        </Link>
        <Link to="/portal2">
          <Button>Portal Two</Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
