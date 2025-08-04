import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vivek Solanki </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            Aspiring Junior .NET Developer with 6 months of practical experience in full-stack development at Shiwansh Solutions.
            <br />
            Skilled in building and deploying scalable web applications using .NET Core and React.js.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Creation should not be only for material construction, but also for the awakening of consciousness."{" "}
          </p>
          <footer className="blockquote-footer">Vivek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
