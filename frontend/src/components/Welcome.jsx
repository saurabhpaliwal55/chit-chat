import React from 'react'
import { logo } from '../constants'
import { useNavigate } from 'react-router-dom';


const Welcome = () => {
  const userDate = JSON.parse(localStorage.getItem("userData"));
  console.log(userDate);
  const navigate = useNavigate();
  if(!userDate){
    console.log("user not authenticated");
    navigate("/");
  }
  return (
    <div className='p-2 w-[70%] flex flex-col justify-center items-center bg-white rounded-[20px] my-[15px]'>
        <img className='h-[500px] w-[500px] ' src={logo} alt="No image found" />
        <b>Hi,{userDate.data.name} 👋 </b>
        <p>Use chit-chat only.</p>
    </div>
  )
}

export default Welcome