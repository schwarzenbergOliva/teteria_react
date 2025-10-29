import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
const News = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Últimas Novedades</h2>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src="/img/beneficios_hojas.jpg" className="card-img-top" alt="Nuevo Té" />
                            <div className="card-body">
                                <h5 className="card-title">Nuevo Té Chai Especiado</h5>
                                <p className="card-text">Descubre nuestra nueva mezcla de té chai con especias seleccionadas.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card">
                            <img src="/img/iniciar_dia.jpg" className="card-img-top" alt="Té Especial" />
                            <div className="card-body">
                                <h5 className="card-title">Edición Limitada</h5>
                                <p className="card-text">Nueva colección de té de temporada con sabores únicos.</p>
                                <a href="#" className="btn btn-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default News;