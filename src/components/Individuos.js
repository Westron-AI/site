import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Funcoes.css'; 

function Individuos() {
    return (
        <div className="funcoes-container">
            <h2 className="titulo-funcoes">Indivíduos</h2>

            {/* Plugin de Tradução para Chrome e Firefox */}
            <Row className="topico-funcoes">
                <Col>
                    <h3>Plugin de Tradução para Chrome e Firefox</h3>
                    <p>
                        A Westron AI oferece um plugin de tradução para os navegadores Chrome e Firefox. 
                        Este plugin permite que você traduza rapidamente qualquer página da web do inglês para o 
                        português com apenas um clique. É uma ferramenta perfeita para quem precisa de traduções 
                        rápidas e eficientes enquanto navega na internet.
                    </p>
                    <Button variant="primary" className='botao-solicitacao-acesso' href="/solicitar-plugin">
                        Solicitar Acesso
                    </Button>
                </Col>
            </Row>

            {/* Tradutor Livre */}
            <Row className="topico-funcoes">
                <Col>
                    <h3>Tradutor Livre</h3>
                    <p>
                        Além do plugin, oferecemos um tradutor livre que permite que você insira texto diretamente 
                        no nosso site e receba a tradução instantaneamente do inglês para o português. Ideal para 
                        traduções rápidas e práticas de pequenos trechos de texto.
                    </p>
                    <Button variant="primary" className='botao-solicitacao-acesso' href="/tradutor-livre">
                        Acessar Tradutor
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default Individuos;
