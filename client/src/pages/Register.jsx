import styled from "styled-components";
import { mobile } from "../responsive";
//import React, { Component } from "react";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { useHistory } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/id/671580278/photo/varieties-of-grains-seeds-and-raw-quino.jpg?s=1024x1024&w=is&k=20&c=XLF_Ixf77t4SDuszeZwKDmNTRRvLIIa6rzbxQ7VWlSg=")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

// export default class Register extends Component{
//   constructor(props){

//   }
//  }

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState();

  const [data, setData] = useState();

  const handleSubmit = async (event) => {
    //event.preventDefault();
    const userData = {
      name,
      username,
      lastName,
      email,
      password,
      confirm_password,
    };
    if (password !== confirm_password) {
      toast.warning("Password and confirm password must be same");
      return;
    }
    console.log(userData, "userdata");
    const response = await axios
      .post("http://localhost:8005/user/add", userData)
      .then((res) => {
        setData(res.data);
        console.log("THEN", res.data);
        if (res.data.status === 200) {
          toast("Succesfully to register", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          history.push("/");
        } else if (res.data.status === 400) {
          toast("UnsuccessFully to register");
        }
      });
    const data = await response;
    console.log(data);
    if (data?.status === 400) {
      alert(data.message);
      //setError(data.message);
    }
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>

        <Input
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="last name"
          type="text"
          values={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          placeholder="username"
          type="text"
          values={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          placeholder="email"
          type="text"
          values={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="password"
          type="passwprd"
          values={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="confirm password"
          type="password"
          values={confirm_password}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>

        <Button
          onClick={(e) => {
            handleSubmit();
          }}
          className="btn"
        >
          SIGNUP
        </Button>
      </Wrapper>
    </Container>
  );
};
export default Register;
