# TalentFlow
https://talentflow.us

## **Overview**
**TalentFlow** is a college-specific platform designed to help students and alumni gain deeper insights into where their peers have interned or worked. Our platform provides a transparent view of companies, complete with ratings for interview processes and work experiences. Users can see the number of active and alumni students currently employed at each company, explore detailed profiles of peers who have navigated similar career paths, and leverage AI-powered resume analysis to identify key skills that correlate with successful hires.

## **Frontend Overview**

## **Backend Overview**
The backend serves data scraped from LinkedIn profiles. The API provides multiple endpoints for accessing profile data, keywords, work experience, and education. The API is designed to be consumed by a React frontend.

## **API Endpoints**
The following API endpoints are available for the React frontend to consume:

GET /profile: Returns the full profile data (from profile_data.json).
GET /keywords: Returns a list of keywords (from keywords.txt).
GET /work-experience: Returns work experience details (part of the profile data).
GET /education: Returns education details (part of the profile data).

## **Features**
- **Company Dashboard**: View all companies where active and alumni students have interned or worked.
- **Aggregate Ratings**: Get insights on interview processes and work experiences from your peers.
- **Alumni Network**: See the number of alumni and active students currently working at a company.
- **Profile Tiles**: Explore detailed profiles of peers, including career paths, LinkedIn links, and resumes.
- **LLM-Powered Insights**: Use AI to find correlated keywords and skills from all collected resumes at a company.
- **Career Optimization**: Identify top skills and experiences that increase your chances of landing desired roles.

## **How It Works**
1. **College-Based Dashboard**: Each user has access to a dashboard customized to their college, showcasing every company that alumni and students have worked for.
2. **Company Insights**: Click on any company card to view:
   - Aggregate ratings for interview process and work experience.
   - Count of current and former students working there.
   - Detailed profiles of users containing resume, prior work experiences, and their reviews.
3. **Profile Navigation**: View profile tiles of peers who’ve worked there, including:
   - Career paths from internships to full-time roles.
   - Resumes and links to their LinkedIn profiles.
4. **AI-Powered Skill Matching**: TalentFlow leverages a language model to analyze collected resumes and identify correlated keywords that have led to successful employment at each company.

## **Tech Stack**
 - Frontend: React, TypeScript, Tailwind CSS
 - Backend: Node.js, Express
 - Database: MongoDB Atlas
 - AI Analysis: HuggingFace OS AI
 - Hosting: AWS
