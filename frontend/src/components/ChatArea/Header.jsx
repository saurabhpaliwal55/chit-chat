import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from "@mui/material";


const Header = ({props}) => {
    console.log(props)
  return (
    <div className="h-[12%] m-[10px] flex justify-between bg-white rounded-[20px] ">
     <div className='p-[5px] m-[5px] ' style={{
        display:"grid",
        gridTemplateColumns:"32px auto auto",
        gridTemplateRows:"auto auto",
        columnGap:"10px",
        borderRadius:"20px"
    }}>
        <p className='flex justify-center items-center bg-[#d9d9d9] font-bold h-[32px] w-[32px] p-[2px] rounded-[50%]' style={{
            gridArea:'1/1/3/2', 
            fontSize:"2rem",
            color:"white",
            justifySelf:"center",
            alignSelf:"center"
        }}>{props.name[0]}</p>
        <p style={{
            gridArea:'1/2/2/4',
            fontWeight:"bold",
            color:"rgba(0,0,0,.54)"
        }}>{props.name}</p>
        <p style={{
            justifySelf:"flex-start",
            fontSize:"0.75rem",
            color:"rgba(0,0,0,.54)"
        }}>{props.timeStamp}</p>
    </div>
    <IconButton>
        <DeleteIcon/>
    </IconButton>
    </div>
  );
};

export default Header;
