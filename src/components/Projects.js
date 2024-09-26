import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Projects.css';  // Añadir el archivo CSS para estilos personalizados

const Projects = () => {
  return (
    <Container id="projects" className="projects-section">
      <Row>
        <Col>
          <h2>Proyectos</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>Proyecto 1</Card.Title>
              <Card.Text>
              Proximamentre...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="project-card">
            <Card.Body>
              <Card.Title>Proyecto 2</Card.Title>
              <Card.Text>
                Proximamentre...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Añade más proyectos aquí */}
      </Row>
    </Container>
  );
}

export default Projects;
