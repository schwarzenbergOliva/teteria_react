import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Validación de correo
        const atIndex = email.indexOf('@');
        const dotIndex = email.lastIndexOf('.');
        if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
            alert('Por favor, ingrese un correo válido.');
            return;
        }

        alert('Mensaje enviado. Gracias por contactarnos.');
        e.target.reset();
    };

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
                            <button type="submit" className="mt-2 btn btn-primary">Enviar Mensaje</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4">Información de Contacto</h2>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Oficina Central</h5>
                                <p><i className="fas fa-map-marker-alt me-2"></i> Santiago, Chile</p>
                                <p><i className="fas fa-phone me-2"></i> +56 2 2345 6789</p>
                                <p><i className="fas fa-envelope me-2"></i> info@tea.com</p>
                                <p><i className="fas fa-clock me-2"></i> Lunes a Viernes: 9:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;



