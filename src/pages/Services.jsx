import "../App.css";
import AOS from "aos";
import {
  FaTools,
  FaWrench,
  FaBatteryFull,
  FaBuilding,
  FaTruck,
} from "react-icons/fa";
import "aos/dist/aos.css";

const services = [
  {
    index: 0,
    icon: <FaTools />,
    title: "Installation Services",
    description:
      "Ceiling fans, lights, switchboards, and inverter installation at your home or office.",
    background: "linear-gradient(to bottom right, #fffaf5, #fff3e6)", // light orange
  },
  {
    index: 1,
    icon: <FaWrench />,
    title: "Repairs & Maintenance",
    description:
      "We fix wiring issues, short circuits, broken sockets, and more.",
    background: "linear-gradient(to bottom right, #f3fdf7, #e6faef)", // light green + mint
  },
  {
    index: 2,
    icon: <FaBatteryFull />,
    title: "Power Solutions",
    description:
      "Inverter, UPS, battery replacement, and surge protection setup.",
    background: "linear-gradient(to bottom right, #faf5ff, #f3eaff)", // light purple
  },
  {
    index: 3,
    icon: <FaBuilding />,
    title: "Commercial Services",
    description: "Industrial wiring, office lighting, and camera power setup.",
    background: "linear-gradient(to bottom right, #fff6f9, #ffeef5)", // light pink
  },
  {
    index: 4,
    icon: <FaTruck />,
    title: "Delivery & Support",
    description:
      "Fast delivery and on-site installation with post-sale support.",
    background: "linear-gradient(to bottom right, #f3fbff, #eaf7ff)", // sky blue
  },
];

export default function Services() {
  AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out",
    disable: "mobile",
  });

  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            data-aos="zoom-in"
            style={{ background: service.background }}
          >
            <div
              className="service-icon"
              style={{
                background: service.background,
              }}
            >
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
