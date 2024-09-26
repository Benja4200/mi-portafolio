import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faPython} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faUserCog , faCode } from '@fortawesome/free-solid-svg-icons';
import './Skills.css'; // Importa el archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Python', icon: faPython },
    { name: 'C#', icon: faCode },
    { name: 'Bootstrap', icon: faCss3Alt }, // Aquí puedes usar un ícono que se relacione con Bootstrap
    { name: 'Bases de Datos Relacionales', icon: faDatabase },
    { name: 'Scrum', icon: faUserCog },
    { name: 'Minería y Análisis de Datos', icon: faDatabase },
    { name: 'Inglés A1', icon: faUserCog },
    { name: 'CRISP-DM', icon: faDatabase }
  ];

  return (
    <Container id="skills" className="skills-section">
      <h2>Conocimientos</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="text-center">
              <Card.Body>
                <FontAwesomeIcon icon={skill.icon} size="4x" />
                <Card.Title className="mt-3">{skill.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skills;
