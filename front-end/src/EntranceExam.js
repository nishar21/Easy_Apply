import React, { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom';
import './EntranceExam.css'; // Make sure this CSS file exists for styling

function EntranceExams() {
  let navigate = useNavigate();

  // State to control the visibility of the confirmation dialog
  const [showDialog, setShowDialog] = useState(false);
  // State to store the URL to open if the user confirms
  const [dialogUrl, setDialogUrl] = useState('');
  // State to store the exam name for display in the dialog
  const [dialogExamName, setDialogExamName] = useState('');

  // Function to handle showing the dialog for non-active registrations
  const handleApplyInactiveExam = (examName, mainWebsiteUrl) => {
    setDialogExamName(examName);
    setDialogUrl(mainWebsiteUrl);
    setShowDialog(true);
  };

  // Function to handle clicking "Yes" in the dialog
  const handleConfirmOpenWebsite = () => {
    if (dialogUrl) {
      window.open(dialogUrl, '_blank');
    }
    setShowDialog(false); // Close the dialog
    setDialogUrl(''); // Clear the URL
    setDialogExamName(''); // Clear the exam name
  };

  // Function to handle clicking "No" or closing the dialog
  const handleCloseDialog = () => {
    setShowDialog(false);
    setDialogUrl('');
    setDialogExamName('');
  };

  // The original copy function (if still needed, otherwise you can remove it if not used elsewhere)
  const copy = () => {
    navigate('/copy'); // Assuming '/copy' is where your form copy functionality is
  };

  return (
    <div className="exams-app-container3">
      {/* Background elements (simplified for HTML structure) */}
      <video autoPlay loop muted className="background-video">
        <source src="./blue_background.mp4" type="video/mp4" />
      </video>

      {/* Header */}
      <header className="exams-header3">
        <div className="header-brand3">Easy Apply</div>
        <nav className="header-nav3">
          <a href="#" className="nav-link3">Home</a>
        </nav>
      </header>

      {/* Main Content - Exam Application Card */}
      <main className="exams-main-content3">
        <div className="exam-card-container3">
          <h2 className="card-title3">Apply for Entrance Exams</h2>

          {/* JEE Main Button */}
          {/* Now triggers the dialog */}
          <button
            className="button-jee3"
            onClick={() => handleApplyInactiveExam('JEE Main', 'https://jeemain.nta.nic.in/')}
          >
            Apply to JEE Main
          </button>

          {/* AP EAMCET Button - remains direct as per original code */}
          <button className="button-ap3" onClick={() => window.open('https://eapcet-sche.aptonline.in/EAPCET/register', '_blank')}>
            Apply to AP EAMCET
          </button>

          {/* TS EAMCET Button - Now triggers the dialog */}
          <button
            className="button-ts3"
            onClick={() => handleApplyInactiveExam('TS EAMCET', 'https://tgeapcet.nic.in/default.aspx/')}
          >
            Apply to TS EAMCET
          </button>

          {/* NEET Exam Button - Now triggers the dialog */}
          <button
            className="button-neet3"
            onClick={() => handleApplyInactiveExam('NEET Exam', 'https://neet.nta.nic.in/')}
          >
            Apply to NEET Exam
          </button>
        </div>
      </main>

      {/* Confirmation Dialog (Modal) */}
      {showDialog && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>No Registration Currently Open</h3>
            <p className="dialog-message"> Registration for **{dialogExamName}** is not currently open.
              Would you like to open the main website for information?
            </p>
            <div className="dialog-actions">
              <button onClick={handleConfirmOpenWebsite} className="dialog-button-yes">Yes</button>
              <button onClick={handleCloseDialog} className="dialog-button-no">No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EntranceExams;