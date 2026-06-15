// import "./Login.css";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";


// function Login() {
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page refresh

//     // Add your login validation here if needed

//     navigate("/dashboard");
//     // navigate("/admin/dashboard");  // ← must match the route above
//   };

//   return (
//     <div className="login-page">
//       <div className="login-left">
//         <h1>LEGACY</h1>

//         <h2>Welcome Back</h2>

//         <p>
//           Securely access your estate planning account
//           and continue protecting your family's future.
//         </p>
//       </div>

//       <div className="login-right">
//         <div className="login-card">
//           <h2>Sign In</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label>User ID</label>

//               <input
//                 type="text"
//                 placeholder="Enter User ID"
//               />
//             </div>

//             <div className="form-group">
//               <label>Password</label>

//               <div className="password-wrapper">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter Password"
//                 />

//                 <button
//                   type="button"
//                   className="show-btn"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             <div className="forgot-password">
//               <a href="/forgot-password">
//                 Forgot Password?
//               </a>
//             </div>

//             <button
//               type="submit"
//               className="login-btn"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Check if fields are empty
    if (!userId || !password) {
      setError("Please enter both User ID and Password.");
      return;
    }

    setLoading(true);

    try {
      // Send data to PHP backend
      const response = await fetch(
        // "http://localhost:8080/api/admin/login",
        "https://hpclsparesportal.in/legacy-backend/public/api/admin/login",
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
        // Login successful — save to localStorage and go to dashboard
        localStorage.setItem("legacy_admin_auth", "true");
        localStorage.setItem("legacy_admin_user", data.user.user_id);
        navigate("/admin/dashboard");
      } else {
        // Login failed — show error message from PHP
        setError(data.message);
      }

    } catch (err) {
      // Cannot reach server
      setError("Cannot connect to server. Make sure XAMPP is running and php spark serve is running.");
    } finally {
      setLoading(false);
    }
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

          {/* Show error message */}
          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>User ID</label>
              <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              <a href="/forgot-password">Forgot Password?</a>
            </div>

            {/* Show loading or Login text */}
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

export default Login;