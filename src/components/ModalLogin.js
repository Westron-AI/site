import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import './ModalLogin.css';
import { Button, CloseButton } from 'react-bootstrap';

const ModalLogin = ({ onClose }) => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false); 
    const [apiKey, setApiKey] = useState(''); 

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://127.0.0.1:80/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ usuario, senha }),
            });

            if (!response.ok) {
                throw new Error("Login falhou!");
            }

            const data = await response.json();
            setApiKey(data.access_token); 
            setSuccess(true); 
            
            localStorage.setItem('apiKey', data.access_token);

        } catch (err) {
            setError("Credenciais inválidas!");
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(apiKey);
        alert("Chave copiada para a área de transferência!"); 
    };

    return (
        <div className="modal-overlay">
            <div className="login-modal-content">
                <CloseButton className="close-button" onClick={onClose}/>
                <h2 className="login-title">Login</h2>
                {success ? (
                    <div>
                        <div className="success-message">
                            <FaCheckCircle style={{ color: 'green', fontSize: '24px', marginRight: '1rem'}} />
                            <span>Login bem-sucedido!</span>
                        </div>
                        <div className="api-key-box">
                            <p>Chave da API:</p>
                            <div className="api-key">
                                <span>{apiKey}</span>
                            </div>
                        </div>
                        <Button className="copy-button" onClick={handleCopy}>Copiar</Button>
                    </div>
                ) : (
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Usuário"
                            className="input-login"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            className="input-login"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <button type="submit">Entrar</button>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default ModalLogin;
