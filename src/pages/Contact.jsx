import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3x1gz0x',     
      'template_vdy9hpw',    
      formRef.current,
      'wYUKJQtgH5EDvpza3'      
    ).then(
      (result) => {
        console.log(result.text);
        setSuccess(true);
        formRef.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert("Erreur lors de l'envoi. Réessaie.");
      }
    );
  };

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4 fw-bold">Contactez-moi</h2>

            {success && (
              <Alert variant="success">Message envoyé avec succès !</Alert>
            )}

            <Form ref={formRef} onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="name" required placeholder="Votre nom" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required placeholder="votre@email.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" required placeholder="Votre message..." />
              </Form.Group>

              <Form.Group className="mb-3 d-none">
                {/* champ caché si besoin d’un title pour l’objet */}
                <Form.Control type="text" name="title" value="Message depuis le portfolio" readOnly />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit" className="px-5">
                  Envoyer
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
