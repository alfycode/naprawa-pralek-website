import React from "react";
import { MessengerChat } from "react-messenger-chat-plugin";

export default function MessengerButton() {
  return (
    <MessengerChat
      pageId='195644990828561'
      language='pl_PL'
      themeColor='#4FAAE7'
      height={24}
      autoExpand={true}
      debugMode={false}
    />
  );
}
