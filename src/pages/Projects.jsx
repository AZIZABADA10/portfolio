import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <h2 className="mb-4 text-center fw-bold">Mes Projets</h2>
        <Row className="g-4">
          {projects.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
