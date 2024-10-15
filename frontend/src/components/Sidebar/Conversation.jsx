import React, { useEffect, useState } from "react";
import ConversationItems from "./ConversationItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {refreshSidebarFun} from "../../utils/refreshSidebar.js"


const Conversation = () => {
  const [conversation, setConversation] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const refresh = useSelector((state) => state.refreshKey);
  const [refresh,setRefresh] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (!userData) {
    console.log("User not Authenticated");
    navigate("/");
  }
  
  const user = userData.data;
  
  useEffect(()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios.get("http://localhost:4040/api/chat/",config)
    .then((response)=>{
      // console.log(response.data);
      setConversation(response.data);
      
    })
   },[refresh])

  console.log(conversation);
  
  
  return (
  
    <div className="bg-white rounded-[20px] px-[10px] py-[4px] m-[10px] flex-1 ">
      {conversation.map((conversation)=>{
        return <ConversationItems props={conversation} key={conversation.name} />
      })}
    </div>
  );
};

export default Conversation;
