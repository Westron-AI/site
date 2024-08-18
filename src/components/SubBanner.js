import React from 'react';
import './SubBanner.css';

function SubBanner() {
    return (
        <div className="sub-banner" style={{ backgroundColor: '#F4F4F4', padding: '20px' }}>
            <div className="left-side">
                <h2>Nossas Ações</h2>
                <br></br>
                <p>
                    A Westron AI tem como foco atuar na tradução de documentações e conteúdos técnicos, contribuindo para a disseminação de conhecimento em português. Confira ao lado algumas das nossas traduções autorizadas realizadas
                </p>
            </div>
            <div className="right-side">
                <ul>
                    <li>Tradução Documentação 1</li>
                    <li>Tradução Documentação 2</li>
                    <li>Tradução Ebook 1</li>
                    <li>Tradução Ebook 2</li>
                    <li>Tradução Curso</li>
                </ul>
            </div>
        </div>
    );
}

export default SubBanner;
