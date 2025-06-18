import { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">⚡Electrify</h1>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Nav Links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          to="/about"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="/products"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="/services"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
