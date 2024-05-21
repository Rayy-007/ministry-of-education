import React from "react";
import Navbar from "./util/Navbar";
import { Link } from "react-router-dom";
import HeroImage from "../assets/Hero-Image.png";
import { Button } from "./ui/button";
import Footer from "./util/Footer";
import { useAuth } from "@/hooks/AuthContext";

const LandingPage = () => {
  const { currentUser } = useAuth();

  return (
    <div className="">
      <Navbar />

      <div className="hero flex flex-col gap-6 py-6 px-10 lg:flex-row lg:px-32 lg:items-center">
        <div className="left flex flex-col gap-3 lg:w-1/2 lg:gap-6">
          <h1 className="text-3xl font-bold">
            Welcome to the Ministry of Education's Facilities Management System
          </h1>
          <p className="text-base text-secondary-foreground">
            Our centralized system provides real-time updates and comprehensive
            data to monitor the progress of school construction, refurbishment,
            and repair projects. Ensuring timely completion and quality
            standards, we strive to deliver high-quality educational facilities
            for students and communities.
          </p>
          {currentUser && (
            <Link to="/portal1">
              <Button>Sign In To Dashboard</Button>
            </Link>
          )}
        </div>
        <div className="right lg:w-1/2">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
