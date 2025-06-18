


import '../App.css'; // Import the shared stylesheet
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function ProductCard({ name, price, image }) {

  AOS.init({
    duration: 1000,
    once: false, // Animation happens only once
    easing: 'ease-in-out', // Smooth easing for animations
    disable: 'mobile', // Disable animations on mobile devices
  })
  return (
    <div className="product-card" data-aos="fade-up">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
    </div>
  );
}
