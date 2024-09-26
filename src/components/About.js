import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css"; // Añadir el archivo CSS para estilos personalizados
import miImagen from "../images/mi-imagen2.avif"; // Ajusta la ruta según tu estructura

const About = () => (
  <Container id="about" className="about-section">
    <Row className="align-items-center text-center text-md-left">
      <Col md={4} className="mb-4 mb-md-0">
        <Image src={miImagen} roundedCircle className="about-image" />
      </Col>
      <Col md={8}>
        <h2>Sobre Mí</h2>
        <p>
          Soy un estudiante recién egresado de Duoc UC, buscando comenzar mi
          carrera profesional en el desarrollo web. Tengo conocimientos básicos
          de frontend, incluyendo tecnologías como HTML, CSS y JavaScript, así
          como fundamentos de backend utilizando Node.js y Express. Estoy
          emocionado por la oportunidad de aplicar y expandir mis habilidades en
          un entorno profesional, contribuyendo a proyectos innovadores y
          desafiantes.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
