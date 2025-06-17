


import '../App.css'; // Import the shared stylesheet

export default function ProductCard({ name, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price}</p>
    </div>
  );
}
