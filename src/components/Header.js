import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalLogin from './ModalLogin';
import './Header.css';

function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Navbar expand="lg" className="header">
            <Container>
                <h1 className="logo">
                    <a href="/">
                        Westron AI
                    </a>
                </h1>

                {/* Menu Hamburguer que se expande ao clicar */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Itens do Menu que serão colapsados */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/solucoes">Soluções</Nav.Link>
                        <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
                        <Button 
                            type="button" 
                            className="api-button" 
                            onClick={handleOpenModal}
                        >
                            Obter chave da API
                        </Button>
                    </Nav>
                </Navbar.Collapse>

                {/* Modal para login */}
                {showModal && <ModalLogin onClose={handleCloseModal} />}
            </Container>
        </Navbar>
    );
}

export default Header;
