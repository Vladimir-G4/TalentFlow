from flask import Flask, jsonify
import json

app = Flask(__name__)

# Load the profile data (profile_data.json)
with open('profile_data.json') as f:
    profile_data = json.load(f)

# Load the keywords (keywords.txt)
with open('keywords.txt') as f:
    keywords = [line.strip() for line in f.readlines()]


# Route to get the full profile data
@app.route('/profile', methods=['GET'])
def get_profile():
    return jsonify(profile_data)


# Route to get the keywords
@app.route('/keywords', methods=['GET'])
def get_keywords():
    return jsonify({"keywords": keywords})


# Route to get the work experience
@app.route('/work-experience', methods=['GET'])
def get_work_experience():
    # Assuming the work experience is stored in the 'experience' key of profile_data
    work_experience = profile_data.get('experience', [])
    return jsonify({"work_experience": work_experience})


# Route to get the education details
@app.route('/education', methods=['GET'])
def get_education():
    # Assuming the education is stored in the 'education' key of profile_data
    education = profile_data.get('education', [])
    return jsonify({"education": education})


# Run the app
if __name__ == '__main__':
    app.run(debug=True)
