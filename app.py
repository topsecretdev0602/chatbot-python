from flask import Flask, request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)

chat_bot = ChatBot('ChatBot', storage_adapter='chatterbot.storage.SQLStorageAdapter')
trainer = ChatterBotCorpusTrainer(chat_bot)
trainer.train('chatterbot.corpus.english')


@app.route('/')
def index():
    pass


@app.route('/chat', methods=['POST'])
def chat():
    return str(chat_bot.get_response(request.json['message']))
    
    
if __name__ == '__main__':
   app.run(debug=True)