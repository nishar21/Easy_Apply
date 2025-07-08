import React from 'react';
// Make sure to import your CSS file like this in your React project
import './Signup.css'
function Signup() {
  return (
    <div className="app-container1">
      {/* Navbar */}
      <nav className="navbar1">
        <div className="navbar-brand1">EasyApply</div>
        <div className="navbar-links1">
          <a href="#" className="navbar-link1">Home</a>
        </div>
      </nav>

      {/* Signup Form Section */}
      <div className="signup-section1">
        <div className="signup-card1">
          <h2 className="signup-title1">Sign up</h2>

          <form className="signup-form1">
            {/* Name */}
            <div>
              <label htmlFor="name" className="form-label1">Name</label>
              <input
                type="text"
                id="name1"
                className="form-input1"
                placeholder=""
              />
            </div>

            {/* Father Name */}
            <div>
              <label htmlFor="fatherName" className="form-label1">Father Name</label>
              <input
                type="text"
                id="fatherName"
                className="form-input1"
                placeholder=""
              />
            </div>

            {/* Mother Name */}
            <div>
              <label htmlFor="motherName" className="form-label1">Mother Name</label>
              <input
                type="text"
                id="motherName"
                className="form-input1"
                placeholder=""
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="form-label1">Email</label>
              <input
                type="email"
                id="email"
                className="form-input1"
                placeholder=""
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="mobileNumber" className="form-label1">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                className="form-input1"
                placeholder=""
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label htmlFor="dob" className="form-label1">Date of Birth</label>
              <input
                type="date"
                id="dob"
                className="form-input1"
              />
            </div>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="form-label1">Gender</label>
              <select
                id="gender"
                className="form-select1"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Nationality */}
            <div>
              <label htmlFor="nationality" className="form-label1">Nationality</label>
              <input
                type="text"
                id="nationality"
                className="form-input1"
                placeholder="Enter your nationality"
              />
            </div>

            {/* Blood Group */}
            <div>
              <label htmlFor="bloodGroup" className="form-label1">Blood Group</label>
              <select
                id="bloodGroup"
                className="form-select1"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Create New Password */}
            <div>
              <label htmlFor="newPassword" className="form-label1">Create new Password</label>
              <input
                type="password"
                id="newPassword"
                className="form-input1"
                placeholder="Enter password"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="form-label1">Confirm password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-input1"
                placeholder="Confirm password"
              />
            </div>

            {/* Login Link */}
            <div className="login-link-container1">
              <span className="login-link-text1">Already have an account? </span>
              <a href="#" className="login-link">Login Here</a>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="signup-button1"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
