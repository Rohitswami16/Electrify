import '../App.css'; // assuming your CSS is here

const services = [
  {
    icon: '🔧',
    title: 'Installation Services',
    description: 'Ceiling fans, lights, switchboards, and inverter installation at your home or office.',
  },
  {
    icon: '🛠️',
    title: 'Repairs & Maintenance',
    description: 'We fix wiring issues, short circuits, broken sockets, and more.',
  },
  {
    icon: '🏠',
    title: 'Home Automation',
    description: 'Smart lighting, Alexa/Google Home setup, and smart plugs installation.',
  },
  {
    icon: '🔋',
    title: 'Power Solutions',
    description: 'Inverter, UPS, battery replacement, and surge protection setup.',
  },
  {
    icon: '🏢',
    title: 'Commercial Services',
    description: 'Industrial wiring, office lighting, and camera power setup.',
  },
  {
    icon: '📦',
    title: 'Delivery & Support',
    description: 'Fast delivery and on-site installation with post-sale support.',
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
