import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer py-3">
            <Container>
                <Row>
                    <Col className="d-flex align-items-center text-white">
                        <span>&copy; Westron AI </span>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        <a href="/contact" className="text-white mx-2">Contato</a>
                        <a href="https://github.com/Westron-AI" className="text-white mx-2">Github</a>
                        <a href="/docs" className="text-white mx-2">Documentação</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
