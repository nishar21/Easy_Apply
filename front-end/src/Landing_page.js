import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { useNavigate, Link } from 'react-router-dom';
import './Landing_page.css';
import college from'./university.png';
import degree from './degree.png';


function Landing_page() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignupClick = () => {
    navigate("/signup");
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  const handleExamsClick = () => {
    navigate("/exams");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleCollege=()=>{
    navigate('/college')
  }

  return (
<div className="app-container6">
      {/* Navbar */}
      <nav className="navbar6">
        <div className="navbar-brand6">EasyApply</div>
        <div className="navbar-links6">
          <Link to="/about" className="navbar-link6">About</Link>
          <a className="navbar-link6" onClick={handleSignupClick}>Sign up</a>
          <a className="navbar-link6" onClick={handleLoginClick}>Login</a>
          <Link to="/contact" className="navbar-link6">Contact</Link>
          <div className="menu6" onClick={toggleMobileMenu}>
            <MdMenu />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Conditionally Rendered */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay6" onClick={closeMobileMenu}>
          <div className="mobile-menu-content6" onClick={(e) => e.stopPropagation()}>
            <button className="close-menu-btn6" onClick={closeMobileMenu}>&times;</button>
            <Link to="/about" className="mobile-navbar-link6" onClick={closeMobileMenu}>About</Link>
            <a className="mobile-navbar-link6" onClick={handleSignupClick}>Sign up</a>
            <a className="mobile-navbar-link6" onClick={handleLoginClick}>Login</a>
            <Link to="/contact" className="mobile-navbar-link6" onClick={closeMobileMenu}>Contact</Link>
          </div>
        </div>
      )}

      {/* New section for College and Degree Images */}
      

      {/* Hero Section - This will now appear below the images */}
      <div className="hero-section6">
        <div className="hero-overlay6"></div>
        <div className="hero-content6">
          <div className="image-showcase-section6">
            <div className='college-image6' onClick={handleCollege}><img src={college} className='col-image6'></img>COLLEGE / UNIVERSITY</div>
            <div className='degree-image6'><img src={degree} className='col-image6'></img>DEGREE / COURSE</div>
          </div>
          <h1 className="hero-title6">
            Making Easier for Tomorrow
          </h1>
          <p className="hero-description6">
            We are making students to choose the respective college according to the facilities they want
          </p>
          <div className="hero-buttons6">
            <button className="btn-get-started6">
              GET STARTED
            </button>
            <button className="btn-apply-exams6" onClick={handleExamsClick}>
              APPLY FOR COMPETITIVE EXAMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;