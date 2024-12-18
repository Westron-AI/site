import React, { useState } from 'react';
import ModalApiKey from './ModalApiKey'; 
import './Header.css';
import './TradutorLivre.css';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { BASE_URL } from '../configs';

function TradutorLivre() {
    const [textoIngles, setTextoIngles] = useState('');
    const [textoPortugues, setTextoPortugues] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false); 

    const traduzirTexto = async () => {
        const token = localStorage.getItem('apiKey'); 

        if (!token || token=="null") {
            setShowModal(true); 
            return;
        }


        try {
            const response = await fetch(`${BASE_URL}/translate?token=${token}`, { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ texto_ingles: textoIngles }), 
            });

            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(errorData.detail || "Falha na tradução!");
            }

            const data = await response.json();
            console.log(data)
            setTextoPortugues(data['tradução'].texto_portugues)

        } catch (err) {
            setError("Erro ao traduzir o texto. Verifique sua conexão ou tente novamente.");
            console.error(err);
        }
    };

    return (
        <div>
            <Container>
                <h2 className="tradutor-livre-titulo">Tradutor Livre</h2>
            </Container>
            <Container className="tradutor-container">
                <Row>
                    <Col md={6}>
                        <Card className="mb-3 card-traducao">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="textoIngles">
                                        <Form.Label className="nome-lingua">Inglês</Form.Label>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={10} 
                                            value={textoIngles} 
                                            onChange={(e) => setTextoIngles(e.target.value)} 
                                            className="input-texto-traducao input-ingles"
                                            autoFocus 
                                        />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="mb-3 card-traducao">
                            <Card.Body>
                                <Form.Group controlId="textoPortugues">
                                    <Form.Label className="nome-lingua">Português</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={10} 
                                        value={textoPortugues} 
                                        readOnly 
                                        className="input-texto-traducao output-portugues"
                                    />
                                </Form.Group>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Button variant="primary" className="botao-traducao" onClick={traduzirTexto}>Traduzir</Button>
                {error && <div className="error-message">{error}</div>}
            </Container>

            {showModal && <ModalApiKey onClose={() => setShowModal(false)} />} {}
        </div>
    );
}

export default TradutorLivre;
