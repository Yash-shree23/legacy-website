import React, { useState } from "react";
import "./forgetpassword.css";
const ForgotPassword = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords and Confirm Password do not match");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/admin/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userId,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        setMessage("Password updated successfully");
        setMessageType("success");
      } else {
        setMessage(data.message);
        setMessageType("error");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
      setMessageType("error");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2>Forgot Password</h2>
        <p className="subtitle">
          Enter your User ID and create a new password.
        </p>
        {message && (
          <div
            className={
              messageType === "success"
                ? "success-message"
                : "error-message"
            }
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User ID</label>
            <input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            /> 
          </div>
          <button type="submit" className="reset-btn">
            Update Password
          </button>
        </form>
      </div>
    </div>

  );
};

export default ForgotPassword;