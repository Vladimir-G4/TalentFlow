import os
import requests
import json
import re
from collections import Counter


def load_env():
    with open('.env') as f:
        for line in f:
            # Ignore empty lines and comments
            if line.strip() and not line.startswith('#'):
                # Split the key and value
                key, value = line.strip().split('=', 1)
                os.environ[key] = value


# Call this function to load the variables
load_env()

# Now you can use the environment variables
PROXYCURL_API_KEY = os.getenv('PROXYCURL_API_KEY')

# Check if the API key is loaded correctly
if not PROXYCURL_API_KEY:
    raise ValueError("PROXYCURL_API_KEY not found. Please check your .env file.")

# Common stop words to exclude from keywords (can be extended or replaced with an external library like NLTK)
STOP_WORDS = set([
    "the", "is", "at", "which", "on", "and", "a", "an", "in", "to", "for", "with", "by", "it", "this", "that", "of",
    "or", "as", "be", "i", "my", "m", "have", "can"
])

# Define a list of domain-specific keywords for computer science, jobs, and education
DOMAIN_SPECIFIC_TERMS = set([
    "ai", "machine learning", "data", "python", "javascript", "devops", "api", "software", "engineer", "developer",
    "programming", "computer", "science", "technology", "framework", "lms", "cloud", "development", "sql", "mysql",
    "selenium", "web", "scraper", "project", "engineering", "software engineer", "intern", "internship", "student",
    "university", "college", "education", "training", "mentor", "resume", "internship", "programming", "database",
    "dashboard", "tech", "developer", "programmer", "startup", "leadership", "cybersecurity", "machine learning",
    "artificial intelligence", "data science", "api", "computer science", "jobs", "job", "career", "experience",
    "operations", "financial", "hr", "investment", "stocks", "scholarship", "scholar", "academic", "research",
    "machine",
    "merit", "swe", "cs", "tandon", "software", "startup"
])


# Function to get LinkedIn profile data
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


# Function to recursively extract all strings from JSON, excluding URLs
def extract_strings(data):
    strings = []

    # Regular expression to match URLs
    url_pattern = re.compile(r'http[s]?://|www\.')

    # Recursively process the data to find all strings
    if isinstance(data, dict):
        for key, value in data.items():
            strings.extend(extract_strings(value))
    elif isinstance(data, list):
        for item in data:
            strings.extend(extract_strings(item))
    elif isinstance(data, str):
        # Exclude strings that match URL pattern
        if not url_pattern.match(data):
            strings.append(data)

    return strings


# Function to tokenize text into words and filter out stop words
def tokenize_and_filter(text):
    # Convert to lowercase and use a regular expression to extract words only
    words = re.findall(r'\b\w+\b', text.lower())
    # Filter out stop words
    return [word for word in words if word not in STOP_WORDS]


# Function to find keywords (words that appear multiple times) and filter by domain-specific terms
def extract_keywords(strings):
    # Flatten the list of strings into a single block of text
    combined_text = ' '.join(strings)

    # Tokenize the text and filter out stop words
    words = tokenize_and_filter(combined_text)

    # Count the frequency of each word
    word_count = Counter(words)

    # Filter by frequency (words appearing more than once) and domain-specific terms
    keywords = [word for word, count in word_count.items() if count > 1 and word in DOMAIN_SPECIFIC_TERMS]

    return keywords


# Save strings to a text file
def save_strings_to_file(strings, filename="output-data/strings.txt"):
    with open(filename, 'w') as file:
        for string in strings:
            file.write(string + '\n')


# Save keywords to a file
def save_keywords_to_file(keywords, filename="output-data/keywords.txt"):
    with open(filename, 'w') as file:
        for keyword in keywords:
            file.write(keyword + '\n')


# Example usage - replace with the actual LinkedIn profile ID
profile_data = get_profile("vladimir-gutierrez")

# Print the data to console
print(profile_data)

# Save the JSON response to a file
with open('output-data/profile_data.json', 'w') as json_file:
    json.dump(profile_data, json_file, indent=4)  # indent=4 formats the JSON for readability

# Extract all string values from the JSON response, excluding only URLs
strings = extract_strings(profile_data)

# Save the strings to 'strings.txt'
save_strings_to_file(strings)

# Extract keywords (words that appear multiple times) from the strings, filtered by domain-specific terms
keywords = extract_keywords(strings)

# Save the keywords to 'keywords.txt'
save_keywords_to_file(keywords)

print(
    f"Extracted strings have been saved to strings.txt and keywords saved to keywords.txt (filtered by domain-specific terms).")
