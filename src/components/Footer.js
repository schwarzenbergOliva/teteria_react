import React from 'react';

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
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Negro
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Verde
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                Té Chai
                            </a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>
                                Infusiones
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
                        <p>
                            <i className="fas fa-home mr-3" /> Santiago, Chile
                        </p>
                        <p>
                            <i className="fas fa-envelope mr-3" /> info@tea.com
                        </p>
                        <p>
                            <i className="fas fa-phone mr-3" /> +56 2 2345 6789
                        </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Síguenos</h5>
                        <a href="#" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="btn btn-outline-light btn-floating m-1">
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p>
                            Copyright ©2025 Todos los derechos reservados por:
                            <a href="#" style={{ textDecoration: 'none' }}>
                                <strong className="text-warning"> La hora del té spa</strong>
                            </a>
                        </p>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-end">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-visa" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-mastercard" />
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: 23 }}>
                                        <i className="fab fa-cc-paypal" />
                                    </a>
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