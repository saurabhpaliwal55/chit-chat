import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MainContainer = () => {

  return (
    <div className='flex bg-[#f4f5f8] h-[90vh] w-[90vw] rounded-[20px] p-4' style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
      <ToastContainer/>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default MainContainer