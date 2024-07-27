import React, { useState } from "react";
import ConversationItems from "./ConversationItems";


const Conversation = () => {
  const [conversation, setConversation] = useState([
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
        name: "Test#2",
        lastMessage: "Last Message #2",
        timeStamp: "today",
    },
    {
        name: "Test#3",
        lastMessage: "Last Message #3",
        timeStamp: "today",
    },
  ]);
  
  return (
    <div className="bg-white rounded-[20px] px-[10px] py-[4px] m-[10px] flex-1 ">
      {conversation.map((conversation)=>{
        return <ConversationItems props={conversation} key={conversation.name} />
      })}
    </div>
  );
};

export default Conversation;
