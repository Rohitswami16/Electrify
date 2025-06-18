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

import AOS from "aos";
import "aos/dist/aos.css";

// Import images from assets
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const images = [image1, image2, image3];

// sliding images for products
import ledBulbImg from "../product-images/led-bulb.jpeg";
import switchboardImg from "../product-images/switch-board.jpeg";
import extensionCordImg from "../product-images/extension-cord.jpeg";
import ceilinngFanImg from "../product-images/ceiling-fan.jpeg";
import electricIronImg from "../product-images/iron.jpeg";
import tableLampImg from "../product-images/table-lamp.jpeg";
import powerstripImg from "../product-images/power-strip.jpeg";
import tubeLightImg from "../product-images/tube-light.jpeg";
import wallSocketImg from "../product-images/wall-socket.jpeg";
import InverterImg from "../product-images/Inverter-Battery.jpeg";
import wiringCableImg from "../product-images/Wiring-Cable.jpeg";
import electricKettleImg from "../product-images/Electric-Kettle.jpeg";
import mcbSwitchImg from "../product-images/MCB-Switch.jpeg";
import chargerAdapterImg from "../product-images/Charger-Adapter.jpeg";
import smartPlugImg from "../product-images/Smart-Plug.jpeg";

const products = [
  { id: 1, name: "LED Bulb", price: "₹120", image: ledBulbImg },
  { id: 2, name: "Switch Board", price: "₹450", image: switchboardImg },
  { id: 3, name: "Extension Cord", price: "₹350", image: extensionCordImg },
  { id: 4, name: "Ceiling Fan", price: "₹1500", image: ceilinngFanImg },
  { id: 5, name: "Electric Iron", price: "₹999", image: electricIronImg },
  { id: 6, name: "Table Lamp", price: "₹700", image: tableLampImg },
  { id: 7, name: "Power Strip", price: "₹400", image: powerstripImg },
  { id: 8, name: "Tube Light", price: "₹250", image: tubeLightImg },
  { id: 9, name: "Wall Socket", price: "₹180", image: wallSocketImg },
  { id: 10, name: "Inverter Battery", price: "₹6200", image: InverterImg },
  { id: 11, name: "Wiring Cable", price: "₹950", image: wiringCableImg },
  { id: 12, name: "Electric Kettle", price: "₹1300", image: electricKettleImg },
  { id: 13, name: "MCB Switch", price: "₹300", image: mcbSwitchImg },
  { id: 14, name: "Charger Adapter", price: "₹450", image: chargerAdapterImg },
  { id: 15, name: "Smart Plug", price: "₹1500", image: smartPlugImg },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      disable: "mobile",
    });
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
      </div>

      <div className="home-sliding-images">
        <div className="slider-track">
          {products.concat(products).map((product, index) => (
            <div className="slider-item" key={index}>
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>

        <button
          className="btn-exploreproduct"
          onClick={() => navigate("/products")}
        >
          Explore All Products{" "}
          <FaArrowRight style={{ marginLeft: "8px", marginTop: "2px" }} />
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
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(209, 250, 229, 0.4), rgba(167, 243, 208, 0.4))",
              color: "#111827",
            }}
            data-aos="zoom-in"
          >
            <FaCheckCircle className="highlight-icon" />
            <h3>Trusted Quality</h3>
            <p>Tested products from reputed manufacturers</p>
          </div>
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 249, 196, 0.4), rgba(255, 236, 179, 0.4))",
              color: "#111827",
            }}
            data-aos="zoom-in"
          >
            <FaHeadset className="highlight-icon" />
            <h3>Expert Support</h3>
            <p>Our team assists you in selecting the right components</p>
          </div>
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(249, 168, 212, 0.3) 0%, rgba(255, 192, 203, 0.3) 100%)",
              color: "#111827",
            }}
            data-aos="zoom-in"
          >
            <FaShippingFast className="highlight-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times to keep your projects on track</p>
          </div>
        </div>

        <button
          className="btn-exploreproduct"
          onClick={() => navigate("/services")}
        >
         Explore What We Offer{" "}
          <FaArrowRight style={{ marginLeft: "8px", marginTop: "2px" }} />
        </button>

        <div className="home-stats" data-aos="flip-up">
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
