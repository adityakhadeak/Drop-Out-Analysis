
import React from 'react';
import '../Styles/AboutUs.css';


import  { useState } from 'react';


const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Kundan Choudhary',
      role: 'Lead Developer',
    },
    {
      name: 'Aditya Khade',
      role: 'Machine Learning Specialist',
    },
    {
      name: 'Saurabh Sonavale',
      role: 'Data Analyst',
    },
    {
      name: 'Sahil Chaudhari',
      role: 'Database Administrator',
    },
    {
      name: 'Pranali Baviskar',
      role: 'UI/UX Designer',
    },
    {
      name: 'Sayali Patil',
      role: 'Frontend Developer',
    },
  ];

  // State to track the selected team member
  const [hoveredMember, setHoveredMember] = useState(null);

  // Function to handle member click and set selectedMember state
  const handleMemberHover = (memberName) => {
    setHoveredMember(memberName);
  };


  // Function to generate email
  const generateEmail = (firstName) => {
    const nameParts = firstName.split(' ');

// Access the first part (the first name)
  const firstName1 = nameParts[0];
    return `${firstName1}21comp@student.mes.ac.in`;
  };

  return (
    <div className="maincontainer">
    <div className="about-us-container">
      <div className="header">
        <h1>About Us</h1>
        <p>We are a team of passionate individuals dedicated to improving education outcomes.</p>
      </div>
      <div className="project-info">
        <div className="header">
      <h2>Our Project</h2>
      <p>
        Welcome to our project dedicated to addressing the critical issue of school dropout rates using advanced data analysis and machine learning. We are a team of passionate individuals committed to improving education outcomes for students across various boards, including state boards, CBSE, and ICSE.
      </p>
    </div>
    <div className="how-it-works">
      <h2>How Our Project Works</h2>
      <div className="step">
        <h3>Data Collection</h3>
        <p>
          We collaborate with different schools to collect comprehensive data on students, including their names, standards, leaving certificates, caste information, and reasons for dropping out. This data is gathered from various educational boards to ensure a broad and inclusive dataset.
        </p>
      </div>
      <div className="step">
        <h3>Data Analysis</h3>
        <p>
          The collected data is meticulously analyzed using cutting-edge data analysis techniques. We examine patterns, demographics, and correlations to gain insights into the dropout phenomenon.
        </p>
      </div>
      <div className="step">
        <h3>Machine Learning Predictions</h3>
        <p>
          Leveraging the power of machine learning, we develop predictive models. These models are trained on historical data to forecast the number of students who might drop out in the future. This valuable information allows schools and authorities to take proactive measures to prevent dropout cases.
        </p>
      </div>
      <div className="step">
        <h3>Graphical Visualization</h3>
        <p>
          We provide graphical representations of the data analysis results, making it easier to interpret and act upon the insights. These visualizations help educational institutions visualize trends and patterns in dropout rates.
        </p>
      </div>
      <div className="step">
        <h3>Data Storage with MongoDB Atlas</h3>
        <p>
          All collected data is securely stored in a cloud-based MongoDB Atlas database. MongoDB Atlas ensures data integrity, scalability, and accessibility, enabling seamless data management for decision-makers, researchers, and policymakers.
        </p>
      </div>
    </div>
      </div>
      <div className="team">
        <h2>Meet Our Team</h2>
        <ul className="team-members-list">
        {teamMembers.map((member, index) => (
            <li key={index}>
              <div
                className={`team-member-card ${hoveredMember === member.name ? 'active' : ''}`}
                onMouseEnter={() => handleMemberHover(member.name)}
                onMouseLeave={() => handleMemberHover(null)}
              >
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                {hoveredMember === member.name && (
                  <div className="member-info">
                    <p>Email: {generateEmail(member.name)}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
