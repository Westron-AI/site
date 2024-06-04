import React from 'react';
import './MainBanner.css';
import banner_image from '../assets/images/banner_image.jpg';

function MainBanner() {
    return (
        <section className="main-banner">
            <div className="content-left">
                <h2>Democratização do acesso a informação</h2>
                <h3>A Westron AI torna a tradução de documentações no campo da tecnologia acessível, precisa e eficiente para todos.</h3>
                <button className='button'>Soluções Disponíveis</button>
            </div>
        </section>
    )
}

export default MainBanner;