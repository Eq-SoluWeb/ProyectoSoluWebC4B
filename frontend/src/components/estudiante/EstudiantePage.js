import React from 'react';
import { useNavigate } from 'react-router-dom';
import './estudiante.css';

const EstudiantePage = () => {

    const navigate = useNavigate();

    const handleEstudiante = (e) => {

        e.preventDefault();
        
        navigate('/estudiante', {
            replace: true
        })
        console.log('estudiante');
    }

    return (
        <div className="estudiante">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 registro-form-1 registro-container">
                    <form onSubmit={handleEstudiante}>
                        <div className="form-group">
                            <center>
                                <h1>Usuario Estudiante</h1>
                            </center>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EstudiantePage
