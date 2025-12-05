import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';

const API_URL = process.env.REACT_APP_API_NEWS_STATSUP;

const News = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchItems = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({}),
                    signal: controller.signal
                });

                if (!res.ok) throw new Error(`HTTP ${res.status}`);

                const data = await res.json();

                // Expecting array { titulo, imagen, cuerpo }
                if (Array.isArray(data)) {
                    setItems(data);
                } else {
                    setError('Respuesta de API en formato inesperado');
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Error al cargar novedades');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
        return () => controller.abort();
    }, []);

    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <h2 className="text-center mb-4">Últimas Novedades</h2>

                {loading && (
                    <div className="text-center my-4">Cargando novedades...</div>
                )}

                {error && (
                    <div className="alert alert-danger" role="alert">{error}</div>
                )}

                <div className="row">
                    {!loading && items.length === 0 && !error && (
                        <div className="col-12">
                            <p>No hay novedades disponibles.</p>
                        </div>
                    )}

                    {items.map((item, idx) => (
                        <div className="col-md-6 mb-4" key={idx}>
                            <div className="card h-100">
                                {item.imagen && (
                                    <img
                                        src={item.imagen}
                                        className="card-img-top"
                                        alt={item.titulo || 'Imagen'}
                                        style={{ width: '100%', height: 420, objectFit: 'cover' }}
                                    />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{item.titulo}</h5>
                                    <p
                                        className="card-text"
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {item.cuerpo}
                                    </p>
                                    <div className="mt-auto">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => { setSelectedItem(item); setShowModal(true); }}
                                        >
                                            Ver más
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            {/* Modal simple para mostrar la noticia completa */}
            {showModal && selectedItem && (
                <div
                    role="dialog"
                    aria-modal="true"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1050
                    }}
                    onClick={(e) => { if (e.target === e.currentTarget) { setShowModal(false); setSelectedItem(null); } }}
                >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: 8,
                            maxWidth: 900,
                            width: '94%',
                            maxHeight: '90%',
                            overflowY: 'auto',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        <div style={{ padding: 16, borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h5 style={{ margin: 0 }}>{selectedItem.titulo}</h5>
                            <button className="btn btn-sm btn-secondary" onClick={() => { setShowModal(false); setSelectedItem(null); }}>Cerrar</button>
                        </div>
                        {selectedItem.imagen && (
                            <img src={selectedItem.imagen} alt={selectedItem.titulo || 'Imagen'} style={{ width: '100%', maxHeight: 400, objectFit: 'cover' }} />
                        )}
                        <div style={{ padding: 16 }}>
                            <p style={{ whiteSpace: 'pre-wrap' }}>{selectedItem.cuerpo}</p>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default News;