import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import LOGIN_USUARIO from '../../Apollo/gql/loginUsuario'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import './login.css';

const LoginPage = () => {

    const auth = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [loginUsuario, { data, loading, error }] = useLazyQuery(LOGIN_USUARIO);

    useEffect(() => {
        if (data) {
            auth.setToken(data.Login.token);
            auth.setUser({ usuario: data.Login.usuario, rol: data.Login.rol });
            navigate('/usuarios', {
                replace: true
            })
        }
    }, [data, navigate, auth]);

    const handleLogin = (args) => {
        const { email, password } = args;        
        loginUsuario({ variables: { email, password } });
    }

    return (
        <div className="login">
        <div className="row justify-content-center align-items-center minh-100">
        <div className="col-md-6 registro-form-1 registro-container">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>

                        {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                            el correo es obligatorio
                        </div>}

                        {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                            el correo no tiene el formto correcto
                        </div>}


                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {errors.password && <div className="alert alert-danger mt-2" role="alert">
                            el password es obligatorio
                        </div>}

                      <center>  <div className="form-group mt-3">
                            {!loading && <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />}
                            {loading && <button className="btnSubmit" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>}
                        </div>
                        </center>
                    </form>
                    {error && <div className="alert alert-danger" role="alert">
                        Usuario o contraseña incorrectos
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default LoginPage
