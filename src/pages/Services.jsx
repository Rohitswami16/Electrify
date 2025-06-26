import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: "🔧",
    title: "Installation Services",
    description:
      "Ceiling fans, lights, switchboards, and inverter installation at your home or office.",
    background:
      "linear-gradient(135deg, rgba(221, 214, 243, 0.4), rgba(203, 195, 227, 0.4))",
  },
  {
    icon: "🛠️",
    title: "Repairs & Maintenance",
    description:
      "We fix wiring issues, short circuits, broken sockets, and more.",
    background:
      "linear-gradient(135deg, rgba(255, 249, 196, 0.4), rgba(255, 236, 179, 0.4))",
  },

  {
    icon: "🔋",
    title: "Power Solutions",
    description:
      "Inverter, UPS, battery replacement, and surge protection setup.",
    background:
      "linear-gradient(135deg, rgba(173, 216, 230, 0.4), rgba(194, 233, 251, 0.4))",
  },
  {
    icon: "🏢",
    title: "Commercial Services",
    description: "Industrial wiring, office lighting, and camera power setup.",
    background:
      "linear-gradient(135deg, rgba(255, 218, 185, 0.4), rgba(255, 203, 164, 0.4))",
  },
  {
    icon: "📦",
    title: "Delivery & Support",
    description:
      "Fast delivery and on-site installation with post-sale support.",
    background:
      "linear-gradient(135deg, rgba(255, 229, 180, 0.4), rgba(255, 204, 153, 0.4))",
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
            // style={{
            //   background: service.background,
            // }}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="800"
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
