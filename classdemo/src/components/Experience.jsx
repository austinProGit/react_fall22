import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Experience() {
  return (
    <>
    <Card id="experience" className="mt-5 mb-5 experience" style={{ width: '70%' }}>
      <Card.Body>
        <Card.Title className="experience-header">Other Relevant Experience</Card.Title>
        <Card.Text className="mt-3">
          <h2>Research Assistant</h2>
          <h3>August 2021-August 2022</h3>
          <p>Worked as the Research Assistant for the CSU Computer Science Department’s Stepping-Stone Intrusion Detection Project. Created detection algorithms, set up experimental environments, performed simulated hacking, and captured, processed, and analyzed data.</p>
          <br />
          <h2>Research Assistant</h2>
          <h3>October 2021-Present</h3>
          <p>Leads a team of 5 programmers in a project to predict energy consumption in smart buildings at a US Military base. Employs cloud technologies including Microsoft Azure, Data Factory, CosmoDB, and others. Uses real-world electric meter and sensor data to train an artificial intelligence model for predictive analysis.</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Experience