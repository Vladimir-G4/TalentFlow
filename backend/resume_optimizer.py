import os
import requests
from flask.cli import load_dotenv
from transformers import pipeline
import pdfplumber
from PyPDF2 import PdfReader, PdfWriter
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import letter
from io import BytesIO
import re


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

HUGGINGFACE_API_KEY = os.getenv('HUGGINGFACE_API_KEY')


# Function to extract text from a PDF resume
def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        text = ''
        for page in pdf.pages:
            text += page.extract_text()
    return text


# Function to optimize resume text using Huggingface LLaMA
def optimize_resume(resume_text, keywords):
    # Initialize the Huggingface pipeline for text generation (LLaMA or GPT-style model)
    generator = pipeline("text-generation", model="huggingface/llama", api_key=HUGGINGFACE_API_KEY)

    # Prompt that asks the model to refactor the resume text based on company keywords
    prompt = (f"Here is the resume:\n{resume_text}\n\n"
              f"Please refactor this resume to optimize it for the following keywords: {', '.join(keywords)}. "
              "Make sure the refactored resume fits the company's job requirements and industry standards.")

    # Use the model to generate optimized resume
    refactored_resume = generator(prompt, max_length=1000, num_return_sequences=1)[0]['generated_text']

    return refactored_resume


# Function to write updated text back into the PDF, keeping formatting intact
def update_pdf_with_text(input_pdf_path, output_pdf_path, updated_text):
    # Create a PDF writer and reader
    pdf_reader = PdfReader(input_pdf_path)
    pdf_writer = PdfWriter()

    # Create a buffer to hold the canvas
    packet = BytesIO()
    can = canvas.Canvas(packet, pagesize=letter)

    # Add the updated text to the canvas
    lines = updated_text.split("\n")
    y = 750  # Y-coordinate for text placement
    for line in lines:
        can.drawString(100, y, line)
        y -= 15  # Adjust line height as per requirement

    can.save()

    # Move the buffer to the beginning
    packet.seek(0)

    # Add the original pages to the writer and overlay the updated text
    for page_num in range(len(pdf_reader.pages)):
        page = pdf_reader.pages[page_num]
        if page_num == 0:  # Only overlay text on the first page as an example
            page.merge_page(PdfReader(packet).pages[0])
        pdf_writer.add_page(page)

    # Write the updated PDF to the output path
    with open(output_pdf_path, 'wb') as output_pdf:
        pdf_writer.write(output_pdf)


# Function to get company keywords from a file (like keywords.txt)
def fetch_company_keywords(file_path):
    with open(file_path, 'r') as f:
        keywords = [line.strip() for line in f.readlines()]
    return keywords


# Main function to handle the entire process
def main():
    # Example paths to the user's resume and company keywords
    resume_pdf_path = 'input-data/jakes-resume.pdf'  # Path to the uploaded resume
    keywords_file_path = 'output-data/keywords.txt'  # Path to the company's keywords

    # Extract resume text from the PDF
    resume_text = extract_text_from_pdf(resume_pdf_path)

    # Fetch company-specific keywords
    company_keywords = fetch_company_keywords(keywords_file_path)

    # Optimize the resume based on company keywords
    refactored_resume = optimize_resume(resume_text, company_keywords)

    # Output the optimized resume to a new PDF
    updated_pdf_path = 'optimized_resume.pdf'
    update_pdf_with_text(resume_pdf_path, updated_pdf_path, refactored_resume)

    print(f"\nOptimized resume saved to {updated_pdf_path}")


if __name__ == '__main__':
    main()
