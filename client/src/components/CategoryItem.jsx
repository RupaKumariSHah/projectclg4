import { Link } from "react-router-dom";
import styled from "styled-components";
import React, { useState } from "react";
import { mobile } from "../responsive";
import axios from "axios";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  // const [file, setFile] = useState();

  // const handleFile = (e) => {
  //   setFile(e.target.value[0]);
  // };
  // const handleUpload = () => {
  //   const formdata = new FormData();
  //   formdata.append("avatar", file);
  //   console.log("inn")
  //   axios
  //     .get(
  //       "http://localhost:8005/products/getproducts?productcategory=pulses/uploads",
  //       formdata
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>

          <Button>SHOPS NOW</Button>

        </Info>
      </Link>
    </Container>
    //-------------------
  );
};
//how gone acategories name fetch data from our API
export default CategoryItem;
