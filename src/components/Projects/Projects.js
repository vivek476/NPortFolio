import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import JP from "../../Assets/Projects/JP.png";
import EMS from "../../Assets/Projects/EMS.png";
import SMS from "../../Assets/Projects/SMS.png";

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
              imgPath={JP}
              isBlog={false}
              title="JOB PORTAL SYSTEM"
              description="The Job Portal System is a complete recruitment platform that bridges the gap between job seekers and employers. Developed using React for a dynamic frontend and integrated with a backend API, this system allows companies to post jobs, manage applicants, and allows candidates to search and apply for relevant positions—all from a single, user-friendly interface."
              ghLink="https://github.com/vivek476/VivekJPS"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMS}
              isBlog={false}
              title="Employee Management System"
              description="A system to manage employee records, roles, and performance efficiently through a centralized web interface. Employees can be added, updated, and deleted, with role-based access control for Admin and Employee modules."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Commerce System"
              description="This is a full-featured e-commerce web application built using React for the frontend and integrates with a backend API for dynamic product, cart, and user management. The system provides a seamless shopping experience, complete with authentication, product browsing, cart functionality, order placement, and user profile management."
              ghLink="https://github.com/vivek476/VivekECSUI"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SMS}
              isBlog={false}
              title="Society Management System"
              description="This is a modern, user-friendly Society Management System designed to streamline the day-to-day operations of residential housing societies or apartment complexes. Built using React for the frontend and powered by a backend API, it enables efficient management of residents, staff, notices, maintenance, and complaints in a digital and transparent manner."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            /> 
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
