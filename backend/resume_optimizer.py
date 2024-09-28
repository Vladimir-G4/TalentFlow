import os
import requests
from transformers import pipeline
import pdfplumber

# Set your Huggingface API key
HUGGINGFACE_API_KEY = os.getenv('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')


# Function to extract text from a PDF resume
def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()
    return text


# Function to interact with Huggingface LLaMA model for resume optimization
def optimize_resume(resume_text, keywords):
    # Initialize the Huggingface pipeline for text generation (LLaMA or GPT-style model)
    generator = pipeline("text-generation", model="huggingface/llama", api_key=HUGGINGFACE_API_KEY)

    # Prompt that asks the model to refactor the resume text based on company keywords
    prompt = (f"Here is the resume:\n{resume_text}\n\n"
              f"Please refactor this resume to optimize it for the following keywords: {', '.join(keywords)}. "
              "Make sure the refactored resume fits the company's job requirements.")

    # Use the model to generate optimized resume
    refactored_resume = generator(prompt, max_length=1000, num_return_sequences=1)[0]['generated_text']

    return refactored_resume


# Function to get company keywords from a file (like keywords.txt)
def fetch_company_keywords(file_path):
    with open(file_path, 'r') as f:
        keywords = [line.strip() for line in f.readlines()]
    return keywords


# Main function to handle the entire process
def main():
    # Example paths to the user's resume and company keywords
    resume_pdf_path = 'user_resume.pdf'  # Input your resume file path here
    keywords_file_path = 'keywords.txt'  # Input your keywords file path here

    # Extract resume text from PDF
    resume_text = extract_text_from_pdf(resume_pdf_path)

    # Fetch company-specific keywords
    company_keywords = fetch_company_keywords(keywords_file_path)

    # Optimize the resume based on company keywords
    refactored_resume = optimize_resume(resume_text, company_keywords)

    # Output the optimized resume
    print("\nOptimized Resume:\n")
    print(refactored_resume)


if __name__ == '__main__':
    main()
