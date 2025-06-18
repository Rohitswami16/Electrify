import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaHeadset,
  FaShippingFast,
  FaAward,
  FaSmile,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "../App.css";

// Import images from assets
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const images = [image1, image2, image3];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          width: "100%",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="overlay">
          <h1 className="home-title">Welcome to Electrify</h1>
          <p className="home-subtitle">
            Your trusted source for electrical solutions
          </p>
        </div>
        
        <button
          className="btn-exploreproduct"
          onClick={() => navigate("/products")}
        >
          Explore Our Products <FaArrowRight style={{ marginLeft: "8px", marginTop: "2px" }} />
        </button>
      </div>
      <div className="home-info">
        <h2>Why Choose Electrify</h2>
        <p>
          At Electrify, we provide reliable electrical products with a focus on
          quality and innovation. From home wiring essentials to
          industrial-grade components, we’ve got you covered.
        </p>

        <div className="info-highlights">
          <div className="highlight">
            <FaCheckCircle className="highlight-icon" />
            <h3>Trusted Quality</h3>
            <p>Tested products from reputed manufacturers</p>
          </div>
          <div className="highlight">
            <FaHeadset className="highlight-icon" />
            <h3>Expert Support</h3>
            <p>Our team assists you in selecting the right components</p>
          </div>
          <div className="highlight">
            <FaShippingFast className="highlight-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times to keep your projects on track</p>
          </div>
        </div>

        <div className="home-stats">
          <div className="stat-item">
            <FaAward className="stat-icon" />
            <h3>3+</h3>
            <p>Decades of Experience</p>
          </div>
          <div className="stat-item">
            <FaSmile className="stat-icon" />
            <h3>100%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon" />
            <h3>99.9%</h3>
            <p>On-Time Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
}
