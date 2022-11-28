import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
  return (
    <>
    <Card className="mt-5 mb-5 bio" style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title className="bio-header">About Me</Card.Title>
        <Card.Text>
          I am a current Computer Science student at CSU majoring in Web Development. 
          I have a passion for coding, and I love learning new things every day!
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default About