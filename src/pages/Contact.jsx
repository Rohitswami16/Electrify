import "../App.css";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  // Initialize AOS for animations
  AOS.init({
    duration: 1000, // Animation duration
    once: false, // Whether animation should happen only once
    easing: "ease-in-out", // Smooth easing for animations
    disable: "mobile", // Disable animations on mobile devices  
  });

  return (
    <section className="contact-section">
      <div className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-description">
            We'd love to hear from you! Fill out the form or reach out using the
            contact information below.
          </p>

          {/* Contact Info */}
          <div className="contact-info" data-aos="zoom-in">
            <h2 className="contact-info-title">Our Shop</h2>
            <p className="contact-info-text">
              123 Electro Street, Bengaluru, Karnataka India
            </p>
            <p className="contact-info-text">Email: support@electrify.com</p>
            <p className="contact-info-text">Phone: +91 98765 43210</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form" data-aos="zoom-in">
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="form-input full-width"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="form-input full-width"
              required
            ></textarea>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
