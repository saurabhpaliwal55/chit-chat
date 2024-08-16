import React, { useEffect, useState } from "react";
import { logo } from "../constants";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from "@mui/material";
import User from "./UserAndGroupUI/User";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Users = () => {

  const [refresh,setRefresh] = useState(true);
  const [users,setUsers] = useState([]);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));
  if(!userData){
    console.log("User not authenticated");
    navigate(-1);
  }

  useEffect(()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${userData?.data?.token}`
      },
    }
     axios.get("http://localhost:4040/api/user/fetchUsers",config)
    .then((data)=>{
      setUsers(data.data)
    });
    console.log(users);
  },[refresh])

  return (
    <div className="flex-[0.7] mt-5">
      <div className="flex items-center bg-white  rounded-[20px] p-[2px]">
        <img className="h-[3rem] w-[4rem] rounded-full" src={logo} />
        <p className="ml-10 font-extrabold text-[30px] text-gray-600">
          Online Users
        </p>
        <IconButton onClick={()=>setRefresh(!refresh)}>
          <RefreshIcon className="flex flex-end"/>
        </IconButton>
      </div>
    
      <div className="bg-white rounded-[20px] px-[10px] py-[6px] mt-[15px]  flex justify-between">
        <input
          className="border-none outline-none p-[10px]"
          placeholder="Search"
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="h-[450px] p-[10px] overflow-scroll" >
        {users.map((user,index)=>{
         return <User user={user} localUserData={userData}key={index}/>
        })}
      </div>
    </div>
  );
};

export default Users;
