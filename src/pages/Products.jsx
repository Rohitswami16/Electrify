// import ProductCard from '../components/ProductCard';

// const products = [
//   { id: 1, name: "LED Bulb", price: "₹120", image: "https://via.placeholder.com/150" },
//   { id: 2, name: "Switch Board", price: "₹450", image: "https://via.placeholder.com/150" },
// ];

// export default function Products() {
//   return (
//     <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
//       {products.map((p) => (
//         <ProductCard key={p.id} {...p} />
//       ))}
//     </div>
//   );
// }


import ProductCard from '../components/ProductCard';
import '../App.css'; // Import the global stylesheet

const products = [
  { id: 1, name: "LED Bulb", price: "₹120", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Switch Board", price: "₹450", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Extension Cord", price: "₹350", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Ceiling Fan", price: "₹1500", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Electric Iron", price: "₹999", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Table Lamp", price: "₹700", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Power Strip", price: "₹400", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Tube Light", price: "₹250", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Wall Socket", price: "₹180", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Inverter Battery", price: "₹6200", image: "https://via.placeholder.com/150" },
  { id: 11, name: "Wiring Cable", price: "₹950", image: "https://via.placeholder.com/150" },
  { id: 12, name: "Electric Kettle", price: "₹1300", image: "https://via.placeholder.com/150" },
  { id: 13, name: "MCB Switch", price: "₹300", image: "https://via.placeholder.com/150" },
  { id: 14, name: "Charger Adapter", price: "₹450", image: "https://via.placeholder.com/150" },
  { id: 15, name: "Smart Plug", price: "₹1500", image: "https://via.placeholder.com/150" }
];

export default function Products() {
  return (
    <div className="products-grid">
      {products.map((p) => (
        <ProductCard key={p.id} {...p} />
      ))}
    </div>
  );
}
