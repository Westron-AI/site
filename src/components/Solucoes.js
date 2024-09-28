import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Funcoes.css'; 

function Individuos() {
    return (
        <Container>
            <div className="funcoes-container">

                {/* Plugin de Tradução para Chrome e Firefox */}
                <Row className="topico-funcoes">
                    <Col>
                        <h3 className="titulo-interface">Plugin de Tradução para Chrome e Firefox</h3>
                        <p className="descricao-interface">
                            Este plugin permite que você traduza rapidamente qualquer trecho de uma página da web do inglês para o 
                            português com apenas um clique.
                        </p>
                        <Button variant="primary" className='botao-solicitacao-acesso' href="/solicitar-plugin">
                            Solicitar Acesso
                        </Button>
                    </Col>
                </Row>

                {/* Tradutor Livre */}
                <Row className="topico-funcoes">
                    <Col>
                        <h3 className="titulo-interface">Tradutor Livre</h3>
                        <p className="descricao-interface">
                            Tradutor livre que permite que você insira texto diretamente 
                            do site e receba a tradução instantaneamente do inglês para o português. </p>
                        <Button variant="primary" className='botao-solicitacao-acesso' href="/tradutor-livre">
                            Acessar Tradutor
                        </Button>
                    </Col>
                </Row>
            </div>
    </Container>
    );
}

export default Individuos;
