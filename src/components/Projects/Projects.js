import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pro7 from "../../Assets/Projects/pro7.jpeg";
import pro4 from "../../Assets/Projects/pro4.jpeg";
import pro5 from "../../Assets/Projects/pro5.jpeg";
import pro6 from "../../Assets/Projects/pro6.jpeg";
import pro1 from "../../Assets/Projects/pro1.jpeg";
import pro3 from "../../Assets/Projects/pro3.jpeg";
import pro2 from "../../Assets/Projects/pro2.jpeg";
import pro8 from "../../Assets/Projects/pro8.jpeg";
import pro9 from "../../Assets/Projects/pro9.jpeg";
import pro10 from "../../Assets/Projects/pro10.jpeg";
import pro11 from "../../Assets/Projects/pro11.jpeg";
import pro12 from "../../Assets/Projects/pro12.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro1}
              isBlog={false}
              title="Nexity Realestate Website"
              description="The Nexity website (Dubai-based project) is built using a modern React‑based technology stack designed for performance, scalability, and a superior user experience.

 
React.js – Core framework for building fast and responsive UI

CSS / Tailwind CSS – Styling for clean and responsive design
WhatsApp / Chatbot – Integrated AI-powered chatbot for instant customer support

"
             
              demoLink="https://nexityrealestate.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro2}
              isBlog={false}
              title="Cn-aparel Textile Website"
              description="At CN-Apparels, we are committed to fostering sustainable and efficient trade by leveraging an extensive, well-established supplier network.
              Tech Stack: Next.js – Modern React framework enabling server-side rendering, SEO optimization & faster page loads

CSS / Tailwind CSS – Styling for clean and responsive design

React Router / Dynamic Routing – Efficient navigation and SPA behaviour
Chatbot – Integrated AI-powered chatbot for instant customer support"
             
              demoLink="https://www.cn-apparels.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro6}
              isBlog={false}
              title="Walkella Footwear"
              description="Walk with Elegance, Wear Walkella.
              Tech Stack: Next.js – Modern React framework enabling server-side rendering, SEO optimization & faster page loads

CSS / Tailwind CSS – Styling for clean and responsive design

React Router / Dynamic Routing – Efficient navigation and SPA behaviour"
              
              demoLink="https://stupendous-crostata-f051fb.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro7}
              isBlog={false}
              title="Across America Mortgage"
              description="Completely employee-owned, we’re driven with a passion for always improving the mortgage process by finding the right types of loans, with rates that work for you.
              Next.js – Modern React framework enabling server-side rendering, SEO optimization & faster page loads

CSS / Tailwind CSS – Styling for clean and responsive design

React Router / Dynamic Routing – Efficient navigation and SPA behaviour

Axios / Fetch API – Data fetching and API integration"
             
              demoLink="https://benevolent-crostata-aa5596.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro3}
              isBlog={false}
              title="AI Blog Website"
              description="This is a React-based AI-powered blog platform where users can generate plagiarism-free blog posts on any topic within a minute. The system leverages Generative AI and LLM APIs to produce content instantly.
              Frontend: React.js, Next.js (for responsive and fast UI)

Backend: Node.js / Python (Flask)

AI Integration: OpenAI / Gemini API, Generative AI models

Additional Tools: REST APIs for communication between frontend and AI backend"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://aesthetic-fairy-e85e3d.netlify.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro4}
              isBlog={false}
              title="Tour Website"
              description="I designed and developed a modern and interactive tour website using React, showcasing a seamless and engaging experience for users exploring travel destinations. This project was aimed at providing users with a visually appealing platform to discover and plan their dream vacations."
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://6568ac21b35347198cf3bccd--superlative-eclair-06c320.netlify.app/"    
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro8}
              isBlog={false}
              title="Barbecue Food Website"
              description="Food Website is a showcase of my web development skills, where I transformed creative ideas into a fully functional and visually appealing website. Through meticulous design, HTML, CSS, and JavaScript, I crafted an interactive platform that reflects my commitment to delivering foods"
             
              demoLink="https://areebakhan44.github.io/Food_Demo-/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro5}
              isBlog={false}
              title="Food Website Grillie"
              description="Food Website is a showcase of my web development skills, where I transformed creative ideas into a fully functional and visually appealing website. Through meticulous design using Rect js tailwind css  I crafted an interactive platform that reflects my commitment to delivering foods"
       
              demoLink="https://rad-buttercream-85eb73.netlify.app/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro9}
              isBlog={false}
              title="Resume builder Website"
              description="A simple yet powerful Resume Builder Web Application that allows users to effortlessly create, customize, preview, and download professional resumes. Designed for usability and speed, this tool helps users generate polished resumes without needing advanced design skills.
              Frontend: HTML, CSS, JavaScript, React

Backend : Node.js + Express

Database : MongoDB, LocalStorage

PDF Generation : jsPDF, HTML2Canvas, HTML2PDF"
             
              demoLink="https://frolicking-dragon-e41b87.netlify.app/"    
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro10}
              isBlog={false}
              title="AI Product Description Generator"
              description="Food Website is a showcase of my web development skills, where I transformed creative ideas into a fully functional and visually appealing website. Through meticulous design, HTML, CSS, and JavaScript, I crafted an interactive platform that reflects my commitment to delivering foods"
              ghLink="https://github.com/AreebaKhan44/product-generation" 
              demoLink="product generation : https://appuct-generation-hg64afpdmwjln5urdjei4x.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro11}
              isBlog={false}
              title="Resume Analyzer Assistant"
              description="AI Resume Analyzer Assistant – An AI-powered tool that analyzes resumes to extract key skills, experiences, and recommendations. It highlights strengths, suggests improvements, and helps job seekers optimize their CVs for recruiters and ATS systems. Built with Open AI Key and NLP technique, it automates resume review and feedback."
              ghLink="https://github.com/AreebaKhan44/ResumeAnalyzer-Assistant"
              demoLink="https://resumeanalyzer-assistant-mnswjzvkviwgf4zfdornsd.streamlit.app/"    
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pro12}
              isBlog={false}
              title="AI Document Assistant"
              description="An AI-driven assistant that helps users read, summarize, and generate content from documents instantly. It supports drafting reports, summarizing contracts, and extracting key insights from PDFs or text files. Powered by LLM models, it streamlines document handling for professionals."
             
              demoLink="" 
               ghLink="https://github.com/AreebaKhan44/AI-Docume-Assistant"   
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
