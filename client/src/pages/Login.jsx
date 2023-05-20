import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { Link } from "react-router-dom"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
   // url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")

    url("https://www.pexels.com/photo/photo-of-rice-on-wooden-spoon-4110260/");
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: teal;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user); //loading the data when user fetching the data

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(username, password, "++++++");
    login(dispatch, { username, password });
    const response = await axios.post("http://localhost:8005/user/login", {
      username,
      password,
    });
    const data = await response.data;
    console.log("values", data);
    if (data.status === 200) {
      toast.success("Login Successfully");
      localStorage.setItem("token", data.token);
    } else {
      toast.error("Invalid user");
    }
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form action="" onSubmit={handleClick}>
          <Input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/** <Button onClick={handleClick} disabled={isFetching}>*/}
          <Button onClick={handleClick} disabled={false}>
            LOGIN
          </Button>
          <ToastContainer />
          {/*{error && <Error>Something went wrong...</Error>}*/}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href="/register">CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;

// import { useState } from "react";
// import styled from "styled-components";
// import { login } from "../redux/apiCalls";
// import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// //import { Link } from "react-router-dom";
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")

//     url("https://www.pexels.com/photo/photo-of-rice-on-wooden-spoon-4110260/");
//     center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Error = styled.span`
//   color: red;
// `;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   //   const [values, setValues] = useState({
//   //     email: "",
//   //     password: "",
//   //   });
//   const [errors, setErrors] = useState({});

//   //   const handleinput = (event) => {
//   // setValues((prev) => ({
//   //   ...prev,
//   //   [event.target.name]: [event.target.value],
//   // }));
//   //   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // setErrors(validation(values));
//     console.log(username, password);
//     //console.log("values", values);
//     const response = await axios.post("http://localhost:8005/user/login", {
//       username,
//       password,
//     });
//     console.log("values", response);
//     const data = await response.data;
//     if (data.message === "Login Successfully") {
//       toast.success("Login Successfully");
//       localStorage.setItem("token", data.token);
//     } else {
//       toast.error("Invalid user");
//     }
//   };
//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25 ">
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               {" "}
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               //   onChange={handleinput}
//               onChange={(e) => setUsername(e.target.value)}
//               name="email"
//               className="form-control rounded-0"
//             />
//             {errors.email && (
//               <span className="text-danger">{errors.email}</span>
//             )}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               //   onChange={handleinput}
//               onChange={(e) => setPassword(e.target.value)}
//               name="password"
//               className="form-control rounded-0"
//             />
//           </div>

//           <button type=" submit" className="btn btn-success w-100 ">
//             Login
//           </button>
//           <p>You are agree to our term our polices</p>

//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-white rounded 0 text-decoration-none "
//           >
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useState } from "react";
// import styled from "styled-components";
// import { login } from "../redux/apiCalls";
// import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
