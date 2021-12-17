import React from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

const LoginPage = () => {    

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();
        // agregar una nueva ruta al stack de navegacion
        // navigate('/usuarios')

        // reemplazar el historial para no poder regresar a la ruta previa
        navigate('/usuarios', {
            replace: true
        })
        console.log('login');
    }

    return (
        <div className="login">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Login</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="Email"
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="Password"
                            />
                        </div>
                        <div className="form-group mt-4">
                            <center>
                                <input
                                    type="submit"
                                    className="btnSubmit"
                                    value="Enviar"
                                />
                            </center>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
