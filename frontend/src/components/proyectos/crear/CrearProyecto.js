import { useMutation } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import SET_PROYECTO from '../../../Apollo/gql/setProyecto';

const CrearProyecto = () => {

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
                <input type="text" className='form-control mb-3' placeholder="Lider" {...register("lider", { required: true })} />
                <select className='form-control mb-3' {...register("rol", { required: true })}>
                    <option value="61ad67b3530c5bd0571064b1">Lider</option>
                    <option value="61ad680d530c5bd0571064b7">Estudiante</option>
                </select>
            </div>
            <input type="submit" />

        </form>
    )
}

export default CrearProyecto
