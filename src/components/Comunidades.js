import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Funcoes.css';

function Comunidades() {
    return (
        <div className="funcoes-container">
            <h2 className="titulo-funcoes">Comunidades</h2>

            {/* Tradução de Documentos PDF */}
            <Row className="topico-funcoes">
                <Col>
                    <h3>Tradução de Documentos PDF</h3>
                    <p>
                        A Westron AI oferece tradução de documentações técnicas de inglês para português,
                        focando em ajudar projetos open-source, empresas e outras comunidades. Nossa
                        solução garante que a tradução de documentos técnicos seja precisa e acessível,
                        especialmente para PDFs.
                    </p>
                    <Button variant="primary" className='botao-solicitacao-acesso' href="/solicitar-pdf-traducao">
                        Solicitar Acesso
                    </Button>
                </Col>
            </Row>

            {/* API para Tradução de Sites */}
            <Row className="topico-funcoes">
                <Col>
                    <h3>API para Tradução de Sites</h3>
                    <p>
                        Além da tradução de documentos, oferecemos uma API robusta para a tradução de
                        sites, permitindo que empresas e projetos open-source traduzam seus conteúdos
                        online de maneira rápida e eficiente.
                    </p>
                    <Button variant="primary" className='botao-solicitacao-acesso' href="/solicitar-api-traducao">
                        Solicitar Acesso
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Comunidades;
