import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async () => {
    try {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setMessage("Password reset email sent. Check your inbox.");
        })
        .catch((err) => {
          setMessage("Error sending password reset email. Please try again.");
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Password Reset</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
