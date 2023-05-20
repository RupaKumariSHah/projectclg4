import axios from "axios";

const BASE_URL = "http://localhost:8005/user/login";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjVzczF0dHNAZ21haWwuY29tIiwiaWQiOiI2NDQzYmNmOGM3NDBiNjJjZmI1NzgwNzIiLCJpYXQiOjE2ODI0MDgyMjMsImV4cCI6MTY4MjQ5NDYyM30.wtKZA1HgeJ2pxrjvVpDYQKbplG684JFKxTRpfCOdbBU";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
//  const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }, //stored the token in popstman
});
