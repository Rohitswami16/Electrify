// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-900 text-white p-4 flex justify-between items-center gap-4 shadow-lg">
//       <h1 className="text-xl font-bold">⚡Electrify</h1>
//       <div className="space-x-4 text-xl font-bold">
//         <Link to="/" className="hover:text-yellow-400">Home</Link>
//         <Link to="/about" className="hover:text-yellow-400">About</Link>
//         <Link to="/products" className="hover:text-yellow-400">Products</Link>
//         <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
//       </div>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import '../../src/App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">⚡Electrify</h1>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}
