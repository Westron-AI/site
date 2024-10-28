import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './ModalApiKey.css';
import { Button, CloseButton } from 'react-bootstrap';
import { BASE_URL } from '../configs';

const ModalApiKey = ({ onClose }) => {
    const [apiKey, setApiKey] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!apiKey) {
            setError("A chave da API não pode estar vazia!");
            return;
        }

        try {
            const response = await fetch(`${BASE_URL}/translate?token=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify({ texto_ingles: "Hello" }) 
            });

            if (!response.ok) {
                throw new Error('Erro na validação da chave');
            }

            const data = await response.json();
            
            if (data.tradução) {
                localStorage.setItem('apiKey', apiKey);
                setSuccess(true);
                setError('');
            } else {
                throw new Error('Chave da API inválida.');
            }

        } catch (err) {
            setError('Chave da API inválida. Por favor, tente novamente.');
            setSuccess(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="login-modal-content">
                <CloseButton className="close-button" onClick={onClose} />
                <h2>Chave da API</h2>
                {success ? (
                    <div>
                        <div className="success-message">
                            <FaCheckCircle style={{ color: 'green', fontSize: '24px', marginRight: '1rem'}} />
                            <span>Chave da API salva com sucesso!</span>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Digite sua chave da API"
                            className="input-login"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            required
                        />
                        <button type="submit">Validar e Salvar</button>
                        {error && <div className="error-message">{error}</div>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default ModalApiKey;
