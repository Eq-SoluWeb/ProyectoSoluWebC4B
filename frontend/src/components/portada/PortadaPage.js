import React from 'react';
import { useNavigate } from 'react-router-dom';
import './portada.css';

const PortadaPage = () => {

    const navigate = useNavigate();

    const handlePortada = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/registro', {
            replace: true
        })
        console.log('registro');
    }

    return (
        <div className="portada">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 registro-form-1 registro-container">
                    <form onSubmit={handlePortada}>
                        <div className="form-group">
                            <center>
                                <h1>Bienvenido al Gestor de Proyectos SoluWeb</h1>
                            </center>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PortadaPage
