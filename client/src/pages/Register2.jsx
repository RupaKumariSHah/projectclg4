import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmpassword] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      lastname,
      email,

      password,
      confirm_password,
    };
    console.log(userData);
    const response = await axios.post(
      "http://localhost:8005/user/add",
      userData
    );
    const data = await response.data;
    console.log(data);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <table border="2" align="center" cellPadding={4} cellSpacing={4}>
          <thead>
            <tr align="center">
              <td colSpan="2">Registration</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>lastname</td>
              <td>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>username</td>
              <td>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>password</td>
              <td>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <td>Confirm_password</td>
              <td>
                <input
                  type="password"
                  value={confirm_password}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </td>
            </tr>
            <tr align="center">
              <td colSpan="2">
                <button onClick={submitHandler}>Sign Up</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Signup;
