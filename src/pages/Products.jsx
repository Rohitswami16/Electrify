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
