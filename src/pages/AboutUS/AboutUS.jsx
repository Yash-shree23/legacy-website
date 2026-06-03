import React from "react";
import "./aboutus.css";

const teamMembers = [
  {
    id: 1,
    name: "John Anderson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "John founded LEGACY with a vision to simplify estate planning and make legal preparedness accessible to every family.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "Sarah leads customer success and focuses on helping users navigate complex estate planning decisions with confidence.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    story:
      "Michael oversees platform innovation, ensuring LEGACY remains secure, transparent, and easy to use.",
  },
];

function AboutUS() {
  return (
    <div className="about-container">

      <section className="about-section">
        <h2>Why Estate Planning Matters</h2>

        <p>
          Estate planning is an essential step in protecting your family’s future and ensuring that your personal wishes are carried out exactly as intended. It goes beyond simply distributing assets by providing clear instructions for important financial, legal, and healthcare decisions, helping loved ones avoid confusion during difficult times.
        </p>

        <p>
          Without a well-structured estate plan, families may face legal delays, unexpected expenses, and disputes that can create emotional and financial stress. LEGACY simplifies the estate planning process by offering secure, transparent, and legally compliant solutions that help individuals safeguard their legacy and provide peace of mind for future generations.
        </p>

        <h2>Regulatory Transparency</h2>

        <p>
          At LEGACY, regulatory transparency is a core principle that guides every aspect of our platform. We understand that estate planning involves highly sensitive personal, financial, and legal information, which is why we are committed to maintaining the highest standards of accountability, integrity, and compliance. Our goal is to ensure that users have a clear understanding of how our platform operates, how their information is handled, and the legal frameworks that support our services.
        </p>

        <p>
          LEGACY continuously works to align its operations with applicable laws, regulations, and industry best practices. Our platform is designed to support secure interactions, protect user information, and promote responsible estate planning. We regularly review and enhance our processes to adapt to evolving legal and regulatory requirements. Through our commitment to transparency, compliance, and ethical practices, we strive to create a trustworthy environment where users can confidently plan for the future, protect their loved ones, and preserve their legacy with peace of mind.
        </p>
      </section>

      <section className="platform-story about-section">
        <h2>Platform Story</h2>

        <p>
          LEGACY was created to remove the complexity and confusion
          often associated with estate planning. Our platform combines
          technology, security, and legal best practices to make
          planning simple and accessible.
        </p>

        <div className="story-cards">
          {teamMembers.map((member) => (
            <div className="story-card" key={member.id}>
              <div>
                   <p>{member.story}</p>
              </div>
              
              <div className="story-card-details">
                <img src={member.image} alt={member.name} />
                <h3 className="story-card-name">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
  <h2>Vision & Mission</h2>

  <div className="mission-vision-wrapper">

    <div className="vision-card">
      <h3>Our Vision</h3>
      <p>
        To become the most trusted digital estate planning
        platform, helping families preserve their legacy
        through secure, transparent, and innovative solutions.
      </p>
    </div>

    <div className="mission-card">
      <h3>Our Mission</h3>
      <p>
        To simplify estate planning by providing
        user-friendly tools that empower individuals
        to protect their assets, loved ones, and future.
      </p>
    </div>

  </div>
</section>
<section className="partners-section">
  <h2 className="partners-title">Our Trusted Partners</h2>

  <div className="partners-slider">
    <div className="partners-track">

      <img src="/logos/logo1.png" alt="Partner 1" />
      <img src="/logos/logo2.png" alt="Partner 2" />
      <img src="/logos/logo3.png" alt="Partner 3" />
      <img src="/logos/logo4.png" alt="Partner 4" />
      <img src="/logos/logo5.png" alt="Partner 5" />
      <img src="/logos/logo1.png" alt="Partner 6" />
      <img src="/logos/logo2.png" alt="Partner 7" />
      <img src="/logos/logo3.png" alt="Partner 8" />
      <img src="/logos/logo4.png" alt="Partner 9" />
      <img src="/logos/logo5.png" alt="Partner 10" />
     
    </div>
  </div>
</section>
    </div>
  );
}

export default AboutUS;