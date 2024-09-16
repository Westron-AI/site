import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com'
import './Contato.css';

function Contato() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email:'',
        message:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_vfn106c',
            'template_z1opqz6',
            {
                from_name: formData.firstName + ' ' + formData.lastName,
                message: formData.message,
                user_email: formData.email
            },
            'yHo_8HjZJ9f1XIbRU'
        ).then((result) => {
            alert('Mensagem enviada! Responderemos em até 48 horas.');
        }, (error) => {
            alert('Erro ao enviar a mensagem, tente novamente');
        });
    };

    return (
        <div className="contato-container">
            <Row>
                <Col md={6} className="contato-texto">
                    <h2>Contate-nos</h2>
                    <p>Respondemos em até 48h. Sinta-se à vontade para contatar-nos.</p>
                </Col>
                <Col md={6}>
                    <Form className="contato-form"  onSubmit={sendEmail}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formFirstName">
                                    <Form.Label>Primeiro Nome</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Digite seu primeiro nome"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                     />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formLastName">
                                    <Form.Label>Último Nome</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Digite seu último nome"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Digite seu email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Mensagem</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={4}
                                placeholder="Digite sua mensagem"
                                name="message"
                                value={formData.message}
                                onChange={handleChange} />
                        </Form.Group>
                        <Button  type="submit" className="mt-3 submit-button">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contato;
