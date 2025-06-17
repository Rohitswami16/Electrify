

import '../App.css'; // Import the global stylesheet

export default function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          <span className="about-highlight">Electrify</span> is your trusted destination for high-quality electrical products.
          We specialize in modern lighting solutions, durable wiring components, and reliable electrical accessories tailored to both
          residential and commercial needs. With a commitment to innovation and customer satisfaction, Electrify is lighting up homes and powering progress across the nation.
        </p>

        <div className="about-cards">
          <div className="card vision-card">
            <h2 className="card-title">🌟 Our Vision</h2>
            <p className="card-text">
              To be a leader in providing smart, sustainable, and accessible electrical solutions for everyone.
            </p>
          </div>
          <div className="card choose-card">
            <h2 className="card-title">⚡ Why Choose Us?</h2>
            <p className="card-text">
              Quality assurance, wide product range, expert guidance, and a seamless shopping experience for our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
