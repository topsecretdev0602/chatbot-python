import React, { useState } from "react";

import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css'

import config from "./chatbot/config";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";

import './App.css';

function App() {
  const [showBot, toggleBot] = useState(false);

  return (
    <>
      <div className="full-screen">
        <div className="instruction-box">
          <h1>Chatbot Demo</h1>
          <div className="instructions">
            <p>
              This demo uses the <a href="https://chatterbot.readthedocs.io/en/stable/">Chatterbot</a> python library to provide the chat responses and 
              the <a href="https://fredrikoseberg.github.io/react-chatbot-kit-docs/">React Chatbot Kit</a> package for the chatbot frontend
            </p>
            <h3>Chatting with the chatbot</h3>
            <p>
              To interact with the chatbot: open the chatbot dialog by clicking on the icon in the lower right corner. Submit your messages and the 
              chatbot will respond. 
            </p>
            <h3>How chatbots work</h3>
            <p>
              Chatbots are "trained" using large amouts of sample chat interactions called corpuses. Chatbots use these examples of chat to try to find 
              the correct response to the chat text the user submits to them. This is why the response can some times seem very human like and other 
              times not make any sense. It is all dependent upon the chatbot being trained with conversations similar to the one you are having with it.
              The chatbot in this demo uses a set of premade corpuses that comes with the Chatterbot library that include basic conversation and spacific 
              areas such as food, history, movies, science and sports. This set of corpus can be extended for specific use cases by creating new corpus 
              for that domain.
            </p>
          </div>
        </div> 
      </div>
      {showBot && (
        <div className="chatbot-container">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          /> 
        </div>
      )}
      <button className="chatbot-button" onClick={() => toggleBot((prev) => !prev)}>
        <svg viewBox="0 0 640 550" className="chatbot-button-icon">
          <path d="M192,408h64V360H192ZM576,192H544a95.99975,95.99975,0,0,0-96-96H344V24a24,24,0,0,0-48,0V96H192a95.99975,95.99975,0,0,0-96,96H64a47.99987,47.99987,0,0,0-48,48V368a47.99987,47.99987,0,0,0,48,48H96a95.99975,95.99975,0,0,0,96,96H448a95.99975,95.99975,0,0,0,96-96h32a47.99987,47.99987,0,0,0,48-48V240A47.99987,47.99987,0,0,0,576,192ZM96,368H64V240H96Zm400,48a48.14061,48.14061,0,0,1-48,48H192a48.14061,48.14061,0,0,1-48-48V192a47.99987,47.99987,0,0,1,48-48H448a47.99987,47.99987,0,0,1,48,48Zm80-48H544V240h32ZM240,208a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,240,208Zm160,0a48,48,0,1,0,48,48A47.99612,47.99612,0,0,0,400,208ZM384,408h64V360H384Zm-96,0h64V360H288Z"></path>
        </svg>
      </button>
    </>
  );
}

export default App;
