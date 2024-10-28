import React from 'react';
import './MainBanner.css';
import banner_image from '../assets/images/banner_image.png';
import { Button, Container } from 'react-bootstrap';

function MainBanner() {
    return (
        <Container>
            <section className="main-banner">
                <div className="content-left">
                    <h2>Tradução de Documentações Técnicas</h2>
                    <h3>Desenvolvido como parte de um projeto de TCC, este projeto propõe uma prova de conceito de um modelo de IA especializado em tradução automática de documentações técnicas.</h3>
                    <Button className="botao-solucoes" href="/solucoes">Soluções Disponíveis</Button>
                </div>
                <div className="content-right">
                    <img src={banner_image} alt="Banner Image" className="banner-image" />
                </div>
            </section>
        </Container>
    )
}

export default MainBanner;
