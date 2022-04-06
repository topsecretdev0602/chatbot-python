class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      this.actionProvider.handleChatterbotMessage(message);      
    }
  }
  
  export default MessageParser;