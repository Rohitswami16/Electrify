// export default function ProductCard({ name, price, image }) {
//   return (
//     <div className="bg-white p-4 shadow rounded-lg text-center">
//       <img src={image} alt={name} className="w-full h-40 object-contain mb-4" />
//       <h2 className="text-xl font-bold">{name}</h2>
//       <p className="text-gray-600">{price}</p>
//     </div>
//   );
// }


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
