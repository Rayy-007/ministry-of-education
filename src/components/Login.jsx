import { useState } from "react";
import { useAuth } from "../hooks/AuthContext";

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
    <form onSubmit={hadleSignIn}>
      <div className="field padding-bottom--24">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
      </div>
      <div className="field padding-bottom--24">
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
      </div>

      <div className="field padding-bottom--24">
        <input type="submit" value={"Login"} />
      </div>
    </form>
  );
};

export default Login;
