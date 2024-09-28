import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png'; // Importe a imagem image4 aqui
import './Cards.css';

function Cards() {
  return (
    <section className="cards">
      <Container>
        <Row className="justify-content-center">
          {/* Cards para INDIVÍDUOS */}
          <Col md={3}>
            <Card className="h-100">
              <Card.Img variant='top' src={image3} />
              <Card.Body className="text-center">
                <Card.Title><strong>Plugin Chrome e Firefox</strong></Card.Title>
                <Card.Text className="text-justify">
                  Traduza documentações web de forma rápida e fácil com nossos plugins para Chrome e Firefox.
                </Card.Text>
                <Button variant="primary" size="sm" className="solution-category-button">
                  TESTE AGORA
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="h-100">
              <Card.Img variant='top' src={image2} />
              <Card.Body className="text-center">
                <Card.Title><strong>Tradução Livre</strong></Card.Title>
                <Card.Text className="text-justify">
                  Tradução instantânea de textos com nossa ferramenta de Tradução Livre. 
                </Card.Text>
                <Button href="/tradutor-livre" variant="primary" size="sm" className="solution-category-button">
                  TESTE AGORA
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cards;
