import React from "react";
import { Link } from "react-router-dom";
import Products from "../components/Products/Products"

const Home = () => {
  return <div>
    Home
    <Products/>
  <Link to={"/Products"}>Products</Link>

  </div>;
};

export default Home;
