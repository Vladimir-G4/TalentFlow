import requests
import json
import re
import nltk
from nltk.corpus import words

# Download the words corpus
nltk.download('words')

# Set your Proxycurl API Key
PROXYCURL_API_KEY = 'VzO5yX_tDuCP7eMpXs8nLQ'


# Function to get the list of programming languages from GitHub API
def fetch_programming_languages():
    url = "https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml"
    response = requests.get(url)

    # Parse the raw YAML file from GitHub to get programming languages (can be used with PyYAML if needed)
    if response.status_code == 200:
        text = response.text
        languages = re.findall(r'^[A-Za-z\-]+:', text, re.MULTILINE)
        languages = [lang.strip(':').lower() for lang in languages]
        return set(languages)
    return set()


# Get a set of valid English words from nltk
ENGLISH_WORDS = set(words.words())

# Get a set of technical terms (fetched from GitHub, can include programming languages)
TECH_WORDS = fetch_programming_languages()


# Function to check if a string is meaningful (using word list and dynamic tech terms)
def is_meaningful_string(s):
    # Regular expression to match URLs
    url_pattern = re.compile(r'http[s]?://|www\.')

    # If it's a URL, return False
    if url_pattern.match(s):
        return False

    # Filter out short strings and strings that are mostly numbers
    if len(s) < 3 or re.fullmatch(r'\d+', s):
        return False

    # Split the string into individual words
    word_list = re.findall(r'[A-Za-z]+', s)

    # Check if all words in the string are either in the English words list or dynamically fetched tech terms
    for word in word_list:
        if word.lower() not in ENGLISH_WORDS and word.lower() not in TECH_WORDS:
            return False

    return True


# Function to recursively extract all strings from JSON, excluding URLs and gibberish
def extract_strings(data):
    strings = []

    # Recursively process the data to find all meaningful strings
    if isinstance(data, dict):
        for key, value in data.items():
            strings.extend(extract_strings(value))
    elif isinstance(data, list):
        for item in data:
            strings.extend(extract_strings(item))
    elif isinstance(data, str):
        # Append only meaningful strings (exclude gibberish and links)
        if is_meaningful_string(data):
            strings.append(data)

    return strings


# Save strings to a text file
def save_strings_to_file(strings, filename="strings.txt"):
    with open(filename, 'w') as file:
        for string in strings:
            file.write(string + '\n')


# Define a function to get LinkedIn profile data
def get_profile(profile_id):
    # API endpoint for LinkedIn profile scraping
    api_endpoint = 'https://nubela.co/proxycurl/api/v2/linkedin'

    # Headers for authorization (using the API key)
    headers = {
        'Authorization': f'Bearer {PROXYCURL_API_KEY}'
    }

    # Parameters - LinkedIn profile URL you want to scrape
    params = {
        'url': f'https://www.linkedin.com/in/{profile_id}',
    }

    # Make the GET request to Proxycurl API
    response = requests.get(api_endpoint, params=params, headers=headers)

    # Return the JSON response
    return response.json()


# Example usage - replace with the actual LinkedIn profile ID
profile_data = get_profile("brianzou03")

# Print the data to console
print(profile_data)

# Save the JSON response to a file
with open('../../../Desktop/TEMP/profile_data.json', 'w') as json_file:
    json.dump(profile_data, json_file, indent=4)  # indent=4 formats the JSON for readability

# Extract all string values from the JSON response, excluding URLs and gibberish
strings = extract_strings(profile_data)

# Save the strings to 'strings.txt'
save_strings_to_file(strings)

print(f"Extracted strings have been saved to strings.txt (excluding URLs and gibberish)")
