import mongoose, { Schema } from "mongoose";

const messageSchema = mongoose.Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    reciever: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
  },
  { timeStamp: true }
);

export const Message = mongoose.model("Message", messageSchema);
