import React, { useState } from 'react';
import './signup.css'; // Import CSS file for styling

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [mandatoryError, setMandatoryError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all mandatory fields are filled
    if (!name || !email || !phoneNumber || !address || !interest || !message) {
      setMandatoryError('Please fill in all the mandatory fields.');
      return;
    }

    // Perform form submission logic here (e.g., send data to backend)

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhoneNumber('');
    setAddress('');
    setInterest('');
    setMessage('');

    // Show alert message
    alert('Thanks for registering!');
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const validatePhoneNumber = () => {
    if (!phoneNumber) {
      setPhoneError('Phone number is required.');
    } else if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
      setPhoneError('Phone number should be 10 digits.');
    } else {
      setPhoneError('');
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        {/* Add your image or image component here */}
      </div>
      <div className="form-container">
        <h1 className="form-header">Get in Touch With Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onBlur={validateEmail}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onBlur={validatePhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              {phoneError && <span className="error">{phoneError}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="interest">Interest</label>
            <input
              type="text"
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {mandatoryError && <span className="error">{mandatoryError}</span>}
          <button type="submit" className="blue-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
