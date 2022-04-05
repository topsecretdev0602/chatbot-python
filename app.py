from flask import Flask, request
from flask_cors import CORS, cross_origin

from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)
CORS(app, resources={ r'/*': {'origins':'*'} })
app.config['CORS_HEADERS'] = 'Content-Type'

chat_bot = ChatBot('ChatBot', storage_adapter='chatterbot.storage.SQLStorageAdapter')
trainer = ChatterBotCorpusTrainer(chat_bot)
trainer.train('chatterbot.corpus.english')


@app.route('/')
@cross_origin()
def index():
    pass


@app.route('/chat', methods=['POST'])
@cross_origin()
def chat():
    message = str(chat_bot.get_response(request.json['message']))
    return {'message': message}
    
    
    
if __name__ == '__main__':
   app.run(debug=True)