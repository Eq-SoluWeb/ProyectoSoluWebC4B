import { useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';


const EditarUsuario = ({ userid }) => {

    const { register, handleSubmit } = useForm();

    const { loading, data, error } = useQuery(GET_UN_USUARIO, { variables: { id: userid } });


    const handleUpdate = (dato) => {
        
        const { nombreCompleto, identificacion, email} = dato;
        console.log("Datos enviados: " + nombreCompleto, identificacion, email);


    }

    return (

        <>
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.nombreCompleto} placeholder="Nombre Completo" {...register("nombreCompleto", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.identificacion} placeholder="Identificación" {...register("identificacion", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />                    
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario