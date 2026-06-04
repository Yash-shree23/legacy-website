import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // Add your login validation here if needed

    navigate("/dashboard");
    // navigate("/admin/dashboard");  // ← must match the route above
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1>LEGACY</h1>

        <h2>Welcome Back</h2>

        <p>
          Securely access your estate planning account
          and continue protecting your family's future.
        </p>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>User ID</label>

              <input
                type="text"
                placeholder="Enter User ID"
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                />

                <button
                  type="button"
                  className="show-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="forgot-password">
              <a href="/forgot-password">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;