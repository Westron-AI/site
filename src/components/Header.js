import React from 'react';
import './Header.css';

function Header() {
    return(
        <header className="header">
            <h1 className="logo">Westron AI</h1>
            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Empresas</a></li>
                    <li><a href="#">Individuos</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;