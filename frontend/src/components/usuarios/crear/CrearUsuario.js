import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_USUARIO from '../../../Apollo/gql/setUsuario';

import '../usuarios.css';

const CrearUsuario = () => {

    const { register, handleSubmit } = useForm();

    const [crearUsuario] = useMutation(SET_USUARIO);

    const handleCreate = (data) => {
        console.log('crear');
        console.log(data);

        const { nombreCompleto,identificacion, email, password, rol } = data;

        crearUsuario({ variables: { nombreCompleto, identificacion, email, password, rol } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre Completo" {...register("nombreCompleto", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Número de Identificación" {...register("identificacion", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="password" className='form-control mb-3' placeholder="Password" {...register("password", { required: true })} />
                <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="Administrador">Administrador</option>
                    <option value="Lider">Lider</option>
                    <option value="Estudiante">Estudiante</option>
                </select>
            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearUsuario
