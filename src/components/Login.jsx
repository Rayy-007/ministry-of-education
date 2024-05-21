import { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import Navbar from "./util/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const hadleSignIn = (event) => {
    event.preventDefault();
    login(formData);
  };

  return (
    <div>
      <Navbar />
      <div className="lg:w-2/6 px-6 md:w-3/6 mt-16 m-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold">Login an account</h3>
          <p className="text-base ">Enter your email to sign in for this app</p>
        </div>
        <form className="flex flex-col gap-4 w-full " onSubmit={hadleSignIn}>
          <div className="field padding-bottom--24">
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email@gmail.com"
            />
          </div>
          <div className="field padding-bottom--24">
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <Button type="submit">Sign in with email</Button>
        </form>

        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-foreground"></div>
          <span className="mx-4 text-lg text-neutral-light">or </span>
          <div className="flex-grow border-t border-foreground"></div>
        </div>

        <Link className="w-full" to={"/reset-password"}>
          <Button className="w-full bg-slate-300 text-black hover:bg-slate-400">
            Reset Password
          </Button>
        </Link>
        <p className="text-center">
          By clicking continue, you agree to our <b>Terms of Service</b> and
          <b>Privacy Policy</b>
        </p>
      </div>
    </div>
  );
};

export default Login;
