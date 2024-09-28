import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import ModalLogin from './ModalLogin'; // Importe o ModalLogin

function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <header className="header">
                <h1 className="logo"><a href="/">Westron AI</a></h1>
                <nav className="menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/solucoes">Soluções</a></li>
                        <li><Link to="/contato">Contato</Link></li>
                        <li>
                            <Button 
                                type="button" 
                                className="api-button" 
                                onClick={handleOpenModal} // Abra o modal ao clicar no botão
                            >
                                Obter chave da API
                            </Button>
                        </li>
                    </ul>
                </nav>

                {/* Renderize o modal */}
                {showModal && <ModalLogin onClose={handleCloseModal} />}
            </header>
        </Container>
    );
}

export default Header;
