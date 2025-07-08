// import React from 'react';

// function Landing_page() {
//   return (
//     <div className="min-h-screen bg-gray-900 font-sans">
//       {/* Navbar */}
//       <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
//         <div className="text-red-500 text-2xl font-bold ml-8">EasyApply</div>
//         <div className="flex space-x-6 mr-8 text-white">
//           <a href="#" className="hover:text-red-300 transition duration-300">About</a>
//           <a href="#" className="hover:text-red-300 transition duration-300">Sign up</a>
//           <a href="#" className="hover:text-red-300 transition duration-300">Login</a>
//           <a href="#" className="hover:text-red-300 transition duration-300">Contact</a>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div
//         className="relative h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center text-center"
//         style={{ backgroundImage: "url('https://placehold.co/1920x1080/2c3e50/ffffff?text=Forest+Path')" }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for text readability */}
//         <div className="relative z-10 p-8">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
//             Making Easier for Tomorrow
//           </h1>
//           <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
//             We are making students to choose the respective college according to the facilities they want
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
//             <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
//               GET STARTED
//             </button>
//             <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
//               APPLY FOR COMPETITIVE EXAMS
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Landing_page;

import React from 'react';
import { MdMenu } from "react-icons/md";
import './Landing_page.css';
import { useNavigate } from 'react-router-dom';

function Landing_page() {
  let navigate = useNavigate()

  const handleNavclicks=()=>{
    navigate("/signup")
  }

  const login=()=>{
    navigate("/login")
  }

  const exams=()=>{
    navigate("/exams")
  }
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">EasyApply</div>
        <div className="navbar-links">
          <a href="#" className="navbar-link">About</a>
          <a href="#" className="navbar-link" onClick={handleNavclicks}>Sign up</a>
          <a href="#" className="navbar-link" onClick={login}>Login</a>
          <a href="#" className="navbar-link">Contact</a>
          <div className='menu'><MdMenu/></div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div> {/* Overlay for text readability */}
        <div className="hero-content">
          <h1 className="hero-title">
            Making Easier for Tomorrow
          </h1>
          <p className="hero-description">
            We are making students to choose the respective college according to the facilities they want
          </p>
          <div className="hero-buttons">
            <button className="btn-get-started">
              GET STARTED
            </button>
            <button className="btn-apply-exams" onClick={exams}>
              APPLY FOR COMPETITIVE EXAMS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing_page;
