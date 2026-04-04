import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              Hi, I'm Areeba — a Full Stack Developer passionate about building modern and scalable web applications.
              <br />
              <br />I specialize in developing
              <i>
                <b className="purple">end-to-end web solutions using technologies like React, Node.js, and Python,
                </b>
              </i>
              <br />creating seamless user experiences from frontend interfaces to robust backend systems and APIs.
              <br />
              <br />Alongside full stack development, I also explore Artificial Intelligence and Generative AI, where I have worked on <br/>
             
              <i>
                <b className="purple"> LLM-based chatbots and AI automation tools</b> 
               {" "}
                <b className="purple">
                
                </b>
              </i>
              <br />that help businesses improve customer interaction and streamline processes.
              <br />I enjoy building
               <b className="purple">
              </b> 
              <i>
                <b className="purple">
                  {" "}
                 practical digital products that combine clean software architecture with intelligent automation,
                </b>
                <br />with the goal of creating technology that solves real-world problems.
              </i>
              &nbsp; 
              {/* <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AreebaKhan44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/areeba-khan-6519aa1bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/areebakhan.ai?igsh=NHByOGl3Yndjb3l4"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
