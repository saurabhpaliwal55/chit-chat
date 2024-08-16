import React from 'react'
import axios from "axios";
const User = ({user,localUserData}) => {
  const name = user.name;
  
  const handleClick = ()=>{
    console.log("Creating chat with", user.name);
    const config = {
      headers: {
        Authorization: `Bearer ${localUserData.data.token}`,
      },
    };
    axios.post(
      "http://localhost:4040/api/chat/",
      {
        userId: user._id,
      },
      config
    );
    
  }
  return (
    <div className='flex items-center bg-white rounded-[20px] py-[10px] px-[5px] m-[10px] gap-4 hover:bg-[rgb(226,226,226)] active:bg-white' onClick={handleClick}>
        <p className='flex justify-center items-center bg-[#d9d9d9] font-bold h-[45px] w-[45px] ml-2 p-[2px] rounded-[50%]' style={{
            gridArea:'1/1/3/2', 
            fontSize:"2rem",
            color:"white",
            justifySelf:"center",
            alignSelf:"center"
        }}>{name[0].toUpperCase()}</p>
        <p style={{
            gridArea:'1/2/2/4',
            fontWeight:"bold",
            fontSize:"25px",
            color:"rgba(0,0,0,.54)"
        }}>{name}</p>
    </div>
  )
}

export default User