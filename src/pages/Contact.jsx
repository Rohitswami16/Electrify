
import '../App.css';

export default function Contact() {
  return (
    <section className="contact-section">
    
   <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <p className="contact-description">
          We'd love to hear from you! Fill out the form or reach out using the contact information below.
        </p>

        {/* Contact Info */}
        <div className="contact-info">
          <h2 className="contact-info-title">Our Shop</h2>
          <p className="contact-info-text">123 Electro Street, Bangalore, India</p>
          <p className="contact-info-text">Email: support@electrify.com</p>
          <p className="contact-info-text">Phone: +91 98765 43210</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
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
