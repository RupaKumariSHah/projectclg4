import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Product from "../components/Products";
import Products from "../components/Product";
import Slider from "../components/Slider";
import Topbar from "../Admin/component1/Topbar";
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Topbar />
      <Footer />
    </div>
  );
};

export default Home;
