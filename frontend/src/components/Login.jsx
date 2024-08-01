import React, { useState } from "react";
// import Toast from "../components/Toast.jsx"
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { logo } from "../constants";
import axios from "axios";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [data, setData] = useState({ email: "", name: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [loginStatus, setLoginStatus] = useState("");
  const [signUpStatus, setSignUpStatus] = useState("");

  const navigate = useNavigate();

  const changeHndler = (e) => {
    let { name, value } = e.target;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const toogleSignIn = () => {
    setIsLoginPage(!isLoginPage);
  };

  const logInHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(data);
      const response = await axios.post("/api/user/login", data, config);
      console.log(response);
      setLoginStatus({ msg: "Success", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log(data);
      const response = await axios.post("/api/user/register", data, config);
      console.log(response);
      setSignUpStatus({ msg: "Success", key: Math.random() });
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405) {
        setSignUpStatus({
          msg: "user with this email already exists",
          key: Math.random(),
        });

      }
      if (error.response.status === 406) {
        setSignUpStatus({
          msg: "username is already taken please take another one",
          key: Math.random(),
        });
      }
    }
    setLoading(false);
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="flex bg-[#f4f5f8] h-[90vh] w-[90vw] rounded-[20px]">
        <div className="flex-[0.3] flex content-center justify-center rounded-[20px] p-[10px]">
          <img className="rounded-[20px] p-[10px]" src={logo} />
        </div>
        <div className="flex-[0.7] flex justify-center items-center flex-col gap-3  bg-white rounded-[20px] m-[20px] p-[10px] text-black font-bold">
          <p className="text-[30px]">
            {isLoginPage ? "LogIn to your Account" : "Create your Account"}
          </p>

          {isLoginPage ? (
            <>
              <TextField
                className="w-[300px]"
                id="standard-basic"
                label="Enter username"
                variant="outlined"
                name="name"
                onChange={changeHndler}
              />
              <TextField
                className="w-[300px]"
                id="outlined-password-input"
                label="Enter Password"
                type="password"
                autoComplete="current-password"
                name="password"
                onChange={changeHndler}
              />
              <Button
                className="w-[100px]"
                variant="outlined"
                onClick={logInHandler}
              >
                Log In
              </Button>
              {/* {loginStatus ? (<Toast message={loginStatus.msg}/>):null} */}
              {loginStatus ? (toast.error(loginStatus.msg||"Eroor")):null}
            </>
          ) : (
            <>
              <TextField
                className="w-[300px]"
                id="standard-basic"
                label="Enter email"
                variant="outlined"
                name="email"
                onChange={changeHndler}
              />

              <TextField
                className="w-[300px]"
                id="standard-basic"
                label="Enter username"
                variant="outlined"
                name="name"
                onChange={changeHndler}
              />
              <TextField
                className="w-[300px]"
                id="outlined-password-input"
                label="Enter Password"
                type="password"
                autoComplete="current-password"
                name="password"
                onChange={changeHndler}
              />

              <Button
                className="w-[100px]"
                variant="outlined"
                onClick={signUpHandler}
              >
                Sign Up
              </Button>
              {/* {signUpStatus ? (<Toast message={signUpStatus.msg}/>):null} */}
              {/* {signUpStatus ? (toast.error(signUpStatus.msg)):null} */}
              
            </>
          )}

          {isLoginPage ? (
            <p>
              Don't have an Account?{" "}
              <a
                onClick={toogleSignIn}
                className="text-gray-400 cursor-pointer ml-[3px] font-bold underline"
              >
                SignUp
              </a>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <a
                onClick={toogleSignIn}
                className="text-gray-400 cursor-pointer ml-[3px] font-bold underline"
              >
                LogIn
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
