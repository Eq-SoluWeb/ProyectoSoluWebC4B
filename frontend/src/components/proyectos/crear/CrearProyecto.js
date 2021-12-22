import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SET_PROYECTO from '../../../Apollo/gql/setProyecto';
import useAuth from '../../../hooks/useAuth';

const CrearProyecto = () => {
    const auth=useAuth();
    console.log(auth);
    const navigate=useNavigate();
    if(!auth.isLogged()){
        navigate('/', {
            replace: true
        }) 
    }

    const { register, handleSubmit } = useForm();

    const [crearProyecto] = useMutation(SET_PROYECTO);

    const handleCreate = (data) => {
        console.log('Crear Proyecto');
        console.log(data);

        const { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos, presupuesto } = data;

        crearProyecto({ variables: { nombreProyecto, fechaInicio, fechaTerminacion, lider, objetivosGenerales, objetivosEspecificos, presupuesto } })

    }

    return (
        <form onSubmit={handleSubmit(handleCreate)}>
            <div className="form-group">
                <input type="text" className='form-control mb-3' placeholder="Nombre del Proyecto" {...register("nombreProyecto", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Inicio" {...register("fechaInicio", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Fecha de Terminación" {...register("fechaTerminacion", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Generales" {...register("objetivosGenerales", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Objetivos Específicos" {...register("objetivosEspecificos", { required: true })} />
                <input type="text" className='form-control mb-3' placeholder="Presupuesto" {...register("Presupuesto", { required: true })} />
                <input type="text" className='form-control mb-3' defaultValue={auth.user.usuario} placeholder="Lider" {...register("lider", { required: true })} />
                 
            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearProyecto
