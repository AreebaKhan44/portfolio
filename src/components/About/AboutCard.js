import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Areeba Naz Khan </span>
            from <span className="purple"> Pakistan Karachi.</span>
            <br />
           I am a Full Stack Developer specializing in building modern and scalable web applications using React.js, Next.js, Node.js, and Python. I focus on developing end-to-end solutions, from responsive frontend interfaces to robust backend systems and APIs.
           
           Alongside web development, I also work with Artificial Intelligence technologies, including Generative AI, RAG, and LLM-based chatbot systems. I have experience building AI chatbots, automation tools, and intelligent applications using Machine Learning, Deep Learning, and Nlp Rag.
            <br />
           I enjoy creating solutions that combine modern software development with AI technologies to solve real-world problems.
            <br />

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Full Stack Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> E-commerce , Business,  Portfolio Website
              </li>
            <li className="about-activity">
              <ImPointRight /> AI Machine Learning Projects AI chatbots
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Areeba</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
