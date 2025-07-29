import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthDetails from "./Auth/AuthDetails";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* Burger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Navigation Links and AuthDetails (for both mobile & desktop) */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/login" onClick={closeMenu}>Login</Link>
        <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
        <Link to="/chat" onClick={closeMenu}>Chat</Link>

        {/* Show AuthDetails inside dropdown on mobile */}
        <div className="auth-mobile">
          <AuthDetails />
        </div>
      </div>

      {/* Desktop AuthDetails (outside mobile nav) */}
      <div className="auth-desktop">
        <AuthDetails />
      </div>
    </nav>
  );
}

export default Navbar;
