import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: "Chatterbot",
    initialMessages: [
      createChatBotMessage(`Hello. I am a chatbor`, {}),
    ],
  };
  
  export default config;