import React from 'react';
import './SubBanner.css';
import github_icon from '../assets/images/github_icon.png';

function SubBanner2() {
    return (
        <div className="sub-banner" style={{ backgroundColor: '#F4F4F4', padding: '20px' }}>
            <div className="left-side-2">
                <a href="https://github.com/Westron-AI" target='_blank'>
                    <img src={github_icon} class='github-icon'/>
                    <button className='button'>Nosso Perfil no GitHub</button>
                </a>
            </div>
            <div className="right-side-2">
                <h2>Filosofia Open-source</h2>
                <br></br>
                <p>
                Baseado na filosofia Open-source, a Westron AI disponibiliza diversos conteúdos referentes à construção do Modelo de Tradução Automática. Atualmente, está disponível todo o corpora utilizado construção do protótipo.
                </p>

            </div>
        </div>
    );
}

export default SubBanner2;
