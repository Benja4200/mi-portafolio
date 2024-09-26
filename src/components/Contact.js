// Contact.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError(''); // Limpiar error cuando el usuario comienza a escribir
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.name || !formData.email || !formData.message) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    emailjs.send(
      'service_ik5gjwd',         // Reemplaza con tu ID de servicio de EmailJS
      'template_w4k8yik',        // Reemplaza con tu ID de plantilla de EmailJS
      formData,
      'Jm_ithSUSCvV3ASy5'        // Reemplaza con tu ID de usuario de EmailJS
    ).then(response => {
      setStatus('Mensaje enviado exitosamente');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }).catch(error => {
      setStatus('Hubo un problema enviando el mensaje');
    });
  };

  const whatsappNumber = '56923684022'; // Reemplaza con tu número de WhatsApp

  return (
    <Container id="contact" className="contact-section">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2>Contacto</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!error && !formData.name}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!error && !formData.email}
              />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingresa tu mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!error && !formData.message}
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}
            {status && <p className="text-success">{status}</p>}

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
          
          {/* Botón de WhatsApp */}
          <Button
            variant="success"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            className="mt-3"
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Contactar por WhatsApp
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
