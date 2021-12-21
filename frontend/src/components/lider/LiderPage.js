import React from 'react';
import { useNavigate } from 'react-router-dom';
import './lider.css';

const LiderPage = () => {

    const navigate = useNavigate();

    const handleLider = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/lider', {
            replace: true
        })
        console.log('lider');
    }

    return (
        <div className="lider">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 registro-form-1 registro-container">
                    <form onSubmit={handleLider}>
                        <div className="form-group">
                            <center>
                                <h1>Usuario Lider</h1>
                            </center>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LiderPage
