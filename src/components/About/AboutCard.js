import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Ani Mathew </span>
            from <span className="purple"> Nigeria.</span>
            <br />
            Full Stack Developer, a good team player in a professional coding environment.    
            Passionate for Creating Clean, Beautiful and Responsive User Interfaces.
            <br />            
          </p>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
