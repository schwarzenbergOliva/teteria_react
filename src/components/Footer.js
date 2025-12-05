import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-5">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Empresa</h5>
                        <p>Somos una empresa dedicada a brindar las mejores experiencias en té, con productos de alta calidad y sabores únicos.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Productos</h5>
                        <p>
                            <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Negro
                            </Link>
                        </p>
                        <p>
                            <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Verde
                            </Link>
                        </p>
                        <p>
                            <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Chai
                            </Link>
                        </p>
                        <p>
                            <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
                                Infusiones
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
                        <p>
                            <i className="fas fa-home mr-3" /> Santiago, Chile
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3" /> Contacto@teteria.cl
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3" /> +56 2 2345 6789
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Síguenos</h5>
                        <Link to="/" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link to="/" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link to="/" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-instagram" />
                        </Link>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>
                            Copyright ©2025 Todos los derechos reservados por:
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <strong className="text-warning"> La hora del té .spa</strong>
                            </Link>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-end">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <Link to="/" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-visa" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-mastercard" />
                                    </Link>
                                </li>
                                <li className="list-inline-item">
                                    <Link to="/" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-paypal" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;