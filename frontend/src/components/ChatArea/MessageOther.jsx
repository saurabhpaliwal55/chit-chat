import React from 'react'

const MessageOther = () => {
    var props1 = {name:"Saurabh Paliwal", message:"This is a sample message"}
  return (
    <div className='flex mx-[10px] my-[20px] '>
        <div className='m-[10px] '>
            <p className='flex justify-center items-center bg-[#d9d9d9] font-bold h-[50px] w-[50px] p-[2px] rounded-[50%]' style={{
            gridArea:'1/1/3/2', 
            fontSize:"2rem",
            color:"white",
            justifySelf:"center",
            alignSelf:"center"
        }}>{props1.name[0]}</p>
        </div>
        <div className='bg-[#d9d9d9] rounded-[20px] p-[5px]'>
            <p className='font-bold text-sm text-gray-700'>{props1.name}</p>
            <p className='text-[14px] text-gray-700'>{props1.message}</p>
            <p className='text-[10px] text-end text-gray-700'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageOther