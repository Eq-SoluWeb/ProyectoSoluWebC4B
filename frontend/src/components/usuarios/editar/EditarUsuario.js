import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_USUARIO from '../../../Apollo/gql/setUsuario';

import '../usuarios.css';

const EditarUsuario = () => {
    const { register, handleSubmit } = useForm();

    const [crearUsuario] = useMutation(SET_USUARIO);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { nombreCompleto,identificacion, email, password, rol } = data;

        crearUsuario({ variables: { nombreCompleto, identificacion, email, password, rol } })

    }

    return (
        <div className="registro-container">
        <div className="row justify-content-center align-items-center minh-100">
            <div className="col-md-6 registro-form-1 registro-container">
                <h3>Ingresar los nuevos datos del usuario</h3> 
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre Completo" {...register("nombreCompleto", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Número de Identificación" {...register("identificacion", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="Lider">Lider</option>
                    <option value="Estudiante">Estudiante</option>
                </select>

            </div>
            <input type="submit" />

        </form>
        </div>
        </div>
        </div>
    )

}

export default EditarUsuario
