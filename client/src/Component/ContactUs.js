import React, { useState } from 'react';
import '../Styles/ContactUs.css'; // Import the CSS file
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook, AiFillLinkedin } from "react-icons/ai";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Function to handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can implement the logic to send the user's message to the admin here
    console.log('Form data:', formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>
        <div className="email">
          <h2>Email:</h2>
          <p><a href="mailto:dropoutanalysis@gmail.com">dropoutanalysis@gmail.com</a></p>
        </div>
        <div className="phone">
          <h2>Phone:</h2>
          <p>Kundan Choudhary: <a href="tel:7972478750">7972478750</a></p>
        </div>
        <div className="fax">
          <h2>Fax:</h2>
          <p>(856)423-3420</p>
        </div>
      </div>
      <div className="social-media">
        <h2>Follow Us</h2>
        <div className="social-icons">
          {/* Add your social media icons here */}
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
        </div>
        <div className="address">
          <h2>Our Location</h2>
          <p>123 Main Street, City Name</p>
          <p>State, Country - Zip Code</p>
        </div>

        <div className="office-hours">
          <h2>Office Hours</h2>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 2:00 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      <div className="contact-form">
        <centre><h2>Contact Form</h2></centre>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
