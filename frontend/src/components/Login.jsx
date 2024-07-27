import React from "react";
import { Button, TextField } from "@mui/material";
import { logo } from "../constants";

const Login = () => {
  return (
    <div className="flex bg-[#f4f5f8] h-[90vh] w-[90vw] rounded-[20px]">
      <div className="flex-[0.3] flex content-center justify-center rounded-[20px] p-[10px]">
        <img className="rounded-[20px] p-[10px]" src={logo} />
      </div>
      <div className="flex-[0.7] flex justify-center items-center flex-col gap-3  bg-white rounded-[20px] m-[20px] p-[10px] text-black font-bold">
        <p className="text-[30px]">LogIn to your account</p>
        <TextField className="w-[350px]"
          id="standard-basic"
          label="Enter username"
          variant="outlined"
        />
        <TextField className="w-[350px]"
          id="outlined-password-input"
          label="Enter Password"
          type="password"
          autoComplete="current-password"
        />
        <Button className="w-[100px]" variant="outlined">LogIn</Button>
      </div>
    </div>
  );
};

export default Login;
