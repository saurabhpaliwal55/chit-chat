import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { logo } from "../constants";

const Login = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const toogleSignIn = () => {
    setIsLoginPage(!isLoginPage);
    console.log(isLoginPage);
  };
  return (
    <div className="flex bg-[#f4f5f8] h-[90vh] w-[90vw] rounded-[20px]">
      <div className="flex-[0.3] flex content-center justify-center rounded-[20px] p-[10px]">
        <img className="rounded-[20px] p-[10px]" src={logo} />
      </div>
      <div className="flex-[0.7] flex justify-center items-center flex-col gap-3  bg-white rounded-[20px] m-[20px] p-[10px] text-black font-bold">
        <p className="text-[30px]">
          {isLoginPage ? "LogIn to your Account" : "Create your Account"}
        </p>
        {!isLoginPage && (
          <TextField
            className="w-[300px]"
            id="standard-basic"
            label="Enter email"
            variant="outlined"
          />
        )}
        <TextField
          className="w-[300px]"
          id="standard-basic"
          label="Enter username"
          variant="outlined"
        />
        <TextField
          className="w-[300px]"
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          autoComplete="current-password"
        />

        <Button className="w-[100px]" variant="outlined">
          {isLoginPage ? "Log in" : "Sign Up"}
        </Button>
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
  );
};

export default Login;
