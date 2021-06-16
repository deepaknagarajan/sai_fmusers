# sreesaibaba

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS, cross_origin
import pymongo

from db import Db



app = Flask(__name__)
CORS(app)

db = Db()


@app.route("/")
def sai():
    return "sai sai sai"

@app.route('/api/viewFM')
def view_fm_users():
    """
    """
    return db.view_fm_users()

if __name__ == '__main__':
    app.run()
