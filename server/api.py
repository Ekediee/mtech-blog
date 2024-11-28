from flask import Flask, request, jsonify
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin
import os


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/api/v1/*": {"origins": "*"}})
# CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))

# Database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Init db & marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)

posts = [
    {
        'author': 'John Doe',
        'title': 'Cryptoqueen Ruja Ignatova may have changed her appearance, new documentary suggests',
        'body': 'This is my first blog post.',
        'post_image': '',
        'author_image': '',
        'flag': 'hero',
        'created_at': 'November 23, 2024',
    },
    {
        'author': 'Oyinloye Adebayo',
        'title': 'Africa’s embedded finance market projected to grow to $39.8 billion by 2029 – report',
        'body': 'I love Flask!',
        'post_image': '',
        'author_image': '',
        'flag': 'trending',
        'created_at': 'November 24, 2024',
    },
    {
        'author': 'Onatoyinbo Gift',
        'title': 'Free speech: are Bluesky and Truth Social the needed alternatives to X?',
        'body': 'I love Flask!',
        'post_image': '',
        'author_image': '',
        'flag': 'trending',
        'created_at': 'November 24, 2024',
    },
    {
        'author': 'Daniel Feranmi',
        'title': 'Stereotypes to virality: How Charity Ekezie’s TikTok content challenges global misconceptions about Africa',
        'body': 'I love Flask!',
        'post_image': '',
        'author_image': '',
        'flag': 'trending',
        'created_at': 'November 24, 2024',
    },
    {
        'author': 'Oyinloye Adebayo',
        'title': 'Are Nigeria’s unicorns truly billion-dollar giants amid naira’s 82% decline?',
        'body': 'I love Flask!',
        'post_image': '',
        'author_image': '',
        'flag': 'trending',
        'created_at': 'November 24, 2024',
    }
]

@app.route('/api/v1/posts', methods=['GET'])
# @cross_origin(origin='http://172.20.10.4',headers=['Content- Type','Authorization'])
def index():
    return jsonify(posts)


if __name__ == '__main__':
    app.run(debug=True)