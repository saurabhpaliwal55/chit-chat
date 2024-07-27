import React from 'react'

const MessageSelf = () => {
    var props2 = {name:"You",message:"This is a sample msg."}
  return (
    <div className='flex justify-end mx-[10px] my-[10px]'>
        <div className='bg-green-200 rounded-[20px] p-[8px]'>
            <p className='text-[14px]'>{props2.message}</p>
            <p className='text-[12px] text-end'>12:00am</p>
        </div>
    </div>
  )
}

export default MessageSelf