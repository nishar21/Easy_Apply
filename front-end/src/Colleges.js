import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import './Colleges.css'
import lsr from './lsr.jpg'
import ihm from './ihm.jpg'

// const degrees = [
//   { id: 'btech', name: 'B.Tech (Bachelor of Technology)', count: 4386, checked: true },
//   { id: 'mcom', name: 'M.Com (Master of Commerce)', count: 2077, checked: false },
//   { id: 'barch', name: 'B.Arch. (Bachelor of Architecture)', count: 137, checked: false },
//   { id: 'march', name: 'M.Arch. (Master of Architecture)', count: 129, checked: false },
//   { id: 'phd', name: 'Ph.D. (Doctor of Philosophy)', count: 1147, checked: false },
//   { id: 'mds', name: 'M.D.S. (Master of Dental Surgery)', count: 914, checked: false },
//   { id: 'mba', name: 'MBA (Master of Business Administration)', count: 3500, checked: false },
//   { id: 'bsc', name: 'B.Sc. (Bachelor of Science)', count: 5120, checked: false },
//   { id: 'msc', name: 'M.Sc. (Master of Science)', count: 2800, checked: false },
//   { id: 'bba', name: 'BBA (Bachelor of Business Administration)', count: 1800, checked: false },
// ];

// You would then map over this array in your React component's JSX:
/*
{degreeOptions.map(degree => (
  <label key={degree.id} className="degreeOptionLabel4">
    <input
      type="checkbox"
      className="degreeOptionCheckbox4"
      checked={degree.checked} // You'd manage this with React state
      onChange={() => console.log(`Toggled ${degree.name}`)} // Add your actual handler
    />
    <span className="degreeOptionText4">{degree.name}</span>
    <span className="degreeOptionCount4">({degree.count})</span>
  </label>
))}
*/

function Colleges() {

      const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [degreeOptions, setDegreeOptions] = useState([
    { id: 'btech', name: 'B.Tech (Bachelor of Technology)', count: 4386, checked: true },
    { id: 'mcom', name: 'M.Com (Master of Commerce)', count: 2077, checked: false },
    { id: 'barch', name: 'B.Arch. (Bachelor of Architecture)', count: 137, checked: false },
    { id: 'march', name: 'M.Arch. (Master of Architecture)', count: 129, checked: false },
    { id: 'phd', name: 'Ph.D. (Doctor of Philosophy)', count: 1147, checked: false },
    { id: 'mds', name: 'M.D.S. (Master of Dental Surgery)', count: 914, checked: false },
    { id: 'mba', name: 'MBA (Master of Business Administration)', count: 3500, checked: false },
    { id: 'bsc', name: 'B.Sc. (Bachelor of Science)', count: 5120, checked: false },
    { id: 'msc', name: 'M.Sc. (Master of Science)', count: 2800, checked: false },
    { id: 'bba', name: 'BBA (Bachelor of Business Administration)', count: 1800, checked: false },
  ]);

    const colleges = [
    {
      id: 1,
      name: 'Institute of Hotel Management (IHM), Mumbai',
      location: 'Mumbai, Maharashtra',
      type: 'Private',
      fees: '20,000 - 3,18,000',
      accreditation: 'NCHMCT',
      avgPackage: '1.5 Lacs',
      exams: 'NCHMCT JEE',
      description: 'Institute of Hotel Management (IHM), Mumbai is a Private Institute located in Mumbai, Maharashtra. It was established in the year 1954. Institute of Hotel Management (IHM), Mumbai offers Regular courses',
      shortlisted: 1268,
      imageUrl: ihm // Placeholder image
    },
    {
      id: 2,
      name: 'LSR',
      location: 'Delhi, Delhi',
      type: 'Public',
      fees: '3,300 - 67,140',
      accreditation: 'UGC',
      avgPackage: '6.3 Lacs',
      exams: 'CUET',
      description: 'LSR is a Public Institute located in Delhi. It was established in the year 1956. LSR offers Regular courses such as BSc, BA, B.Com, Diploma, MSc in multiple disciplines.',
      rating: 4.5,
      reviews: 11,
      imageUrl: lsr // Placeholder image
    }
  ];

//   const handleDegreeChange = (id) => {
//     setDegreeOptions(prevOptions =>
//       prevOptions.map(option =>
//         option.id === id ? { ...option, checked: !option.checked } : option
//       )
//     );
//   };


  const handleSignupClick = () => {
    navigate("/signup");
    setIsMobileMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setIsMobileMenuOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

    const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };


    const [isDegreeFilterOpen, setIsDegreeFilterOpen] = useState(true);
  // State for state filter dropdown
    const [isStateFilterOpen, setIsStateFilterOpen] = useState(true);

  const handleDegreeChange = (id) => {
    setDegreeOptions(prevOptions =>
      prevOptions.map(degree =>
        degree.id === id ? { ...degree, checked: !degree.checked } : degree
      )
    );
  };

  // Toggle functions for filter sections
  const toggleDegreeFilter = () => setIsDegreeFilterOpen(!isDegreeFilterOpen);
  const toggleStateFilter = () => setIsStateFilterOpen(!isStateFilterOpen);

  return (
    <div className='app-container4'>
<nav className="navbar4">
            <div className="navbarBrand4">EasyApply</div>
            <div className="navbarLinks4">
                <Link to="/about" className="navbarLinkAbout4">About</Link>
                <a className="navbarLinkSignup4" onClick={handleSignupClick}>Sign up</a>
                <a className="navbarLinkLogin4" onClick={handleLoginClick}>Login</a>
                <Link to="/contact" className="navbarLinkContact4">Contact</Link>
                <div className="mobileMenuButton4" onClick={toggleMobileMenu}>
                    <MdMenu />
                </div>
            </div>
        </nav>

            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}> {/* Note: mobile-menu-overlay and mobile-menu-content were not in the provided CSS, so they remain unchanged. */}
                    <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-menu-btn" onClick={closeMobileMenu}>&times;</button> {/* close-menu-btn also not in CSS */}
                        <button to="/about" className="mobile-navbar-link" onClick={closeMobileMenu}>About</button> {/* mobile-navbar-link also not in CSS */}
                        <a className="mobile-navbar-link" onClick={handleSignupClick}>Sign up</a>
                        <a className="mobile-navbar-link" onClick={handleLoginClick}>Login</a>
                        <Link to="/contact" className="mobile-navbar-link" onClick={closeMobileMenu}>Contact</Link>
                    </div>
                </div>
            )}

        <div className='main5'>
<div class='filters5'>
                <div class='filter-section5'>
                    <div class="section-header5">
                        Degree <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {degreeOptions.map(degree => (
                            <label key={degree.id} className="option-item5">
                                <input type="checkbox" className="option-checkbox5" checked={degree.checked} onChange={() => handleDegreeChange(degree.id)} />
                                <span className="option-text5">{degree.name}</span>
                                <span className="option-count5">({degree.count})</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div class='filter-section5'>
                    <div class="section-header5">
                        State <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
                    <div class='filter-section5'>
                    <div class="section-header5">
                        City <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
                    <div class='filter-section5'>
                    <div class="section-header5">
                        Institute Type <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
                <div class='filter-section5'>
                    <div class="section-header5">
                        Exam <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
                <div class='filter-section5'>
                    <div class="section-header5">
                        Hostel <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
                <div class='filter-section5'>
                    <div class="section-header5">
                        Facilities <span class="arrow-icon5"></span>
                    </div>
                    <div class="search-box5">
                        <input type="text" placeholder="Search"/>
                    </div>
                    <div class='options-list5'>
                        {/* {stateOptions.map(state => ( // Assuming stateOptions similar to degreeOptions
                            <label key={state.id} className="option-item5">
                                {/* <input type="checkbox" className="option-checkbox5" checked={state.checked} onChange={() => handleStateChange(state.id)} />
                                <span className="option-text5">{state.name}</span>
                                <span className="option-count5">({state.count})</span> 
                            </label>
                        ))} */}
                    </div>
                </div>
            </div>
                  {/* College List Section */}
<div className='college-list5'>
        {colleges.map(college => (
          <div key={college.id} className='college-card5'>
            <div className='college-image5'>
              <img src={college.imageUrl} alt={college.name} />
            </div>
            <div className='college-details5'>
              <h3>{college.name}</h3>
              <div className='college-meta5'>
                <span>{college.location}</span> | <span>{college.type}</span>
              </div>
              <div className='college-info5'>
                <div className='info-item5'>
                  <strong>Fees:</strong> {college.fees}
                </div>
                <div className='info-item5'>
                  <strong>Accreditation:</strong> {college.accreditation}
                </div>
                <div className='info-item5'>
                  <strong>Avg Package:</strong> {college.avgPackage}
                </div>
                <div className='info-item5'>
                  <strong>Exams:</strong> {college.exams}
                </div>
              </div>
              <p className='college-description5'>
                {college.description} <a href='#'>Read More</a>
              </p>
              {college.shortlisted && (
                <div className='shortlisted-info5'>
                  Shortlisted by {college.shortlisted}+ students
                </div>
              )}
                {college.rating && (
                <div className='rating-info5'>
                  <span>{college.rating} &#9733;</span> ({college.reviews} Reviews)
                  {college.rating >= 4.0 && ( // Example: Add NAAC A+ if rating is high
                      <span className="naac-accreditation5">
                          <img src="https://via.placeholder.com/30x30?text=NAAC" alt="NAAC A+" />
                          A+ NAAC
                      </span>
                  )}
                </div>
              )}
              <div className='college-actions5'>
                <button className='get-counselling-btn5'>Get Free Counselling</button>
                <button className='download-brochure-btn5'>Download Brochure</button>
              </div>
            </div>
            <div className='college-actions-right5'>
                <span className='heart-icon5'>&#9825;</span>
                <span className='compare-icon5'>&#x21c4;</span>
            </div>
          </div>
        ))}
      </div>
        </div>

    </div>


  )
}

export default Colleges