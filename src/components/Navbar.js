import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: '#ff893a' }}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img 
                        src="/img/logo.webp" 
                        alt="Logo" 
                        style={{ 
                            maxHeight: '50px',
                            width: 'auto',
                            objectFit: 'contain',
                            padding: '5px'
                        }} 
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" aria-current="page" to="/" style={{ fontWeight: 500, transition: 'all 0.3s ease' }}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/news" style={{ fontWeight: 500, transition: 'all 0.3s ease' }}>
                                Novedades
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link className="nav-link text-white" to="/contact" style={{ fontWeight: 500, transition: 'all 0.3s ease' }}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;