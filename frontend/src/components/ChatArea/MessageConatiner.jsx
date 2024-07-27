import React from 'react'
import MessageOther from './MessageOther'
import MessageSelf from './MessageSelf'

const MessageConatiner = () => {
  return (
    <div className='bg-white h-[80%] m-[10px] p-[10px] overflow-scroll  rounded-[20px]'>
      <MessageOther/>
      <MessageSelf/>
      <MessageOther/>
      <MessageOther/>
      <MessageSelf/>
      <MessageSelf/>
      <MessageSelf/>
      <MessageOther/>
      <MessageOther/>


    </div>
  )
}

export default MessageConatiner