import React from 'react'
import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';

const CreateGroup = () => {
  return (
    <div className='flex flex-[0.7] self-center justify-end bg-white px-[20px] py-[10px]  rounded-[20px] '>
        <input className="w-full~ border-none outline-none" type="text" placeholder='Enter group name' />
        <IconButton>
            <DoneOutlineRoundedIcon/>
        </IconButton>
    </div>
  )
}

export default CreateGroup