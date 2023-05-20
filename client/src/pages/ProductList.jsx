import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
//in product list filter and shorting the roducts
const ProductList = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({}); //select the quantity
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  console.log(filters);
  //file upload
  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", file);

  //   const response = await fetch(
  //     "/http://localhost:8005/products/addproducts",
  //     {
  //       method: "POST",
  //       body: formData,
  //     }
  //   );

  //   console.log("File uploaded successfully!");
  // };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="products_name" onChange={handleFilters}>
            {/* <Select name="color" onChange={handleFilters}></Select> */}
            <Option disables>grains Types </Option>
            <Option>whiteRice</Option>
            <Option>BrownRice</Option>
            <option>pakka-colom-rice</option>
            <Option>Sabbot massori</Option>
            <option>Pakka Mansoori Rice</option>
            <option>India Gate basmati Rice</option>
          </Select>

          {/*---types of pulses/dal---*/}
          <Select name="products_name" onChange={handleFilters}>
            <Option disables>Pulses types</Option>
            <Option>chana daal </Option>
            <Option>toor dal</Option>
            <Option>moong daal</Option>
            <Option>green pea </Option>
            <Option>rajma</Option>
          </Select>
          <Select name="products_name" onChange={handleFilters}>
            <Option disables>dry_fruits</Option>
            <Option>chewnut </Option>
            <Option>amond oil</Option>
            <Option>pista</Option>
            <Option>Eclichi</Option>
            <Option>date</Option>
          </Select>
          <Select name="quantity" onChange={handleFilters}>
            <Option disabled>Quantity</Option>
            <Option>1</Option>
            <Option>2</Option>
            <Option>3</Option>
            <Option>4</Option>
            <option>5</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />

      <Newsletter />
      <Footer />
    </Container>
  );
};
//filter,catageory ,products
export default ProductList;
