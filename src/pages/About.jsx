import "../App.css";
import ownerImg from "../assets/owner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out",
    disable: "mobile",
  });

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-wrapper" data-aos="fade-up">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
            <span className="about-highlight">Electrify</span> is your trusted
            destination for high-quality electrical products. We specialize in
            modern lighting solutions, durable wiring components, and reliable
            electrical accessories tailored to both residential and commercial
            needs. With a commitment to innovation and customer satisfaction,
            Electrify is lighting up homes and powering progress across the
            nation.
          </p>

          <div className="about-cards">
            <div className="card vision-card" data-aos="zoom-in">
              <h2 className="card-title">🌟 Our Vision</h2>
              <p className="card-text">
                To be a leader in providing smart, sustainable, and accessible
                electrical solutions for everyone.
              </p>
            </div>
            <div className="card choose-card" data-aos="zoom-in">
              <h2 className="card-title">⚡ Why Choose Us?</h2>
              <p className="card-text">
                Quality assurance, wide product range, expert guidance, and a
                seamless shopping experience for our customers.
              </p>
            </div>
          </div>

          {/* Owner Section */}
          <div className="owner-section">
            <h2 className="section-title">👨‍🔧 Meet the Owner</h2>
            <div className="owner-details" >
              <img
                src={ownerImg}
                alt="Owner"
                className="owner-image"
                data-aos="fade-right"
              />
              <div data-aos="fade-left" >
                <p className="owner-description" >
                  Hi, I'm <strong>Owner Name</strong>, the proud founder of
                  Electrify. With over 15 years of hands-on experience in the
                  electrical industry, I started Electrify with the dream to
                  make high-quality, safe, and sustainable products accessible
                  to everyone. We’ve grown from a small local store to a trusted
                  name, thanks to your support and our dedication.
                </p>
              </div>
            </div>
          </div>

          {/* History Section */}
          <div className="history-section" data-aos="fade-up">
            <h2 className="section-title">🏠 Our Journey</h2>
            <p className="history-description">
              Electrify was founded in 2010 as a humble electrical supplies
              store in Bengaluru, Karnataka. Over the years, our passion for
              customer satisfaction and quality products has allowed us to
              expand into new areas, offer a broader range of solutions, and now
              serve both residential and commercial clients across the region.
              <br />
              <br />
              From day one, our mission has remained the same: to light up lives
              and power dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
