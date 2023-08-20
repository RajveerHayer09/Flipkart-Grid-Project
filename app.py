from flask import Flask,request
from flask_cors import CORS
from flask import jsonify
import openai
import requests
import os

app = Flask(__name__)
CORS(app)

# Load the OpenAI API key from an environment variable
keyy = "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"
openai.api_key = keyy

url = "https://api.openai.com/v1/chat/completions"

@app.route('/api/keywords', methods=['GET'])
def get_keywords():
    response = {
    }
    return jsonify(response)

@app.route('/api/items', methods=['GET'])
def get_items():
    response = {
    }
    return jsonify(response)

@app.route('/api/photos', methods=['GET'])
def get_photos():
    gendata = {
        'data':[]
    }

    value = request.args.get('query')
    print(value)
    res = openai.Image.create(
            prompt=value,
            n=10,
            size="512x512"
        )
    
    print(res['data'])
    gendata['data'] = res['data']
    return gendata


@app.route('/')
def index():
    headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {keyy}"
    }

if __name__ == '__main__':
    app.run(debug=True)


# openai.Model.list()