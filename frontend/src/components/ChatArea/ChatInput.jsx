import React from 'react'
import { IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ChatInput = () => {
  return (
    <div className='h-[8%] bg-white m-[10px] p-[10px] flex justify-between rounded-[20px]'>
      <input className="border-none outline-none p-[4px]" placeholder="Type a Message"/>
      <IconButton>
        <SendIcon/>
      </IconButton>
    </div>
  )
}

export default ChatInput