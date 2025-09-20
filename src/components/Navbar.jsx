import { useState } from "react";
import { NavLink } from "react-router-dom";
import { X, Menu, ShoppingCart } from "lucide-react";
import logo from "../assets/img/logo.png";
import ecart from "../assets/img/ecart.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative transition-colors duration-300 hover:text-[#088178] ${
      isActive ? "text-[#088178] after:w-[50%]" : "after:w-0"
    } 
    after:absolute after:bottom-[-4px] after:left-[2px] after:h-[2px] after:bg-[#088178] after:transition-all after:duration-300 hover:after:w-[30%]`;

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 font-semibold" id="navbar">
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/shop" className={linkClass}>Shop</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>Blog</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>

        {/* Cart Icon */}
        <div>
          <NavLink to="/cart" className={linkClass}>
            <ShoppingCart className="w-6 h-6" />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col items-center space-y-4 px-6 py-4 bg-gray-200 md:hidden font-semibold" id="navbar">
          <li><NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/shop" className={linkClass} onClick={() => setOpen(false)}>Shop</NavLink></li>
          <li><NavLink to="/blog" className={linkClass} onClick={() => setOpen(false)}>Blog</NavLink></li>
          <li><NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink></li>
          <li><NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>Cart</NavLink></li>
        </ul>
      )}
    </header>
  );
}
