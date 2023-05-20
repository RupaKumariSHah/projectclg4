import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user, "user+++++");
    const res = await axios.post("http://localhost:8005/user/login", user);
    console.log(res, "res+++");
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

//export const login = async (dispatch,user)=>{}
