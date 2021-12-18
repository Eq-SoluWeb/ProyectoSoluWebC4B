import { useMutation, useQuery } from '@apollo/client';
import React from 'react'
import { useForm } from 'react-hook-form';
import EDITAR_USUARIO from '../../../Apollo/gql/editarUsuario';
 
import GET_UN_USUARIO from '../../../Apollo/gql/getUnUsuario';
import useAuth from '../../../hooks/useAuth';
 


const EditarUsuario = ({ userid }) => {
    const auth=useAuth();
    const myId=auth.user.usuario;
    console.log('userid', userid);
    
    const { register, handleSubmit } = useForm();

    const { loading, data, error } = useQuery(GET_UN_USUARIO, { variables: { id:  myId } });

    const [EditarUsuario] = useMutation(EDITAR_USUARIO);
    const handleUpdate = (args) => {
        console.log('prueba')
        const { myId,nombreCompleto, identificacion, email  } = args;
        EditarUsuario({ variables: { myId,nombreCompleto, identificacion, email } })
       
    }

    return (

        <>
            {/* {data && <h1>datos</h1>} */}
            {error && <h1>error</h1>}
            {loading && <h1>datos</h1>}
            {data && <form onSubmit={handleSubmit(handleUpdate)}>
                <div className="form-group">
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.nombreCompleto} placeholder="Nombre" {...register("nombreCompleto", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.identificacion} placeholder="Apellido" {...register("identificacion", { required: true })} />
                    <input type="text" className='form-control mb-3' defaultValue={data.unUsuario.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    
                </div>
                <input className='btn btn-success' type="submit" />

            </form>}
        </>

    )
}

export default EditarUsuario