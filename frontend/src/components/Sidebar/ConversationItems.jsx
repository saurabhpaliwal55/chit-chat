import React from 'react'
import { useNavigate } from 'react-router-dom';

const ConversationItems = ({props}) => {
    const navigate = useNavigate();
  return (
    <div className='p-[5px] m-[5px] hover:bg-[rgb(226,226,226)] active:bg-white' style={{
        display:"grid",
        gridTemplateColumns:"32px auto auto",
        gridTemplateRows:"auto auto",
        columnGap:"10px",
        borderRadius:"20px",    
    }} onClick={()=>navigate("chat")}>
        <p className='flex justify-center items-center bg-[#d9d9d9] font-bold h-[45px] w-[45px] p-[2px] rounded-[50%]' style={{
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
            fontSize:"0.75rem",
        }}>{props.lastMessage}</p>
        <p style={{
            justifySelf:"flex-end",
            fontSize:"0.75rem",
            color:"rgba(0,0,0,.54)"
        }}>{props.timeStamp}</p>
    </div>
  )
}

export default ConversationItems