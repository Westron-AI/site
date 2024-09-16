import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header() {
    return(
        <header className="header">
            <a href="/"><h1 className="logo">Westron AI</h1></a>
            <nav className="menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Comunidades</a></li>
                    <li><a href="#">Individuos</a></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;