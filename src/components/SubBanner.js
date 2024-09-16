import React from 'react';
import { FaBook, FaCode, FaFileAlt } from 'react-icons/fa';
import './SubBanner.css';

function SubBanner() {
    return (
        <div className="sub-banner" style={{ backgroundColor: '#F4F4F4', padding: '20px' }}>
            <div className="left-side">
                <h2>Nossas Ações</h2>
                <br></br>
                <p>
                    A Westron AI tem como foco atuar na tradução de documentações e conteúdos técnicos, contribuindo para a disseminação de conhecimento em português. Confira ao lado algumas das nossas traduções realizadas
                </p>
            </div>
     <div className="right-side">
                <ul>
                    <li>
                        <div className="list-item">
                            <FaCode className="icon" />
                            <span>Documentação Biblioteca Flake 8</span>
                        </div>
                    </li>
                    <li>
                        <div className="list-item">
                            <FaCode className="icon" />
                            <span>Documentação Biblioteca Requests</span>
                        </div>
                    </li>
                    <li>
                        <div className="list-item">
                            <FaCode className="icon" />
                            <span>Documentação Biblioteca OpenCV</span>
                        </div>
                    </li>
                    <li>
                        <div className="list-item">
                            <FaBook className="icon" />
                            <span>Livro Computer Vision: Foundations and Applications</span>
                        </div>
                    </li>
                </ul>
                </div>
        </div>
    );
}

export default SubBanner;
