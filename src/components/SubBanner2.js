import React from 'react';
import './SubBanner.css';
import github_icon from '../assets/images/github_icon.png';
import { Container, Button } from 'react-bootstrap';

function SubBanner2() {
    return (
        <Container>
            <div className="sub-banner">
                <div className="left-side-2">
                    <a href="https://github.com/Westron-AI" target='_blank'>
                        <img src={github_icon} class='github-icon'/>
                        <Button>Perfil no GitHub</Button>
                    </a>
                </div>
                <div className="right-side-2">
                    <div className="right-side-content">
                        <h2>Open-source</h2>
                        <br></br>
                        <p>
                        O modelo de tradução automática está disponível em open-source para download. Os materiais são de acesso aberto, permitindo que todos possam explorar e utilizar.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default SubBanner2;
