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
// import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
// import image3 from "../assets/image3.jpg";
// import image4 from "../assets/image4.jpg";
// import image5 from "../assets/image5.jpg";
// import image6 from "../assets/image6.jpg";
// import image7 from "../assets/image7.jpg";
// import image8 from "../assets/image8.jpg";
// import image9 from "../assets/image9.jpg";

const images = [image2];

// sliding images for products
import tvlg from "../product-images/tv-lg.jpg";
import tvsamsung from "../product-images/tv-samsung.jpg";
import refrigeratorlg from "../product-images/refrigerator-lg.jpg";
import refrigeratorSamsung from "../product-images/refrigerator-samsung.jpg";
import iphone16 from "../product-images/iphone-16.jpg";
import sumsungs24 from "../product-images/samsung-s24-ultra.jpg";
import washingMSamsung from "../product-images/washing-machine-2.jpg";
import acWhirlpool from "../product-images/ac-wayfair.jpg";

import ledBulbImg from "../product-images/led-bulb.jpeg";
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
  { id: 1, name: "LG TV 43 inch", image: tvlg },
  { id: 2, name: "Samsung TV 55 inch", price: "₹65000", image: tvsamsung },
  { id: 3, name: "LG Refrigerator", price: "₹30000", image: refrigeratorlg },
  {
    id: 4,
    name: "Samsung Refrigerator",
    price: "₹35000",
    image: refrigeratorSamsung,
  },
  { id: 5, name: "iPhone 16", price: "₹120000", image: iphone16 },
  { id: 6, name: "Samsung S24 Ultra", price: "₹140000", image: sumsungs24 },
  {
    id: 7,
    name: "Washing Machine Samsung",
    price: "₹30000",
    image: washingMSamsung,
  },
  {
    id: 8,
    name: "Air Conditioner Whirlpool",
    price: "₹50000",
    image: acWhirlpool,
  },
  // electrical products
  { id: 9, name: "LED Bulb", image: ledBulbImg },
  { id: 10, name: "Extension Cord", image: extensionCordImg },
  { id: 11, name: "Ceiling Fan", image: ceilinngFanImg },
  { id: 12, name: "Electric Iron", image: electricIronImg },
  { id: 13, name: "Table Lamp", image: tableLampImg },
  { id: 14, name: "Power Strip", image: powerstripImg },
  { id: 15, name: "Tube Light", image: tubeLightImg },
  { id: 16, name: "Wall Socket", image: wallSocketImg },
  { id: 17, name: "Inverter Battery", image: InverterImg },
  { id: 18, name: "Wiring Cable", image: wiringCableImg },
  { id: 19, name: "Electric Kettle", image: electricKettleImg },
  { id: 20, name: "MCB Switch", image: mcbSwitchImg },
  { id: 21, name: "Charger Adapter", image: chargerAdapterImg },
  { id: 22, name: "Smart Plug", image: smartPlugImg },
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
          height: "50vh",
          width: "100%",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className="overlay">
          <h1 className="home-title">Electrify</h1>
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
      </div>
      <div className="home-info">
        <button
          className="btn-exploreproduct"
          onClick={() => navigate("/products")}
          data-aos="fade-up"
        >
          Explore All Products
          <FaArrowRight className="arrow-icon" />
        </button>
        <h2 data-aos="fade-up" className="home-title">Why Choose Electrify</h2>
        <p data-aos="fade-up">
          At Electrify, we provide reliable electrical products with a focus on
          quality and innovation. From home wiring essentials to
          industrial-grade components, we’ve got you covered.
        </p>

        <div className="info-highlights">
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(167, 243, 208, 0.9) 0%, rgba(235, 255, 245, 0.5) 100%)",
              color: "#111827",
            }}
            data-aos="fade-up"
          >
            <FaCheckCircle className="highlight-icon" />
            <h3>Trusted Quality</h3>
            <p>Tested products from reputed manufacturers</p>
          </div>
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 236, 179, 0.8) 0%, rgba(255, 255, 225, 0.3) 100%)",
              color: "#111827",
            }}
            data-aos="fade-up"
          >
            <FaHeadset className="highlight-icon" />
            <h3>Expert Support</h3>
            <p>Our team assists you in selecting the right components</p>
          </div>
          <div
            className="highlight"
            style={{
              background:
                "linear-gradient(135deg, rgba(249, 168, 212, 0.85) 0%, rgba(255, 240, 245, 0.3) 100%)",
              color: "#111827",
            }}
            data-aos="fade-up"
          >
            <FaShippingFast className="highlight-icon" />
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times to keep your projects on track</p>
          </div>
        </div>

        <button
          className="btn-exploreproduct"
          onClick={() => navigate("/services")}
          data-aos="fade-up"
        >
          Explore What We Offer
          <FaArrowRight className="arrow-icon" />
        </button>

        <div className="home-stats" data-aos="fade-up">
          <div className="stat-item">
            <FaAward className="highlight-icon" />
            <h3>3+</h3>
            <p>Decades of Experience</p>
          </div>
          <div className="stat-item">
            <FaSmile className="highlight-icon" />
            <h3>100%</h3>
            <p>Customer Satisfaction</p>
          </div>
          <div className="stat-item">
            <FaClock className="highlight-icon" />
            <h3>99.9%</h3>
            <p>On-Time Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
}
