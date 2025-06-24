import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ProgressBar, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/hero.svg';
import skills from '../data/skills';

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="home-section d-flex align-items-center min-vh-100 bg-light flex-column">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="display-4 fw-bold">
              Salut, je suis <span className="text-primary">Aziz</span>
            </h1>
            <p className="lead text-muted mt-3">
              Développeur web full-stack passionné par la création d’expériences web modernes, rapides et accessibles.
            </p>
            <Button
              variant="primary"
              className="mt-4 px-4 py-2"
              onClick={() => navigate('/projets')}
            >
              Voir mes projets
            </Button>
          </Col>
          <Col md={6} className="text-center mt-5 mt-md-0">
            <img
              src={heroImg}
              alt="Développement Web"
              className="img-fluid"
              style={{ maxHeight: '400px' }}
            />
          </Col>
        </Row>

        {/* Section Skills */}
        <Row className="mt-5">
          <Col>
            <h2 className="mb-4 text-center">Mes Compétences</h2>
            <Row>
              {skills.map(({ name, level, icon: Icon }) => (
                <Col xs={12} md={6} lg={4} key={name} className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Icon size={30} color="#0d6efd" className="me-2" />
                    <h5 className="mb-0">{name}</h5>
                  </div>
                  <ProgressBar now={level} label={`${level}%`} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
