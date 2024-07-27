import React from 'react'

const User = () => {
  return (
    <div className='flex items-center bg-white rounded-[20px] py-[10px] px-[5px] m-[10px] gap-4 hover:bg-[rgb(226,226,226)] active:bg-white'>
        <p className='flex justify-center items-center bg-[#d9d9d9] font-bold h-[45px] w-[45px] ml-2 p-[2px] rounded-[50%]' style={{
            gridArea:'1/1/3/2', 
            fontSize:"2rem",
            color:"white",
            justifySelf:"center",
            alignSelf:"center"
        }}>T</p>
        <p style={{
            gridArea:'1/2/2/4',
            fontWeight:"bold",
            fontSize:"25px",
            color:"rgba(0,0,0,.54)"
        }}>Test User</p>
    </div>
  )
}

export default User