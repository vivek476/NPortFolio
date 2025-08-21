import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
//import pdf from "../../Assets/VivS_Resume.pdf"; // Make sure path is correct
//import img from "../../Assets/VivS_Resume.jpg"; // Make sure path is correct
import img1 from "../../Assets/VivS_CV_page-1.jpg"; // Make sure path is correct
import img2 from "../../Assets/VivS_CV_page-2.jpg"; // Make sure path is correct
import pdf from "../../Assets/VivS_CV.pdf"; // Ensure this is the correct path to your PDF

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button
            variant="primary"
            href={pdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="justify-content-center mt-4">
          <img
            src={img1}
            alt="Resume Banner"
            style={{ maxWidth: "35%", height: "auto", borderRadius: "10px" }}
          />
          <img
            src={img2}
            alt="Resume Banner"
            style={{ maxWidth: "35%", height: "auto", borderRadius: "10px" }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
