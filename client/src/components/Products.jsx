import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]); //changes the filter it update the change the filtered products use used effect
  const [filteredProducts, setFilteredProducts] = useState([]);

  //when ever cjange the filter update the filteredProducts states
  const [imagedata, setImageData] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log("in");
        const res = await axios.get(
          cat
            ? `http://localhost:8005/products/addproducts?productcategory=pulses`
            : "http://localhost:8005/products/addproducts"
        );
        console.log(res);
        setProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getProducts(); //calling the function  getProducts
  }, [cat]); //cat is the dependency which we  add

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]); // filter catergories and short the products list

  //upload the images in react sise uing multer
  useEffect(() => {
    axios
      .post("http://localhost:8005/products/addproducts")
      .then((response) => response)
      .then((data) => {
        console.log(data);
        setImageData(data);
      });
  }, []);

  return (
    <Container>
      {popularProducts.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
