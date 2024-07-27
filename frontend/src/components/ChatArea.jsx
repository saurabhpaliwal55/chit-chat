import React, { useState } from "react";
import Header from "./ChatArea/Header";
import MessageConatiner from "./ChatArea/MessageConatiner";
import ChatInput from "./ChatArea/ChatInput";

const ChatArea = () => {
  const [conversation, setConversation] = useState(
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
  );
  return (
    <div className="p-2 flex flex-col flex-[0.7]">
      <Header props={conversation} />
      <MessageConatiner />
      <ChatInput />
    </div>
  );
};

export default ChatArea;
