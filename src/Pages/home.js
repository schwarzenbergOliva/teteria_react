import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <div id="carouselExampleAutoplaying" className="carousel slide mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/carrusel1.jpg" className="d-block w-100" alt="..." style={{ maxHeight: 500 }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/carrusel2.webp" className="d-block w-100" alt="..." style={{ maxHeight: 500 }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/carrusel3.jpg" className="d-block w-100" alt="..." style={{ maxHeight: 500 }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="my-5 d-flex" />

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 mt-4">
                                    <img src="/img/te_chai.jpg" className="img-fluid rounded-start" alt="img1" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Té chai</h5>
                                        <p className="card-text">El té chai es una mezcla india de té negro con especias como canela, cardamomo, jengibre, clavo y pimienta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 mt-4">
                                    <img src="/img/te_bosque_azul.jpg" className="img-fluid rounded-start" alt="img2" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Bosque Azul</h5>
                                        <p className="card-text">Bosque azul es la mezcla perfecta de té negro Keemun con notas de frutos del bosque y flore de hibisco.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 mt-4">
                                    <img src="/img/te_verde_naranja_canela.jpg" className="img-fluid rounded-start" alt="img3" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Naranja Canela</h5>
                                        <p className="card-text">El té verde naranja canela es una mezcla que combina el sabor del té verde con notas cítricas de naranja y un toque de canela.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div className="my-5 d-flex" />
                    </div>

                    <div className="col-md-6">
                        <img src="/img/Próximamente1.jpg" alt="" className="img-fluid" />
                        <p className="fs-4">Próximamente</p>
                    </div>

                    <div className="col-md-6">
                        <img src="/img/Próximamente2.jpg" alt="" className="img-fluid" />
                        <p className="fs-4">Próximamente</p>
                    </div>

                    <div className="col-md-12">
                        <div className="my-5 d-flex" />
                    </div>

                    <div className="col-md-4">
                        <div className="card rounded-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 p-4">
                                        <br />
                                        <i className="fa-solid fa-truck-fast ms-3 card-icon" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="fs-4">
                                            <b>Despacho operativo</b>
                                            <hr />
                                            <span className="fs-5">Consulta los plazos de despacho para tu región.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card rounded-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 p-4">
                                        <br />
                                        <i className="fa-solid fa-shop ms-3 card-icon" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="fs-4">
                                            <b>Tiendas Abiertas</b>
                                            <hr />
                                            <span className="fs-5">Revisa el estado de nuestras tiendas.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card rounded-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 p-4">
                                        <br />
                                        <i className="fa-solid fa-map-location-dot ms-3 card-icon" style={{ fontSize: '3rem' }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="fs-4">
                                            <b>Seguimiento</b>
                                            <hr />
                                            <span className="fs-5">Sigue fácilmente el estado de tu pedido.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}