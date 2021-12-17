import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './registro.css';
import SET_USUARIO from '../../Apollo/gql/setUsuario';

const RegistroPage = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const [crearUsuario] = useMutation(SET_USUARIO);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { nombreCompleto, identificacion, email, password, rol } = data;

        crearUsuario({ variables: { nombreCompleto, identificacion, email, password, rol } })

        navigate('/login', {
            replace: true
        })

    }

    return (
        <div className="registro">
            <div className="row justify-content-center align-items-center minh-100">
                <div className="col-md-6 registro-form-1 registro-container">
                    <h3>Registro</h3>
                    <form onSubmit={handleSubmit(handleCreate)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Completo"
                                name="nombre"
                                {...register("nombreCompleto", { required: true })}
                            />                            
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de identificación"
                                name="identificacion"
                                {...register("identificacion", { required: true })}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>
                        <select className='form-control mb-3 mt-2' {...register("rol", { required: true })}>
                            <option disabled-selected>Elija su rol</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Lider">Lider</option>
                            <option value="Estudiante">Estudiante</option>
                        </select>
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

export default RegistroPage
