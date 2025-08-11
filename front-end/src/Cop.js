import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'; // Import the library

function Copy() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '', // Changed from mobileNumber to phone
    fatherName: '',
    motherName: '',
    nationality: '',
    gender: '',
    dob: '', // Date of Birth (YYYY-MM-DD format from input type="date")
  });

  const [copyStatus, setCopyStatus] = useState('');
  const [copiedText, setCopiedText] = useState(''); // State to hold the text that was actually copied

  // Universal handler for updating form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to format all form data into a single string for copying
  const formatDataForCopy = () => {
    // Customize the output string as you need
    const formattedString = `
--- Applicant Details ---
Full Name: ${formData.fullName || 'N/A'}
Email: ${formData.email || 'N/A'}
Phone: ${formData.phone || 'N/A'}  // Changed label and reference here
Father's Name: ${formData.fatherName || 'N/A'}
Mother's Name: ${formData.motherName || 'N/A'}
Nationality: ${formData.nationality || 'N/A'}
Gender: ${formData.gender || 'N/A'}
Date of Birth: ${formData.dob || 'N/A'}
-----------------------
`.trim(); // .trim() removes leading/trailing whitespace

    return formattedString;
  };

  // Callback function for when the copy operation is successful
  const handleCopySuccess = (text, result) => {
    if (result) {
      setCopiedText(text); // Store the exact text that was copied
      setCopyStatus('All form data copied to clipboard!');
    } else {
      setCopyStatus('Failed to copy to clipboard.');
    }
    setTimeout(() => setCopyStatus(''), 3000); // Clear status after 3 seconds
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <h2>Applicant Information Form</h2>
      <form>
        {/* Full Name */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Email */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Phone - CHANGED FIELD */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Phone: {/* Changed label here */}
            <input
              type="tel"
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Father's Name */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Father's Name:
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Mother's Name */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Mother's Name:
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Nationality */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Nationality:
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>
        {/* Gender */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
        </div>
        {/* Date of Birth */}
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </label>
        </div>

        {/* --- Copy Button --- */}
        <CopyToClipboard
          text={formatDataForCopy()} // This is the text that will be copied
          onCopy={handleCopySuccess}  // This callback fires after copy attempt
        >
          <button
            type="button" // Use type="button" to prevent accidental form submission
            style={{
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '20px',
            }}
          >
            Copy All Form Data
          </button>
        </CopyToClipboard>
      </form>

      {copyStatus && (
        <p
          style={{
            marginTop: '15px',
            color: copyStatus.includes('Failed') ? 'red' : 'green',
            fontSize: '0.9em',
          }}
        >
          {copyStatus}
        </p>
      )}

      {copiedText && copyStatus.includes('copied') && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e6ffe6', border: '1px solid #a3e6a3', borderRadius: '5px' }}>
          <p>Text that was copied:</p>
          <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0 }}>{copiedText}</pre>
        </div>
      )}

      {/* Optional: Display current form data for debugging/verification */}
      <h3 style={{ marginTop: '30px' }}>Current Form Data (for verification):</h3>
      <pre style={{ backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
}

export default Copy;
