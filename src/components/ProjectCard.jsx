import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const ProjectCard = ({ project }) => {
  return (
    <Card className="shadow-sm h-100">
      <Card.Img
        variant="top"
        src={project.image}
        alt={project.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <div className="mb-2">
          {project.technologies.map((tech, index) => (
            <Badge bg="secondary" className="me-1" key={index}>
              {tech}
            </Badge>
          ))}
        </div>
        <Button
          variant="primary"
          href={project.demo}
          target="_blank"
          className="me-2"
        >
          Demo
        </Button>
        <Button
          variant="outline-dark"
          href={project.github}
          target="_blank"
        >
          Code
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
