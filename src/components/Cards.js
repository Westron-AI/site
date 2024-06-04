import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import image1 from '../assets/images/image1.svg'
import image2 from    '../assets/images/image2.svg' 
function Cards() {
  return (
 
    <section className="cards">
      <h3>SOLUÇÕES PARA EMPRESAS</h3>
      <Container>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant='top' src={image1} height='300rem'/>
              <Card.Body>
                <Card.Title className="text-center"><strong>Tradução de Documentos PDF</strong></Card.Title>
                <Card.Text>
                Tradução precisa e eficiente de documentos PDF. Nossa plataforma mantém o formato e a integridade do conteúdo original, proporcionando uma experiência de tradução sem falhas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant='top' src={image2} height='300rem' />
              <Card.Body>
                <Card.Title className="text-center"><strong>APIs para Tradução de Sites</strong></Card.Title>
                <Card.Text>
                Tradução rápida e precisa de sites. Nossa plataforma preserva o layout e a funcionalidade original, garantindo uma experiência de usuário excelente em todos idiomas. Facilite a internacionalização da sua documentação com a Westron AI. <strong>Temos suporte para Read the Docs!</strong>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Cards;
