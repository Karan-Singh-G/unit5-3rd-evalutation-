import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Home from "../../pages/Home";

// use react-router Link or NavLink


const Navbar = () => {
  const {count}=useContext(CartContext);
  return (
    <div data-cy="navbar">
      
      <Link data-cy="navbar-home-link" to={"/"}>Home</Link>
      {"                         "}
      <span data-cy="navbar-cart-items-count">Cart:{count}</span>
      {"                                             "}
      <button data-cy="navbar-login-logout-button">Login</button>

      <Home/>
    </div>
  );
};

export default Navbar;
