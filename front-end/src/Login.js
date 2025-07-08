// import React from 'react'; // Removed as requested
import './Login.css';

function Login() {
  return (
    <div className="login-app-container2">
      {/* Header */}
      <header className="login-header2">
        <div className="login-header-content2">
          <h1 className="login-brand2">EasyApply</h1>
        </div>
      </header>

      {/* Main Content - Login Form */}
      <main className="login-main-content2">
        <div className="login-form-container2">
          <h2 className="login-title2">Login</h2>

          {/* Email Input */}
          <div className="form-group2">
            <label htmlFor="email" className="form-label2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input2"
              placeholder="Enter email"
              aria-label="Email address"
            />
          </div>

          {/* Password Input */}
          <div className="form-group2">
            <label htmlFor="password" className="form-label2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input2"
              placeholder="Enter password"
              aria-label="Password"
            />
          </div>

          {/* Buttons Container */}
          <div className="login-buttons-container2"> {/* New container for buttons */}
            {/* Login Button */}
            <button
              type="submit"
              className="login-button2"
              aria-label="Login"
            >
              Login
            </button>
            {/* Sign Up Button */}
            <button
              type="button" // Changed to type="button" for non-submit action
              className="signup-button2" // New class name for the Sign Up button
              aria-label="Sign Up"
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
