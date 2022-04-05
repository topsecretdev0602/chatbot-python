class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet = () => {
      const message = this.createChatBotMessage("Hello.");
      this.addMessageToState(message);
    };
  
    handleChatterbotMessage = (chat) => {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'message': chat })
      };
      fetch(`${process.env.REACT_APP_CHATBOT_URL}/chat`, requestOptions)
        .then(response => response.json())
        .then(data => this.addMessageToState(this.createChatBotMessage(data.message)));
    };
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  }
  
  export default ActionProvider;