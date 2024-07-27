import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    chatName: {
      type: String,
    },
    isGroupChat: {
      type: Boolean,
    },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timeStamp: true }
);

export const Chat = mongoose.model("Chat", chatSchema);
