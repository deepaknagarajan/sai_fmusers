# sreesaibaba

from flask import Flask, send_from_directory, jsonify
from flask_cors import CORS, cross_origin
from flask import request

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

@app.route('/api/addUser', methods=['POST'])
def add_users():
    """
    """
    req_data = request.get_json()
    if request.method == 'POST':
        return jsonify(db.add_user(req_data))



if __name__ == '__main__':
    app.run()
