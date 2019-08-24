from flask import Flask
import processer
app = Flask(__name__)


@app.route('/')
def hello_world():
    return processer.processor()

if __name__ == '__main__':
    app.run(host = '127.0.0.1', port=6000, debug=True)
