import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validación de correo simple
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
            alert('Por favor, ingrese un correo válido.');
            return;
        }

        // Preparar payload usando variables de entorno comentadas
        const payload = {
            service_id: process.env.REACT_APP_API_EMAILJS_SERVICE_ID,
            template_id: process.env.REACT_APP_API_EMAILJS_TEMPLATE_ID,
            user_id: process.env.REACT_APP_API_EMAILJS_USER_ID,
            accessToken: process.env.REACT_APP_API_EMAILJS_ACCESS_TOKEN,
            template_params: {
                name,
                time: new Date().toLocaleString().replace(/\//g, '-'),
                message,
                email
            }
        };

        // Endpoint EmailJS (por defecto)
        const endpoint = process.env.REACT_APP_API_EMAILJS_ENDPOINT || 'https://api.emailjs.com/api/v1.0/email/send';

        setSending(true);

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then((res) => {
                if (res.status !== 200) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then((text) => {
                alert('Mensaje enviado. Gracias por contactarnos.');
                e.target.reset();
            })
            .catch((err) => {
                console.error('Error enviando mensaje:', err);
                alert('Ocurrió un error al enviar el mensaje. Intenta nuevamente.');
                console.log(JSON.stringify(payload));
            })
            .finally(() => setSending(false));
    };

    const [sending, setSending] = useState(false);

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-4">Contáctanos</h2>
                        <form className="d-grid" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="mt-2 btn btn-primary" disabled={sending}>
                                {sending ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Enviando...
                                    </>
                                ) : (
                                    'Enviar Mensaje'
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4">Información de Contacto</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Oficina Central</h5>
                                <p><i className="fas fa-map-marker-alt me-2"></i> Av. macul 6305, Macul,Santiago, Chile</p>
                                <p><i className="fas fa-phone me-2"></i> +56 2 2345 6789</p>
                                <p><i className="fas fa-envelope me-2"></i> Contacto@teteria.cl</p>
                                <p><i className="fas fa-clock me-2"></i> Lunes a Viernes: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Overlay simple que aparece mientras se envía el formulario */}
            {sending && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000
                }}>
                    <div style={{
                        background: '#111',
                        color: '#fff',
                        padding: '16px 24px',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div className="spinner-border text-light me-2" role="status" aria-hidden="true"></div>
                        <div>Enviando...</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Contact;



